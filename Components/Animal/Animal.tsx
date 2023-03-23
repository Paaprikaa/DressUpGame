import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  GestureResponderEvent,
} from "react-native";
import { BODY, PURPLE } from "../../utils/constants";

export default function Animal({ setBody }: IAnimal) {
  const changeBody = (path: string) => (e: GestureResponderEvent) => {
    e.preventDefault();
    setBody(path);
  };
  return (
    <View style={AnimalStyle.container}>
      <TouchableWithoutFeedback onPress={changeBody(BODY.CAT)}>
        <Text>CAT</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={changeBody(BODY.BUNNY)}>
        <Text>BUNNY</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const AnimalStyle = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    backgroundColor: PURPLE,
    width: 230,
    height: 65,
    borderRadius: 10,
    cursor: "pointer",
  },
});
