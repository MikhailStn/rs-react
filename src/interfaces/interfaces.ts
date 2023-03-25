export interface ISearch {
  [key: string]: string;
}

export interface IAddCard {
  [key: string]: string;
}

export interface IGames {
  id: number;
  name: string;
  genre: string;
  description: string;
  price: string;
  posterPath: string;
  dateOfRelease: string;
  platforms: string;
  rate: string;
}

export interface ICard {
  name: string;
  date: string;
  genre: string;
  file: File;
  consoles: string[];
}

export interface IValidationForm {
  name: string;
  date: string;
  genre: string;
  platforms: string[];
  gender: string;
  file: string;
}
