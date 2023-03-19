import React , {useState} from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Header from "./components/Header";
import Task from "./components/Task";
import Input from "./components/Input";
 
function App () {
const renderTask = ({item}) => (<Task text = {item}> </Task>)
 const addlist = () => {
  setlist ([...list,text])
 }
 const [text,setText] = useState ()
 const [list,setlist] = useState ([])
  return(
    <View style ={styles.container}> 
    <Header setNumber ={list.length}></Header>
    <FlatList data={list} renderItem={renderTask}/>
    <Input setText={setText} addlist={addlist} ></Input>
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

