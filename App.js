import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Paul", key: "1" },
    { name: "Mario", key: "2" },
    { name: "Ricky", key: "3" },
    { name: "Ramon", key: "4" },
    { name: "Carlos", key: "5" },
    { name: "Ryan", key: "6" },
    { name: "Jhon", key: "7" },
    { name: "Kelly", key: "8" },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          ))} 
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  // body: {
  //   backgroundColor: "#ffff99",
  //   padding: 20,
  // },
  // input: {
  //   borderWidth: 1,
  //   borderColor: '#777',
  //   padding: 8,
  //   margin: 10,
  //   width: 200,
  //   backgroundColor: 'grey'
  // }
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
