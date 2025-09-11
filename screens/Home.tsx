import { View, Text } from "react-native"
import { styles } from "./HomeStyles"
import Button from "../components/button"

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hola Julieta</Text>
            <Button />
        </View>
    )
}