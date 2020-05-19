import React from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';

const TodoList = (props) => {
  const {tasks,deleteTask} = props
  return (
    <View>
    <FlatList
        style={styles.list}         
          data={tasks}
          renderItem={({ item, index }) =>
            <View >
              <View key={index} style={styles.listItemCont}>
                <Text style={styles.listItem}>
                  {item}
                </Text>
                <Button title="Delete" onPress={() => deleteTask(index)} />
              </View>
              <View style={styles.hr} />
            </View>}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    list: {
        width: "100%"
      },
      listItem: {
        paddingTop: 2,
        paddingBottom: 2,
        fontSize: 18
      },
      hr: {
        height: 1,
        backgroundColor: "gray"
      },
      listItemCont: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      },
});

export default TodoList;
