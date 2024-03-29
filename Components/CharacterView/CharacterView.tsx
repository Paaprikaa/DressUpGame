import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  ACCESSORY,
  BODY,
  BOTTOM,
  TOP,
  WHITE,
  YELLOW,
  accessoryKey,
  bottomKey,
  sectionKey,
  topKey,
} from "../../utils/constants";
import { ICharacterView } from "../../utils/interfaces";

export default function CharacterView({
  cloth,
  body,
  section,
  setSection,
}: ICharacterView) {
  // Paths to images
  const bodyPath: string = BODY[body];
  const topPath: string =
    TOP[cloth.top.number as topKey][cloth.top.color as topKey];
  const bottomPath: string =
    BOTTOM[cloth.bottom.number as bottomKey][cloth.bottom.color as bottomKey];
  const accessoryPath: string =
    ACCESSORY[cloth.accessory.number as accessoryKey][
      cloth.accessory.color as accessoryKey
    ];

  const selected = {
    top: section === "top",
    bottom: section === "bottom",
    accessory: section === "accessory",
  };

  const changeSection =
    (sectionSelected: sectionKey) => (e: GestureResponderEvent) => {
      e.preventDefault();
      setSection(sectionSelected);
    };

  return (
    <View style={CharacterViewStyle(selected).container}>
      <View style={CharacterViewStyle(selected).optionSelector}>
        <TouchableWithoutFeedback onPress={changeSection("top")}>
          <View style={CharacterViewStyle(selected).top}></View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={changeSection("bottom")}>
          <View style={CharacterViewStyle(selected).bottom}></View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => console.log("shoes selected")}>
          <View style={CharacterViewStyle(selected).shoes}></View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={changeSection("accessory")}>
          <View style={CharacterViewStyle(selected).accessories}></View>
        </TouchableWithoutFeedback>
      </View>
      <View style={CharacterViewStyle(selected).main}>
        <View style={CharacterViewStyle(selected).characterDisplay}>
          <Image
            source={bodyPath as ImageSourcePropType}
            style={CharacterViewStyle(selected).image}
          />
          <Image
            source={accessoryPath as ImageSourcePropType}
            style={CharacterViewStyle(selected).accessoryImage}
          />
          <Image
            source={topPath as ImageSourcePropType}
            style={CharacterViewStyle(selected).topImage}
          />
          <Image
            source={bottomPath as ImageSourcePropType}
            style={CharacterViewStyle(selected).image}
          />
        </View>
      </View>
    </View>
  );
}

const CharacterViewStyle = (selected: any) =>
  StyleSheet.create({
    container: {
      display: "flex",
      marginTop: "2rem",
    },
    characterDisplay: {
      display: "flex",
      position: "relative",
      backgroundColor: WHITE,
      width: 272,
      height: 430,
      borderRadius: 10,
    },
    main: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: YELLOW,
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
      backgroundColor: selected.top ? YELLOW : WHITE,
    },
    bottom: {
      display: "flex",
      width: 82,
      height: 60,
      borderRadius: 5,
      backgroundColor: selected.bottom ? YELLOW : WHITE,
    },
    shoes: {
      display: "flex",
      width: 82,
      height: 60,
      borderRadius: 5,
      backgroundColor: WHITE,
    },
    accessories: {
      display: "flex",
      width: 82,
      height: 60,
      borderRadius: 5,
      backgroundColor: selected.accessory ? YELLOW : WHITE,
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
      zIndex: 900,
    },
    accessoryImage: {
      width: 272,
      height: 430,
      position: "absolute",
      zIndex: 1000,
    },
  });
