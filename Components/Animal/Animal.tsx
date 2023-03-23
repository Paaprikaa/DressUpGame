import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { PATHS, PURPLE } from "../../utils/constants";

export default function Animal() {
  // const changeBody = (e) => (path) => {
  //   setBody(path)
  // }
  return (
    <View style={AnimalStyle.container}>
      <TouchableWithoutFeedback onPress={() => console.log("asd")}>
        <Text>CAT</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => console.log("asd")}>
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
