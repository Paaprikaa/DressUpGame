import { bodyKey, sectionKey } from "./constants";

export interface ICharacterView {
  body: bodyKey;
  cloth: Isections;
  section: sectionKey;
  setSection: React.Dispatch<React.SetStateAction<sectionKey>>;
}

export interface IArrows {
  section: sectionKey;
  cloth: Isections;
  setCloth: React.Dispatch<React.SetStateAction<Isections>>;
}

export interface IAnimal {
  setBody: React.Dispatch<React.SetStateAction<bodyKey>>;
}

export interface Isections {
  top: number;
  bottom: number;
}
