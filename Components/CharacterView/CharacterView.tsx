import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import {
  LILAC_2,
  LILAC_4,
  LILAC_3,
  LILAC_1,
  BACKGROUND,
} from "../../utils/constants";

export default function CharacterView() {
  return (
    <View style={CharacterViewStyle.container}>
      <View style={CharacterViewStyle.optionSelector}>
        <TouchableWithoutFeedback onPress={() => console.log("top selected")}>
          <View style={CharacterViewStyle.top}></View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => console.log("bottom selected")}
        >
          <View style={CharacterViewStyle.bottom}></View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => console.log("shoes selected")}>
          <View style={CharacterViewStyle.shoes}></View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => console.log("accessories selected")}
        >
          <View style={CharacterViewStyle.accessories}></View>
        </TouchableWithoutFeedback>
      </View>
      <View style={CharacterViewStyle.main}>
        <View style={CharacterViewStyle.characterDisplay}>
          <Image
            source={require("../../assets/body/cat/1.png")}
            style={CharacterViewStyle.image}
          />
          <Image
            source={require("../../assets/top/1/3.png")}
            style={CharacterViewStyle.topImage}
          />
          <Image
            source={require("../../assets/bottom/2/1.png")}
            style={CharacterViewStyle.image}
          />
        </View>
      </View>
    </View>
  );
}

const CharacterViewStyle = StyleSheet.create({
  container: {
    display: "flex",
  },
  characterDisplay: {
    display: "flex",
    position: "relative",
    backgroundColor: BACKGROUND,
    width: 272,
    height: 430,
    borderRadius: 10,
  },
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: LILAC_1,
    width: 330,
    height: 480,
    borderRadius: 10,
  },
  optionSelector: {
    display: "flex",
    flexDirection: "row",
    gap: 0,
    width: 330,
    height: 60,
    marginBottom: -10,
  },
  top: {
    display: "flex",
    width: 82,
    height: 60,
    borderRadius: 5,
    backgroundColor: LILAC_1,
  },
  bottom: {
    display: "flex",
    width: 82,
    height: 60,
    borderRadius: 5,
    backgroundColor: LILAC_2,
  },
  shoes: {
    display: "flex",
    width: 82,
    height: 60,
    borderRadius: 5,
    backgroundColor: LILAC_3,
  },
  accessories: {
    display: "flex",
    width: 82,
    height: 60,
    borderRadius: 5,
    backgroundColor: LILAC_4,
  },
  image: {
    position: "absolute",
  },
  topImage: {
    position: "absolute",
    zIndex: 1000,
  },
});
