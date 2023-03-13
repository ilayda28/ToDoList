import React from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import Header from "./components/Header";
import Task from "./components/Task";
import Input from "./components/Input";
 
function App () {
  return(
    <View style ={styles.container}> 
    <Header></Header>
    <Task></Task>
    <Task></Task>
    <Input></Input>
    </View>
  );
}

const styles = StyleSheet.create ({
  container:{
    flex:1,
    backgroundColor : '#102027'
  }
})

export default App;

