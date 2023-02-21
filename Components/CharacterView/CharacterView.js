import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { GREEN, LIGHT_BLUE, PINK, YELLOW } from "../../utils/constants";

export default function CharacterView() {
    return(
    <View style={CharacterViewStyle.container}>
      <View style={CharacterViewStyle.optionSelector}>
        <TouchableWithoutFeedback
        onPress={() =>  console.log("top selected")}
        >
          <View style={CharacterViewStyle.top}></View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
        onPress={() =>  console.log("bottom selected")}
        >
          <View style={CharacterViewStyle.bottom}></View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
        onPress={() =>  console.log("shoes selected")}
        >
          <View style={CharacterViewStyle.shoes}></View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
        onPress={() =>  console.log("accessories selected")}
        >
          <View style={CharacterViewStyle.accessories}></View>
        </TouchableWithoutFeedback>
      </View>
      <View style={CharacterViewStyle.characterDisplay}></View>
    </View>
  );
}

const CharacterViewStyle = StyleSheet.create({
  container: {
    display: 'flex',
  },
  characterDisplay: {
    display: 'flex',
    backgroundColor: YELLOW,
    width:'330px',
    height:'480px',
    borderRadius:'10px'
  },
  optionSelector: {
    display: 'flex',
    flexDirection: 'row',
    gap:'0px',
    width:'330px',
    height:'50px',
  },
  top: {
    display: 'block',
    width:'82.5px',
    height:'50px',
    backgroundColor: YELLOW,
  },
  bottom: {
    display: 'block',
    width:'82.5px',
    height:'50px',
    backgroundColor: GREEN,
  },
  shoes: {
    display: 'block',
    width:'82.5px',
    height:'50px',
    backgroundColor: LIGHT_BLUE,
  },
  accessories: {
    display: 'block',
    width:'82.5px',
    height:'50px',
    backgroundColor: PINK,
  },
});
