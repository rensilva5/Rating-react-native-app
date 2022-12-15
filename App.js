import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Paul", id: "1" },
    { name: "Mario", id: "2" },
    { name: "Ricky", id: "3" },
    { name: "Ramon", id: "4" },
    { name: "Carlos", id: "5" },
    { name: "Ryan", id: "6" },
    { name: "Jhon", id: "7" },
    { name: "Kelly", id: "8" },
    { name: "Jenny", id: "9" },
    { name: "Mark", id: "10" },
  ]);

  return (
    <View style={styles.container}>
      {/* flatList component  less code */}

      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={( { item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}  
      />
      {/* <ScrollView>
        {people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          ))} 
      </ScrollView> */}
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
    marginHorizontal: 10,
    marginTop: 24,
  },
});
