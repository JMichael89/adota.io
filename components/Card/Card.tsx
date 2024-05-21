import React, { ReactElement } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CardInterface {
    id: string,
    image: ReactElement,
    title: string,
    description: string
}

const Card = ({ id, image, title, description }: CardInterface) => {
    return (
        <TouchableOpacity key={id} style={styles.container}>
            <View style={styles.containerImage}>
                {image}
            </View>
            <View style={styles.containerText}>
                <Text style={styles.title}>{title}</Text>
                <Text numberOfLines={4} ellipsizeMode="tail" style={styles.description}>{description}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        maxWidth: "90%",
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 30,
        marginHorizontal: 15,
        padding: 10,
        flexDirection: 'row',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: -4,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 10,
    },
    containerImage: {
        width: "40%"
    },
    containerText: {
        width: "60%"
    },
    title: {
        marginBottom: 10,
        fontSize: 20
    },
    description: {
        position: 'relative',
        width: "100%",
        textAlign: 'justify',
        
    }
})

export default Card;
