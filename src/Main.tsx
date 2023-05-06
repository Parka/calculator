import { useCallback, useEffect, useState } from "react";
import Keyboard from "./components/Keyboard";

type OperationFunction = (a:number, b:number) => number;
const OPERATIONS: Record<string, OperationFunction> = {
  ['+']: (a, b)=> a + b,
  ['-']: (a, b)=> a - b,
  ['*']: (a, b)=> a * b,
  ['/']: (a, b)=> a / b,
}

const PERCENTAGE_OPERATIONS: Record<string, OperationFunction> = {
  ['+']: (a, b)=> (a + a * b/100),
  ['-']: (a, b)=> (a - a * b/100),
  ['*']: (a, b)=> (a * b)/100,
  ['/']: (a, b)=> (a / b)/100,
}

const KEY_MAP: Record<string, string> = {
  Enter: '=',
  ' ': '=',
  c: 'C',
  Delete: 'C',
  Escape: 'C',
}

const Main = () =>{
  const [accumulator, setAccumulator] = useState(0)
  const [current, setCurrent] = useState('0')
  const [operation, setOperation] = useState<string>(null)
  const [newNumberFlag, setNewNumberFlag] = useState(false)
  
  const onClick = useCallback((pressed: string) => {
    if(!newNumberFlag && pressed === "Backspace") {
      setCurrent(
        current.length > 1
          ? current.slice(0, -1)
          : '0'
      )
    }

    if((newNumberFlag || current === '0') && pressed === '.')
      pressed = '0.'

    if(newNumberFlag && !isNaN(Number(pressed))) {
      setNewNumberFlag(false)
      return setCurrent(pressed)
    }

    if(!isNaN(Number(current+pressed)))
    {
      return setCurrent(
        (current === "0")
          ? pressed
          : current+pressed
      )
    }

    if(pressed === '+/-'){
      if(current === '0') return
      setCurrent(
        current.match('-')
          ? current.replace('-', '')
          : '-' + current
      )
      return
    }

    if(
      pressed === 'C' ||
      (newNumberFlag && pressed === "Backspace")
    ) {
      setOperation(null)
      setAccumulator(0)
      setCurrent('0')
      return
    }

    if(operation) {
      if(pressed === "="){
        const value = OPERATIONS[operation](accumulator, Number(current))
        setAccumulator(value)
        setCurrent(value.toString())
        setOperation(null)
        setNewNumberFlag(true)
        return
      }

      if(pressed === "%"){
        const value = PERCENTAGE_OPERATIONS[operation](accumulator, Number(current))
        setAccumulator(value)
        setCurrent(value.toString())
        setOperation(null)
        setNewNumberFlag(true)
        return
      }
    }

    if(Object.keys(OPERATIONS).includes(pressed)) {
      setOperation(pressed)
      setAccumulator(Number(current))
      setNewNumberFlag(true)
      return
    }
  }, [accumulator, setAccumulator, current, setCurrent, operation, setOperation, newNumberFlag, setNewNumberFlag])

  useEffect(() => {
    const handleKey = (e:KeyboardEvent) => onClick(KEY_MAP[e.key] || e.key)
    document.body.addEventListener("keyup", handleKey )
  
    return () => {
      document.body.removeEventListener("keyup", handleKey)
    }
  }, [onClick])

  return (
  <main>
    <h2 className="text-3xl text-blue-700 p-2 h-16 text-right">{current}</h2>
    <Keyboard onClick={onClick}/>
  </main>
)};

export default Main;
