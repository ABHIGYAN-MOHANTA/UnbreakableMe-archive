import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { styles } from "../styles/styles.js";
import { useNavigation, useRoute } from "@react-navigation/native";
import PBD from "./PBD.jsx";
import Goliath from "./Goliath.jsx";
import Pressure from "./Pressure.jsx";
import Kobe from "./Kobe.jsx";
import MentalToughness from "./MentalToughness.jsx";
import NotForEveryone from "./NotForEveryone.jsx";

const Stack = createStackNavigator();

const PBDThirdHome = () => {
  const navigation = useNavigation();

  const route = useRoute();

  return (
    <SafeAreaView style={styles.subsection}>
      <Stack.Navigator
        initialRouteName="PBDEmpty"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#61677A",
          },
          headerTintColor: "#D8D9DA",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="PBDEmpty"
          component={PBD}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Goliath"
          component={Goliath}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pressure"
          component={Pressure}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Kobe"
          component={Kobe}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MentalToughness"
          component={MentalToughness}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotForEveryone"
          component={NotForEveryone}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

      <View>
        <TouchableOpacity
          style={styleSheet.button}
          onPress={() => navigation.navigate("Goliath")}
        >
          <Text style={styleSheet.buttonText}>
            14 Strategies to Beat Your Competition as an Entrepreneur
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleSheet.button}
          onPress={() => navigation.navigate("Pressure")}
        >
          <Text style={styleSheet.buttonText}>
            How to Handle Pressure as an Entrepreneur
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleSheet.button}
          onPress={() => navigation.navigate("Kobe")}
        >
          <Text style={styleSheet.buttonText}>
            Kobe Bryant’s Last Great Interview
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleSheet.button}
          onPress={() => navigation.navigate("MentalToughness")}
        >
          <Text style={styleSheet.buttonText}>Rules of Mental Toughness</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleSheet.button}
          onPress={() => navigation.navigate("NotForEveryone")}
        >
          <Text style={styleSheet.buttonText}>
            The 1% Rule - Not A Message For Everyone
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PBDThirdHome;

const styleSheet = StyleSheet.create({
  button: {
    backgroundColor: "#61677A",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 1,
  },
  buttonText: {
    color: "#F6F6F6",
    fontWeight: "bold",
  },
});
