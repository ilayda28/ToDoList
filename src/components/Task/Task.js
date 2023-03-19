import React, {useState} from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./Task.style";

const Task =(props) =>{
    const [change, setChange] = useState (true)
    function changeText () {
        setChange (!change)
    }
    return(    
            <TouchableOpacity style = {change ?  styles.card : styles.cardChange } onPress={changeText} >
            <Text style= {change ? styles.task : styles.changeText} >{props.text}</Text>
            </TouchableOpacity >   
    );
};

export default Task;