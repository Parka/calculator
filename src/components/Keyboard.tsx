import React from "react";
import Button from "./Button";

type Props = {
  onClick: (key:string) => void
  pressed: Set<string>
};

const Keyboard = ({onClick, pressed, ...props}: Props) => {
  return (
    <div
      className="grid grid-cols-4 grid-rows-5 keyboard"
      >
      <Button active={pressed.has("C")} onClick={()=> onClick("C")} variant="purple">C</Button>
      <Button active={pressed.has("+/-")} onClick={()=> onClick("+/-")} variant="purple">+/-</Button>
      <Button active={pressed.has("%")} onClick={()=> onClick("%")} variant="purple">%</Button>
      <Button active={pressed.has("/")} onClick={()=> onClick("/")} variant="orange">➗</Button>
      <Button active={pressed.has("7")} onClick={()=> onClick("7")}>7</Button>
      <Button active={pressed.has("8")} onClick={()=> onClick("8")}>8</Button>
      <Button active={pressed.has("9")} onClick={()=> onClick("9")}>9</Button>
      <Button active={pressed.has("*")} onClick={()=> onClick("*")} variant="orange">✖️</Button>
      <Button active={pressed.has("4")} onClick={()=> onClick("4")}>4</Button>
      <Button active={pressed.has("5")} onClick={()=> onClick("5")}>5</Button>
      <Button active={pressed.has("6")} onClick={()=> onClick("6")}>6</Button>
      <Button active={pressed.has("-")} onClick={()=> onClick("-")} variant="orange">➖</Button>
      <Button active={pressed.has("1")} onClick={()=> onClick("1")}>1</Button>
      <Button active={pressed.has("2")} onClick={()=> onClick("2")}>2</Button>
      <Button active={pressed.has("3")} onClick={()=> onClick("3")}>3</Button>
      <Button active={pressed.has("+")} onClick={()=> onClick("+")} variant="orange">➕</Button>
      <Button active={pressed.has("0")} onClick={()=> onClick("0")} className="col-span-2">0</Button>
      <Button active={pressed.has(".")} onClick={()=> onClick(".")}>,</Button>
      <Button active={pressed.has("=")} onClick={()=> onClick("=")} variant="orange">🟰</Button>
    </div>
  );
};

export default Keyboard;
