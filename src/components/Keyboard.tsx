import React from "react";
import Button from "./Button";
import useKeyboard from "../hooks/useKeyboard";
import KEYS from "../config/KEYS";

type Props = {
  onClick: (key: string) => void;
};

const Keyboard = ({ onClick }: Props) => {
  const { pressed } = useKeyboard(onClick);
  return (
    <div className="keyboard grid grid-cols-4 grid-rows-5">
      <Button
        active={pressed.has(KEYS.CLEAR)}
        onClick={() => onClick(KEYS.CLEAR)}
        variant="purple"
      >
        C
      </Button>
      <Button
        active={pressed.has(KEYS.NEGATE)}
        onClick={() => onClick(KEYS.NEGATE)}
        variant="purple"
      >
        +/-
      </Button>
      <Button
        active={pressed.has(KEYS.PERCENTAGE)}
        onClick={() => onClick(KEYS.PERCENTAGE)}
        variant="purple"
      >
        %
      </Button>
      <Button
        active={pressed.has(KEYS.DIVIDE)}
        onClick={() => onClick(KEYS.DIVIDE)}
        variant="orange"
      >
        ➗
      </Button>
      <Button
        active={pressed.has(KEYS.NUMBER_7)}
        onClick={() => onClick(KEYS.NUMBER_7)}
      >
        7
      </Button>
      <Button
        active={pressed.has(KEYS.NUMBER_8)}
        onClick={() => onClick(KEYS.NUMBER_8)}
      >
        8
      </Button>
      <Button
        active={pressed.has(KEYS.NUMBER_9)}
        onClick={() => onClick(KEYS.NUMBER_9)}
      >
        9
      </Button>
      <Button
        active={pressed.has(KEYS.MULTIPLY)}
        onClick={() => onClick(KEYS.MULTIPLY)}
        variant="orange"
      >
        ✖️
      </Button>
      <Button
        active={pressed.has(KEYS.NUMBER_4)}
        onClick={() => onClick(KEYS.NUMBER_4)}
      >
        4
      </Button>
      <Button
        active={pressed.has(KEYS.NUMBER_5)}
        onClick={() => onClick(KEYS.NUMBER_5)}
      >
        5
      </Button>
      <Button
        active={pressed.has(KEYS.NUMBER_6)}
        onClick={() => onClick(KEYS.NUMBER_6)}
      >
        6
      </Button>
      <Button
        active={pressed.has(KEYS.SUBSTRACT)}
        onClick={() => onClick(KEYS.SUBSTRACT)}
        variant="orange"
      >
        ➖
      </Button>
      <Button
        active={pressed.has(KEYS.NUMBER_1)}
        onClick={() => onClick(KEYS.NUMBER_1)}
      >
        1
      </Button>
      <Button
        active={pressed.has(KEYS.NUMBER_2)}
        onClick={() => onClick(KEYS.NUMBER_2)}
      >
        2
      </Button>
      <Button
        active={pressed.has(KEYS.NUMBER_3)}
        onClick={() => onClick(KEYS.NUMBER_3)}
      >
        3
      </Button>
      <Button
        active={pressed.has(KEYS.ADD)}
        onClick={() => onClick(KEYS.ADD)}
        variant="orange"
      >
        ➕
      </Button>
      <Button
        active={pressed.has(KEYS.NUMBER_0)}
        onClick={() => onClick(KEYS.NUMBER_0)}
        className="col-span-2"
      >
        0
      </Button>
      <Button
        active={pressed.has(KEYS.COMMA)}
        onClick={() => onClick(KEYS.COMMA)}
      >
        ,
      </Button>
      <Button
        active={pressed.has(KEYS.EQUALS)}
        onClick={() => onClick(KEYS.EQUALS)}
        variant="orange"
      >
        🟰
      </Button>
    </div>
  );
};

export default Keyboard;
