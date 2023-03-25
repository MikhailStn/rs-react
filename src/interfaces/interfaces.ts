export interface ISearch {
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
  consoles: string[]
}