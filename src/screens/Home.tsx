import { View, Text } from "react-native"
import { styles } from "./HomeStyles"

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenida</Text>
        </View>
    )
}