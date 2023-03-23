import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { PURPLE } from "../../utils/constants";

export default function Palette() {
  return (
    <View style={PaletteStyle.container}>
      <TouchableWithoutFeedback
        onPress={() => console.log("palette 1 pressed")}
      >
        <View style={PaletteStyle.color1} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => console.log("palette 2 pressed")}
      >
        <View style={PaletteStyle.color1} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => console.log("palette 3 pressed")}
      >
        <View style={PaletteStyle.color1} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => console.log("palette 4 pressed")}
      >
        <View style={PaletteStyle.color1} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => console.log("palette 5 pressed")}
      >
        <View style={PaletteStyle.color1} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const PaletteStyle = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  color1: {
    width: 30,
    height: 30,
    backgroundColor: PURPLE,
    color: "red",
    borderRadius: 50,
    cursor: "pointer",
  },
});
