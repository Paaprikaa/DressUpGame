import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Animal from "./Components/Animal/Animal";
import Arrows from "./Components/Arrows/Arrows";
import CharacterView from "./Components/CharacterView/CharacterView";
import Palette from "./Components/Palette/Palette";
import { BACKGROUND, PATHS } from "./utils/constants";

export default function App() {
  const [body, setBody] = useState<string>(PATHS.CAT);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CharacterView body={body} />
      <Arrows />
      <Palette />
      <Animal setBody={setBody} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: BACKGROUND,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    height: "calc(100% - 4rem)",
    marginTop: "2rem",
    marginBottom: "2rem",
  },
});
