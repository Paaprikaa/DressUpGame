import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Animal from "./Components/Animal/Animal";
import Arrows from "./Components/Arrows/Arrows";
import CharacterView from "./Components/CharacterView/CharacterView";
import Palette from "./Components/Palette/Palette";
import { LILAC_1, WHITE, bodyKey, sectionKey } from "./utils/constants";

export default function App() {
  // This states are used for different sections of the clothing
  const [body, setBody] = useState<bodyKey>("cat");
  const [cloth, setCloth] = useState({
    top: { number: 1, color: 1 },
    bottom: { number: 1, color: 1 },
    accessory: { number: 1, color: 1 },
  });
  const [section, setSection] = useState<sectionKey>("top");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CharacterView
        body={body}
        setSection={setSection}
        section={section}
        cloth={cloth}
      />
      <Arrows section={section} cloth={cloth} setCloth={setCloth} />
      <Palette setCloth={setCloth} cloth={cloth} section={section} />
      <Animal setBody={setBody} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: LILAC_1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    height: "calc(100%)",
  },
});
