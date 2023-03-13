import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from './Input.style';

function Input () {
    return(
        <View style ={styles.container}>
            <TextInput placeholder="Ekle" style= {styles.input}></TextInput>
            <TouchableOpacity style={styles.save}>
                <Text style={styles.saveText}>Kaydet</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Input;