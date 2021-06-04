import { IDateState } from "./../types/index";
import { atom } from "recoil";

export const dateState = atom({
  key: "date/atom",
  default: {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  } as IDateState,
});
