import { StyleSheet, Text, Pressable, View } from "react-native"
import { useState } from "react";

export default function Button() {

    const [show, setShow] = useState(false)

    return (
        <View>
            <Pressable style={styles.btn} onPress={() => setShow(!show)}>
                <Text style={styles.text}>Apreta</Text>
            </Pressable>
            {show && <Text style={styles.text}>Presionaste el boton</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#6b6b6bff",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
    },
    text: {
        color: "white",
        fontSize: 16,
    },
});