import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Animal from './Components/Animal/Animal';
import Arrows from './Components/Arrows/Arrows';
import CharacterView from './Components/CharacterView/CharacterView';
import Palette from './Components/Palette/Palette';
import { BACKGROUND_COLOUR } from './utils/constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>DRESS UP GAME</Text>
      <StatusBar style="auto" />
      <CharacterView />
      <Arrows />
      <Palette />
      <Animal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: BACKGROUND_COLOUR,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    width: '100%',
    height: '100%',
  },
});
