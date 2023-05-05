import React from "react";
import Button from "./Button";

type Props = {
  onClick: (key:string) => void
};

const Keyboard = ({onClick, ...props}: Props) => {
  return (
    <div
      className="grid grid-cols-4 grid-rows-5 keyboard"
      >
      <Button onClick={()=> onClick("C")} variant="purple">C</Button>
      <Button onClick={()=> onClick("+/-")} variant="purple">+/-</Button>
      <Button onClick={()=> onClick("%")} variant="purple">%</Button>
      <Button onClick={()=> onClick("/")} variant="orange">➗</Button>
      <Button onClick={()=> onClick("7")}>7</Button>
      <Button onClick={()=> onClick("8")}>8</Button>
      <Button onClick={()=> onClick("9")}>9</Button>
      <Button onClick={()=> onClick("*")} variant="orange">✖️</Button>
      <Button onClick={()=> onClick("4")}>4</Button>
      <Button onClick={()=> onClick("5")}>5</Button>
      <Button onClick={()=> onClick("6")}>6</Button>
      <Button onClick={()=> onClick("-")} variant="orange">➖</Button>
      <Button onClick={()=> onClick("1")}>1</Button>
      <Button onClick={()=> onClick("2")}>2</Button>
      <Button onClick={()=> onClick("3")}>3</Button>
      <Button onClick={()=> onClick("+")} variant="orange">➕</Button>
      <Button onClick={()=> onClick("0")} className="col-span-2">0</Button>
      <Button onClick={()=> onClick(",")}>,</Button>
      <Button onClick={()=> onClick("=")} variant="orange">🟰</Button>
    </div>
  );
};

export default Keyboard;
