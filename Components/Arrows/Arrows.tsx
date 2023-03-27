import { StyleSheet, View, TouchableWithoutFeedback, Text } from "react-native";
import { BOTTOM_QUANTITY, YELLOW, TOP_QUANTITY } from "../../utils/constants";
import { IArrows } from "../../utils/interfaces";
import _ from "lodash";

export default function Arrows({ section, cloth, setCloth }: IArrows) {
  const maxQuantity = section === "top" ? TOP_QUANTITY : BOTTOM_QUANTITY;
  const handleLeft = () => {
    const copy = _.cloneDeep(cloth);
    if (cloth[section] > 1) {
      copy[section] = copy[section] - 1;
    } else {
      copy[section] = maxQuantity;
    }
    setCloth(copy);
  };

  const handleRight = () => {
    const copy = _.cloneDeep(cloth);
    if (cloth[section] < maxQuantity) {
      copy[section] = copy[section] + 1;
    } else {
      copy[section] = 1;
    }
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
