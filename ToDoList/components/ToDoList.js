import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import 'react-native-get-random-values'
import { v4 as uuidv4 } from "uuid";
import AddTask from "./AddTask";

const ToDoList = ({ initialTasks }) => {
  const [toDos, setToDos] = useState([]);
  useEffect( () => {
    const result = initialTasks.map((value) => ({ id: uuidv4(), title: value }))
    setToDos(result)
  }, [])

  const addToDo = (newTitle) => {
    setToDos([...toDos, { id: uuidv4(), title: newTitle }]);
  };
  const removeToDo = (id) => {
    // filter() filters when function returns false
    const result = toDos.filter((title) =>
        title.id !== id
    );
    setToDos(result)
  };

  return (
    <View style={styles.todoListContainer}>
      {toDos.map((todo) => (
        <View style={styles.todoItem} key={todo.id}>
          <Text>{todo.title}</Text>
          <Button title="Remove" onPress={() => removeToDo(todo.id)} />
        </View>
      ))}
      <AddTask onAddTask={addToDo} />
    </View>
  );
};

ToDoList.defaultProps = {
  initialTasks: [],
};

const styles = StyleSheet.create({
  todoListContainer: {
    margin: 10,
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default ToDoList;
