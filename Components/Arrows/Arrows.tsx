import _ from "lodash";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import {
  ACCESSORY_QUANTITY,
  BOTTOM_QUANTITY,
  TOP_QUANTITY,
  YELLOW,
} from "../../utils/constants";
import { IArrows } from "../../utils/interfaces";

export default function Arrows({ section, cloth, setCloth }: IArrows) {
  const maxQuantity =
    section === "top"
      ? TOP_QUANTITY
      : section === "bottom"
      ? BOTTOM_QUANTITY
      : ACCESSORY_QUANTITY;

  const handleLeft = () => {
    const copy = _.cloneDeep(cloth);
    copy[section].number = (copy[section].number-- % maxQuantity) + 1;
    setCloth(copy);
  };

  const handleRight = () => {
    const copy = _.cloneDeep(cloth);
    copy[section].number = (copy[section].number++ % maxQuantity) + 1;
    setCloth(copy);
  };

  return (
    <View style={ArrowsStyle.container}>
      <TouchableWithoutFeedback onPress={handleLeft}>
        <View style={ArrowsStyle.arrowLeft}>
          <Text>←</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleRight}>
        <View style={ArrowsStyle.arrowRight}>
          <Text>→</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const ArrowsStyle = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    backgroundColor: "transparent",
    width: 330,
    height: 100,
  },
  arrowRight: {
    display: "flex",
    cursor: "pointer",
    width: 20,
    height: 20,
    backgroundColor: YELLOW,
    color: "white",
  },
  arrowLeft: {
    display: "flex",
    cursor: "pointer",
    width: 20,
    height: 20,
    backgroundColor: YELLOW,
    color: "white",
  },
});
