const KEYS = {
  EQUALS: "=",
  CLEAR: "C",
  NEGATE: "+/-",
  PERCENTAGE: "%",
  DIVIDE: "/",
  NUMBER_0: "0",
  NUMBER_1: "1",
  NUMBER_2: "2",
  NUMBER_3: "3",
  NUMBER_4: "4",
  NUMBER_5: "5",
  NUMBER_6: "6",
  NUMBER_7: "7",
  NUMBER_8: "8",
  NUMBER_9: "9",
  MULTIPLY: "*",
  SUBSTRACT: "-",
  ADD: "+",
  COMMA: ".",
  DELETE: "Backspace",
};

export const KEY_MAP: Record<string, string> = {
  Enter: KEYS.EQUALS,
  " ": KEYS.EQUALS,
  c: KEYS.CLEAR,
  Delete: KEYS.CLEAR,
  Escape: KEYS.CLEAR,
};

export const getMappedKey = (key: string) => KEY_MAP[key] || key;

export default KEYS;
