import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

import ProductListScreen from "../screens/ProductListScreen";
import CartScreen from "../screens/CartScreen";
import UserDetailScreen from "../screens/UserDetailScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Products" component={ProductListScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}

function UserWrapper(props: any) {
  return <UserDetailScreen {...props} />; // ⬅️ Safe wrapper
}

export default function AppNavigator() {
  console.log("UserDetailScreen is:", UserDetailScreen);

  return (
    <NavigationContainer
      linking={{
        prefixes: ["myapp://"],
        config: { screens: { User: "user/:id" } },
      }}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="User" component={UserWrapper} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
