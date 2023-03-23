import { StyleSheet, View, TouchableWithoutFeedback, Text } from "react-native";
import { PURPLE, TOP_QUANTITY } from "../../utils/constants";

export default function Arrows({ top, setTop }: IArrows) {
  const handleLeft = () => {
    if (top > 1) {
      setTop(top - 1);
    } else {
      setTop(TOP_QUANTITY);
    }
  };
  const handleRight = () => {
    if (top < TOP_QUANTITY) {
      setTop(top + 1);
    } else {
      setTop(1);
    }
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
    backgroundColor: PURPLE,
    color: "white",
    borderRadius: 10,
  },
  arrowLeft: {
    display: "flex",
    cursor: "pointer",
    width: 20,
    height: 20,
    backgroundColor: PURPLE,
    color: "white",
    borderRadius: 10,
  },
});
