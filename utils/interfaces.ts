interface ICharacterView {
  body: string;
  top: number;
}

interface IArrows {
  top: number;
  setTop: React.Dispatch<React.SetStateAction<number>>;
}

interface IAnimal {
  setBody: React.Dispatch<React.SetStateAction<string>>;
}
