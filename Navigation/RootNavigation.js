import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import CovidData from "../Screens/CovidData";

const RootNavigation = (props) => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={CovidData} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
