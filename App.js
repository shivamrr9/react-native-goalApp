import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  Modal
} from "react-native";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredData, setData] = useState("");
  const [enteredGoals, setGoals] = useState([]);
  const [isAddActive, setisAddActive] = useState(false);
  saveInputGoal = val => {
    setData(val);
  };

  handleAdd = () => {
    setGoals(enteredGoals => [
      ...enteredGoals,
      { id: Math.random().toString(), value: enteredData }
    ]);
    setisAddActive(false);
    setData("");
  };

  deleteCard = toBeDeletedId => {
    console.log("to be deleted id: ", toBeDeletedId);
    setGoals(enteredGoals => {
      return enteredGoals.filter(obj => obj.id !== toBeDeletedId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button
        title="Click to add goal"
        onPress={() => {
          setisAddActive(true);
        }}
      />
      <Modal visible={isAddActive} animationType="fade">
        <View style={styles.topView}>
          <TextInput
            placeholder="Enter Goal..."
            style={styles.topInputField}
            onChangeText={val => {
              this.saveInputGoal(val);
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "40%"
            }}
          >
            <Button
              title="Cancel"
              onPress={() => {
                setisAddActive(false);
              }}
            />
            <Button
              title="Add"
              onPress={() => {
                this.handleAdd();
              }}
            />
          </View>
        </View>
      </Modal>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={enteredGoals}
        renderItem={renderItem => (
          <GoalItem
            onDelete={() => {
              this.deleteCard(renderItem.item.id);
            }}
            title={renderItem.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  topView: { justifyContent: "center", alignItems: "center", flex: 1 },
  topInputField: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 5
  },
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10
  }
});
