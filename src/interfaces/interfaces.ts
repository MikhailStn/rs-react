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

export interface IValidationForm {
  id: number;
  name: string;
  date: string;
  genre: string;
  platforms: string[];
  gender: string;
  file: string;
}

export interface ICardsProps {
  cards: IGames[];
}

export interface INewCardsProps {
  newcards: IValidationForm[];
}

export interface ICreateFormProps {
  onCreate: (card: IValidationForm) => void;
}

export interface InputNameProps {
  forwardedRef?: React.RefObject<HTMLInputElement>;
}

export interface IPhoto {
  farm: number;
  height_l: number;
  id: string;
  isfamily: number;
  isfriend: number;
  ispublic: number;
  owner: string;
  secret: string;
  server: string;
  title: string;
  url_l: string;
  width_l: number;
}
