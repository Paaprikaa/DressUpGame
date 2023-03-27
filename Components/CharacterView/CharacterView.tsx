import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
  ImageSourcePropType,
  GestureResponderEvent,
} from "react-native";
import {
  LILAC_2,
  LILAC_4,
  LILAC_3,
  LILAC_1,
  BACKGROUND,
  BODY,
  TOP,
  topKey,
  sectionKey,
  BOTTOM,
} from "../../utils/constants";
import { ICharacterView } from "../../utils/interfaces";

export default function CharacterView({
  cloth,
  body,
  setSection,
}: ICharacterView) {
  const bodyPath: string = BODY[body];
  const topPath: string = TOP[cloth.top as topKey];
  const bottomPath: string = BOTTOM[cloth.bottom as topKey];

  const changeSection =
    (sectionSelected: sectionKey) => (e: GestureResponderEvent) => {
      e.preventDefault();
      setSection(sectionSelected);
    };

  return (
    <View style={CharacterViewStyle.container}>
      <View style={CharacterViewStyle.optionSelector}>
        <TouchableWithoutFeedback onPress={changeSection("top")}>
          <View style={CharacterViewStyle.top}></View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={changeSection("bottom")}>
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
            source={bodyPath as ImageSourcePropType}
            style={CharacterViewStyle.image}
          />
          <Image
            source={topPath as ImageSourcePropType}
            style={CharacterViewStyle.topImage}
          />
          <Image
            source={bottomPath as ImageSourcePropType}
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
    width: 272,
    height: 430,
    position: "absolute",
  },
  topImage: {
    width: 272,
    height: 430,
    position: "absolute",
    zIndex: 1000,
  },
});
