import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  GestureResponderEvent,
} from "react-native";
import { bodyKey, PURPLE } from "../../utils/constants";
import { IAnimal } from "../../utils/interfaces";

export default function Animal({ setBody }: IAnimal) {
  const changeBody = (path: bodyKey) => (e: GestureResponderEvent) => {
    e.preventDefault();
    setBody(path);
  };
  return (
    <View style={AnimalStyle.container}>
      <TouchableWithoutFeedback onPress={changeBody("cat")}>
        <Text>CAT</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={changeBody("bunny")}>
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
