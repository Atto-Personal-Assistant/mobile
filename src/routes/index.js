import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { routes } from "./Routes";

const Tab = createBottomTabNavigator();

export const Routes = () => (
  <NavigationContainer>
    <Tab.Navigator initialRouteName="Home">
      {routes.map((route, index) => (
        <Tab.Screen
          key={index}
          name={route.name}
          options={route.options}
          component={route.component}
        />
      ))}
    </Tab.Navigator>
  </NavigationContainer>
);
