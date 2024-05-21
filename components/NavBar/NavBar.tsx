import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from '@expo/vector-icons';

const NavBar = () => {
    const [text, setText] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.inputBox}>
                <TextInput 
                    placeholder="Buscar"
                    onChangeText={setText}
                    value={text}
                    style={styles.input}
                />
                <Feather name="search" size={24} color="#40A578" />
            </View>
        </ View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 150,
        borderBottomWidth: 1,
        marginBottom: 30,
        alignItems: 'center',
        borderBottomColor: "#c5c5c5"
    },
    inputBox: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        margin: 20,
        paddingVertical: 5,
        paddingHorizontal: 15,
        width: "90%",
        borderWidth: 1,
        borderColor: "#c5c5c5",
        borderRadius: 5
    },
    input: {
        width: "90%"
    }
})

export default NavBar;
