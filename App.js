import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {

  const [name, setName] = useState('Paul')
  const [age, setAge] = useState('31')

  return (
    <View style={styles.container}>
      <Text>Enter Name</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder='e.g. Jhon Smith'
        onChangeText={(val) => setName(val)}
        />
      <Text>Enter age</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder='e.g. 18'
        onChangeText={(val) => setAge(val)}
        />

        <Text>name: {name} age: {age}</Text>
        <View style={styles.buttonContainer}>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    backgroundColor: "#ffff99",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
    backgroundColor: 'grey'
  }
});
