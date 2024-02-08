import _ from "lodash";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { YELLOW } from "../../utils/constants";
import { IPalette } from "../../utils/interfaces";

export default function Palette({ setCloth, cloth, section }: IPalette) {
  const changePalette =
    (palette: 1 | 2 | 3 | 4 | 5) => (e: GestureResponderEvent) => {
      const copy = _.cloneDeep(cloth);
      copy[section].color = palette;
      setCloth(copy);
    };

  return (
    <View style={PaletteStyle.container}>
      <TouchableWithoutFeedback onPress={changePalette(1)}>
        <View style={PaletteStyle.color1} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={changePalette(2)}>
        <View style={PaletteStyle.color1} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={changePalette(3)}>
        <View style={PaletteStyle.color1} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={changePalette(4)}>
        <View style={PaletteStyle.color1} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={changePalette(5)}>
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
    backgroundColor: YELLOW,
    color: "red",
    borderRadius: 50,
    cursor: "pointer",
  },
});
