import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MainScreen from "./src/screens/MainScreen";
import AdditionalScreen from "./src/screens/AdditionalScreen";
import { Entypo } from "@expo/vector-icons";
import About from "./src/screens/About";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Can't Hurt Me</Text>
        <Text style={styles.header}>inspired by David Goggins</Text>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: "#272829",
              tabBarInactiveTintColor: "#61677A",
              tabBarActiveBackgroundColor: "#61677A",
              tabBarInactiveBackgroundColor: "#272829",
              headerStyle: {
                backgroundColor: "#272829",
              },
              headerTitleStyle: {
                color: "#D8D9DA",
                fontWeight: "bold",
                fontSize: 25,
              },
            }}
          >
            <Tab.Screen
              name="Home"
              component={MainScreen}
              options={{
                tabBarIcon: ({ focused }) => (
                  <MaterialCommunityIcons
                    name="home-flood"
                    size={24}
                    color={focused ? "#272829" : "#61677A"}
                  />
                ),
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Extras"
              component={AdditionalScreen}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Entypo
                    name="line-graph"
                    size={24}
                    color={focused ? "#272829" : "#61677A"}
                  />
                ),
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="About"
              component={About}
              options={{
                tabBarIcon: ({ focused }) => (
                  <MaterialCommunityIcons
                    name="robot-excited-outline"
                    size={24}
                    color={focused ? "#272829" : "#61677A"}
                  />
                ),
                headerShown: false,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}
