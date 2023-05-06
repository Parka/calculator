import { useEffect, useState } from "react";

const KEY_MAP: Record<string, string> = {
  Enter: "=",
  " ": "=",
  c: "C",
  Delete: "C",
  Escape: "C",
};

const getMappedKey = (key: string) => KEY_MAP[key] || key;

type Props = (key: string) => void;

const useKeyboard = (onClick: Props) => {
  const [pressed, setPressed] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      const key = getMappedKey(e.key);
      const newPressed = new Set(pressed);
      newPressed.delete(key);
      setPressed(newPressed);
      onClick(key);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = getMappedKey(e.key);
      const newPressed = new Set(pressed);
      newPressed.add(key);
      setPressed(newPressed);
    };

    document.body.addEventListener("keyup", handleKeyUp);
    document.body.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.removeEventListener("keyup", handleKeyUp);
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClick, pressed, setPressed]);

  return { pressed };
};

export default useKeyboard;
