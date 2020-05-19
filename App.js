import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AddTask from './components/AddTask'
import TodoList from './components/TodoList'

class App extends Component {
  state = {
    tasks: [],
    text:''
  }
  handleChange = (text) => {
    this.setState(()=>({
      text:text
    }))
  }
  addTask = () => {
    const {text} = this.state
    
    
    this.setState((prevState)=>({
      tasks: prevState.tasks.concat(text)
    }))
    
    this.setState(()=>({
      text:''
    }))
  }

  deleteTask = i => {
    console.log("reach")
    const {tasks} = this.state
    let tasksClone = tasks.slice();

    tasksClone.splice(i, 1);

    this.setState(() => ({
      tasks:tasksClone
    }))
    }
  render(){
    const {text,tasks} = this.state
  return (
    <View>
      <Text style={styles.headingText}>Todo App</Text>
      <AddTask handleChange={this.handleChange} text={text} addTask={this.addTask} />
      <TodoList tasks={tasks} deleteTask={this.deleteTask} />
    </View>
  )
  }
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default App;
