import { View, Text, StyleSheet, Pressable } from "react-native"

export default function Modal({ handleCloseModal, title, children }: any) {

    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <Text style={styles.modalText}>{title}</Text>
                <Pressable onPress={handleCloseModal}>
                    <Text style={styles.modalExit}>
                        X
                    </Text>
                </Pressable>
                <View>
                    <Pressable>{children}</Pressable>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999,
        backgroundColor: "rgba(0, 0, 0, 0.63)",
        alignItems: "center",
        justifyContent: "center"
    },
    modal: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        backgroundColor: "#000000a9",
        width: 350,
        height: 380,
    },
    modalText: {
        textAlign: "center",
        padding: 10,
        margin: 10,
        fontSize: 22,
        color: "white",
        fontFamily: "Montserrat"
    },
    modalExit: {
        position: "absolute",
        color: "white",
        fontFamily: "Montserrat",
        right: 1,
        transform: [{ translateY: -65 }],
        fontSize: 30,
        margin: 12,
        textAlign: "center",
        fontWeight: "bold"
    },
});