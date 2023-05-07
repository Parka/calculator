import { useEffect, useState } from "react";
import { getMappedKey } from "../config/KEYS";

type Props = (key: string) => void;

const EVENTS = {
  KEY_UP: "keyup",
  KEY_DOWN: "keydown",
};

const useKeyboard = (onClick: Props) => {
  const [pressed, setPressed] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      e.preventDefault();
      const key = getMappedKey(e.key);
      const newPressed = new Set(pressed);
      newPressed.delete(key);
      setPressed(newPressed);
      onClick(key);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      const key = getMappedKey(e.key);
      const newPressed = new Set(pressed);
      newPressed.add(key);
      setPressed(newPressed);
    };

    document.body.addEventListener(EVENTS.KEY_UP, handleKeyUp);
    document.body.addEventListener(EVENTS.KEY_DOWN, handleKeyDown);

    return () => {
      document.body.removeEventListener(EVENTS.KEY_UP, handleKeyUp);
      document.body.removeEventListener(EVENTS.KEY_DOWN, handleKeyDown);
    };
  }, [onClick, pressed, setPressed]);

  return { pressed };
};

export default useKeyboard;
