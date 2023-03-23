import { StyleSheet, View, TouchableWithoutFeedback, Text } from "react-native";
import { PURPLE } from "../../utils/constants";

export default function Arrows() {
  return (
    <View style={ArrowsStyle.container}>
      <TouchableWithoutFeedback
        onPress={() => console.log("left arrow pressed")}
      >
        <View style={ArrowsStyle.arrowLeft}>
          <Text>←</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => console.log("right arrow pressed")}
      >
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
