import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from './Input.style';

function Input ( {setText, addlist} ) {
    
    
    return(
        <View style ={styles.container}>
            <TextInput placeholder="Ekle" style= {styles.input} onChangeText={setText}></TextInput>
            <TouchableOpacity style={styles.save} onPress = {addlist}>
                <Text style={styles.saveText}>Kaydet</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Input;