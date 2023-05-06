import { useCallback, useState } from "react";
import KEYS from "../config/KEYS";

type OperationFunction = (a: number, b: number) => number;
const OPERATIONS: Record<string, OperationFunction> = {
  [KEYS.ADD]: (a, b) => a + b,
  [KEYS.SUBSTRACT]: (a, b) => a - b,
  [KEYS.MULTIPLY]: (a, b) => a * b,
  [KEYS.DIVIDE]: (a, b) => a / b,
};

const PERCENTAGE_OPERATIONS: Record<string, OperationFunction> = {
  [KEYS.ADD]: (a, b) => a + (a * b) / 100,
  [KEYS.SUBSTRACT]: (a, b) => a - (a * b) / 100,
  [KEYS.MULTIPLY]: (a, b) => (a * b) / 100,
  [KEYS.DIVIDE]: (a, b) => a / b / 100,
};

const MINUS = "-";
const EMPTY = "";

const useCalculator = () => {
  const [accumulator, setAccumulator] = useState(0);
  const [current, setCurrent] = useState(KEYS.NUMBER_0);
  const [operation, setOperation] = useState<string>(null);
  const [newNumberFlag, setNewNumberFlag] = useState(false);

  const onClick = useCallback(
    (pressed: string) => {
      console.log(pressed);
      if (!newNumberFlag && pressed === KEYS.DELETE) {
        setCurrent(current.length > 1 ? current.slice(0, -1) : KEYS.NUMBER_0);
      }

      if (
        (newNumberFlag || current === KEYS.NUMBER_0) &&
        pressed === KEYS.COMMA
      )
        pressed = KEYS.NUMBER_0 + KEYS.COMMA;

      if (newNumberFlag && !isNaN(Number(pressed))) {
        setNewNumberFlag(false);
        return setCurrent(pressed);
      }

      if (!isNaN(Number(current + pressed))) {
        return setCurrent(
          current === KEYS.NUMBER_0 ? pressed : current + pressed
        );
      }

      if (pressed === KEYS.NEGATE) {
        if (current === KEYS.NUMBER_0) return;
        setCurrent(
          current.match(MINUS) ? current.replace(MINUS, EMPTY) : MINUS + current
        );
        return;
      }

      if (
        pressed === KEYS.CLEAR ||
        (newNumberFlag && pressed === KEYS.DELETE)
      ) {
        setOperation(null);
        setAccumulator(0);
        setCurrent(KEYS.NUMBER_0);
        return;
      }

      if (operation) {
        if (pressed === KEYS.EQUALS) {
          const value = OPERATIONS[operation](accumulator, Number(current));
          setAccumulator(value);
          setCurrent(value.toString());
          setOperation(null);
          setNewNumberFlag(true);
          return;
        }

        if (pressed === KEYS.PERCENTAGE) {
          const value = PERCENTAGE_OPERATIONS[operation](
            accumulator,
            Number(current)
          );
          setAccumulator(value);
          setCurrent(value.toString());
          setOperation(null);
          setNewNumberFlag(true);
          return;
        }
      }

      if (Object.keys(OPERATIONS).includes(pressed)) {
        setOperation(pressed);
        setAccumulator(Number(current));
        setNewNumberFlag(true);
        return;
      }
    },
    [
      accumulator,
      setAccumulator,
      current,
      setCurrent,
      operation,
      setOperation,
      newNumberFlag,
      setNewNumberFlag,
    ]
  );

  return { current, onClick };
};

export default useCalculator;
