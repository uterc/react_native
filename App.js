import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState("");
  const [elementiSpesa, impostaElementiSpesa] = useState([]);
  const gestisciListaSpesa = (outputText) => setOutputText(outputText);
  const aggiungiAListaSpesa = () => {
    impostaElementiSpesa((elementPrecedenti) => [
      ...elementPrecedenti,
      outputText,
    ]);
    console.log(elementiSpesa);
  };
  return (
    <View style={styles.container}>
      <View style={styles.upLayout}>
        <TextInput
          style={styles.input}
          placeholder="Inserisci qualcosa"
          onChangeText={gestisciListaSpesa}
          value={outputText}
        />
        <Button title="Aggiungi" onPress={aggiungiAListaSpesa} />
      </View>
      <FlatList
        data={elementiSpesa}
        renderItem={(elemento) => (
          <View key={elemento.index} >
            <Text>{elemento.item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
  },
  upLayout: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "#3F9CFF",
    borderBottomWidth: 3,
    padding: 2,
    // width: "80%",
    flex: 1,
  },
  inputButton: {
    // width: "20%",
    flex: 1,
  },
});
