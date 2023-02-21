import { StyleSheet, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-web";

export default function Palette() {
  return (
    <View style={PaletteStyle.container}>
      <TouchableWithoutFeedback
        title="1"
        onPress={() => console.log("palette 1 pressed")}
      >
        <View style={PaletteStyle.color1}/>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        title="2"
        onPress={() =>  console.log("palette 2 pressed")}
      >
        <View style={PaletteStyle.color1}/>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        title="3"
        onPress={() =>  console.log("palette 3 pressed")}
      >
        <View style={PaletteStyle.color1}/>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        title="4"
        onPress={() =>  console.log("palette 4 pressed")}
      >
        <View style={PaletteStyle.color1}/>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        title="5"
        onPress={() =>  console.log("palette 5 pressed")}
      >
        <View style={PaletteStyle.color1}/>
      </TouchableWithoutFeedback>
    </View>
  );
}

const PaletteStyle = StyleSheet.create({
  container: {
    flex: 1,
    gap: '10px',
    flexDirection: 'row',
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  color1: {
    width:'30px',
    height:'30px',
    backgroundColor: 'white',
    color: 'red',
    borderRadius: '50%',
    cursor: 'pointer',
  }
});
