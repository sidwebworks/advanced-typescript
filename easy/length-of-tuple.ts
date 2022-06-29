/**
 * For given a tuple, you need create a generic Length, pick the length of the tuple
 */

export type Length<T extends readonly unknown[]> = T extends []
  ? T["length"]
  : never;

type tesla = ["tesla", "model 3", "model X", "model Y"];

type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5
