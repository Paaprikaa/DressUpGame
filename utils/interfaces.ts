interface ICharacterView {
  body: string;
}

interface IAnimal {
  setBody: React.Dispatch<React.SetStateAction<string>>;
}
