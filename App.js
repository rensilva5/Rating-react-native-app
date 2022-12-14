import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Hello, new App wiht react-native</Text>
      </View>
      <View style={styles.body}>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.        
        </Text>
        <Text>
          This is my new react-native-app! Happy to share it.
        </Text>
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
});
