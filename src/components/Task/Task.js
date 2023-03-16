import React, {useState} from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./Task.style";

const Task =(props) =>{
    const [change, setChange] = useState ( true )
    function changeCard () {
        setChange (!change)
    }
    return(    
            <TouchableOpacity style = {change ? styles.card : styles.cardChange} onPress={changeCard}>
            <Text style= {change ? styles.task :styles.changeText} >{props.text}</Text>
            </TouchableOpacity >   
    );
};

export default Task;