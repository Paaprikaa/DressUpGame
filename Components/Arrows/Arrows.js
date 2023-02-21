import { StyleSheet, View, TouchableWithoutFeedback, Text} from "react-native";

export default function Arrows() {
    return(
    <View style={ArrowsStyle.container}>
      <TouchableWithoutFeedback
        onPress={() => console.log("left arrow pressed")}
      >
        <View style={ArrowsStyle.arrowLeft}></View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() =>  console.log("right arrow pressed")}
      >
        <View style={ArrowsStyle.arrowRight}></View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const ArrowsStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px',
    backgroundColor: 'transparent',
    width:'330px',
    height:'100px',
  },
  arrowRight: {
    width: 0,
    height: 0,
  },
  arrowLeft: {
    width: 0,
    height: 0,
  }
});
