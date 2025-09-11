import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import Home from './screens/Home';
import Calendar from './screens/Calendar';

const Tab = createBottomTabNavigator()


export default function App() {
  const [loaded] = useFonts({ Montserrat: require("./assets/fonts/Montserrat.ttf") })

  if (!loaded) {
    return (
      <View style={styles.loader}>
        <Text>Cargando...</Text>
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = "home";

            if (route.name === "Inicio") {
              iconName = "home";
            } else if (route.name === "Calendario") {
              iconName = "calendar";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            backgroundColor: "#161616ff",
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Inicio" component={Home} />
        <Tab.Screen name="Calendario" component={Calendar} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    backgroundColor: "rgba(69, 97, 36, 1)",
    alignItems: "center",
    justifyContent: "center"
  }
});
