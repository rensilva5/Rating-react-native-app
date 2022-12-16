// import { StatusBar } from "expo-status-bar";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import { useState } from "react";
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import AddTodo from "./components/addTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy shampoo', key: '1'},
    { text: 'buy soap', key: '2'},
    { text: 'pay FPL bill', key: '3'},
    { text: 'Groceries list', key: '4'},
    { text: 'Switch to X-finity', key: '5'},
    { text: `Make Dr.'s appoinment`, key: '6'},
    { text: 'Application online', key: '7'},
    { text: 'Search local and remote jobs', key: '8'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('Opps!', 'Todos must be over 3 characters long', [{
        text: 'Understood', onPress: () => console.log('Alert closed')
      }])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dissmissed keyboard')
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>

        </View>
        
      </View>
    </TouchableWithoutFeedback>
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