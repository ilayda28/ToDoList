import React from "react";
import { Text, View } from "react-native";
import styles from './Header.style';

const Header = ({setNumber}) => {
    return(
        <View style= {styles.container}>
            <Text style ={styles.title}>YAPILACAKLAR</Text>
            <Text style ={styles.counter}>{setNumber}</Text>
        </View>

    )
}

export default Header;