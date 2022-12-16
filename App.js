// import { StatusBar } from "expo-status-bar";
import Header from "./components/header";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy shampoo', key: '1'},
    { text: 'buy soap', key: '2'},
    { text: 'pay water bill', key: '3'},
  ])

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <Text>{item.text}</Text>
            )}
          />
        </View>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    paddingTop: 40,
    paddingHorizontal: 20,    
  },
  content: {
    padding: 40,

  },
  list: {
    marginTop: 20,
  }
});


// import { useState } from "react";
// import {
//   FlatList,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";

// export default function App() {
//   const [people, setPeople] = useState([
//     { name: "Paul", id: "1" },
//     { name: "Mario", id: "2" },
//     { name: "Ricky", id: "3" },
//     { name: "Ramon", id: "4" },
//     { name: "Carlos", id: "5" },
//     { name: "Ryan", id: "6" },
//     { name: "Mark", id: "7" },
//   ]);

  // const pressHandler = (id) => {
    // console.log(id)
    // setPeople((prevPeople) => {
      // return prevPeople.filter(person => person.id != id) //return a beelean, this case is false, so it filters out of the new array.
    // })
  // }

  // return (
    // <View style={styles.container}>
      /* flatList component  less code */

      // <FlatList
        // numColumns={2}
        // keyExtractor={(item) => item.id}
        // data={people}
        // renderItem={({ item }) => (
          // <TouchableOpacity onPress={() => pressHandler(item.id)}>
            /* <Text style={styles.item}>{item.name}</Text> */
          /* </TouchableOpacity> */
        // )}
      // />
      /* <ScrollView>
        {people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          ))} 
      </ScrollView> */
    // </View>
  // );
// }

// const styles = StyleSheet.create({
  // container: {
    // flex: 1,
    // backgroundColor: "lightblue",
    // paddingTop: 40,
    // paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  // },
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
//   item: {
//     marginTop: 24,
//     padding: 30,
//     backgroundColor: "pink",
//     fontSize: 24,
//     marginHorizontal: 10,
//     marginTop: 24,
//   },
// })