import React, {useState} from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./Task.style";

const Task =(props) =>{
    
    return(    
            <TouchableOpacity style = {styles.card} >
            <Text style= {styles.text} >{props.text}</Text>
            </TouchableOpacity >   
    );
};

export default Task;