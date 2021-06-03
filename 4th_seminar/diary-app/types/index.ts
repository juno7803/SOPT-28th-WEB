export interface IDiary {
  data: {
    data: {
      [key: string]: IMonth;
    };
  };
}
interface IMonth {
  0: Array<IData>;
  1: Array<IData>;
  2: Array<IData>;
  3: Array<IData>;
  4: Array<IData>;
  5: Array<IData>;
  6: Array<IData>;
  7: Array<IData>;
  8: Array<IData>;
  9: Array<IData>;
  10: Array<IData>;
  11: Array<IData>;
}

export interface IData {
  id: number;
  date: number;
  title: string;
  image: string;
  weather: string;
  tags: string[];
}

export interface IDateState {
  year: number;
  month: number;
}
