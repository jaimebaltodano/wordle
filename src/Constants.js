export const KEYS = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Ñ",
  "ENTER",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "«",
];

export const MAXROW = 6;
export const MAXCOL = 5;
export const EMPTYARRAY = new Array(MAXROW);
for (let i = 0; i < MAXROW; i++) {
  EMPTYARRAY[i] = new Array(MAXCOL).fill("");
}

export const CLASSARRAY = new Array(MAXROW);
for (let i = 0; i < MAXROW; i++) {
  CLASSARRAY[i] = new Array(MAXCOL).fill("");
}