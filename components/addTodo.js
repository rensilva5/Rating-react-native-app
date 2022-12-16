import React, { useState } from "react";
import { TextInput, View, StyleSheet, Button, Text } from "react-native";

const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo ..."
        onChangeText={changeHandler}
      />
      <View style={styles.button}>
        <Button
          onPress={() => submitHandler(text)}
          color="white"
          title="ADD TODO"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1.5,
    borderBottonColor: "#ddd",
  },
  button: {
    backgroundColor: 'coral'
  }
});

export default AddTodo;
