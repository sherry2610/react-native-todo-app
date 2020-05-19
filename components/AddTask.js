import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';

const AddTask = (props) => {
  const {handleChange, addTask, text} = props;
  return (
    <View>
      <Text>Add Task</Text>
      <TextInput
        value={text}
        style={styles.textInput}
        onChangeText={handleChange}
        onSubmitEditing={addTask}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: 'gray',
    borderWidth: 2,
    borderColor: 'blue',
    width: '100%',
    margin: 5,
  },
  addBtn: {
    width: '40%',
    backgroundColor: 'blue',
    color: 'white',
    height: 40,
    margin: 20,
    padding: 10,
    paddingLeft: 56,
    borderRadius: 30,
  },
});

export default AddTask;
