import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import styles from "./Task.style";

function Task () {
    return(    
        <View style = {styles.container}>
            <Text style= {styles.task}>Çöpler Atılacak.</Text>
           
        </View>
        
    );
};

export default Task;