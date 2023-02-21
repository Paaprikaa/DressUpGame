import { StyleSheet, Text, View, TouchableWithoutFeedback} from "react-native";

export default function Animal() {
    return(
    <View style={AnimalStyle.container}>
      <TouchableWithoutFeedback
        title="1"
        onPress={() => console.log("cat selected")}
      >
        <Text>CAT</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        title="2"
        onPress={() =>  console.log("bunny selected")}
      >
        <Text>BUNNY</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const AnimalStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    backgroundColor: 'white',
    width:'230px',
    height:'65px',
    borderRadius: '10px',
    cursor: 'pointer',
  },
});
