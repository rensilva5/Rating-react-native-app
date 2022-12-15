import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {

  const [name, setName] = useState('Paul')
  const [person, setPerson] = useState({name: 'Karl', age: 42})

  const clickHandler = () => {
    setName('Lee')
    setPerson({name: 'Larry', age: 43})
  }

  return (
    <View style={styles.container}>
        <Text style={styles.text}>My name is {name}</Text>
        <Text>My name is {person.name} and I am {person.age} old</Text>
        <View style={styles.buttonContainer}>
          <Button title='Update state' onPress={clickHandler} />
        </View>
      <StatusBar style="auto" />
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
  header: {
    backgroundColor: "grey",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
    paddingBottom: 20,
  },
  text: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "#ffff99",
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: 'orange'
  }
});
