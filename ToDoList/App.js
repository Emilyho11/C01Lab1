import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ToDoList from "./components/ToDoList";
import 'react-native-get-random-values'

export default function App() {
  return (
    <View style={styles.container}>
      <ToDoList initialTasks={["C01 Lab", "Snyk API", "Co-op Goals"]} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
