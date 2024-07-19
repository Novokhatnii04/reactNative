import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../../screens/welcome/WelcomeScreen";
import SignUpScreen from "../../screens/signUp/SignUp";
import SignInScreen from "../../screens/signIn/SignIn";
import BackButton from "../../shared/customHeader/BackButton";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            headerLeft: () => <BackButton />,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            headerLeft: () => <BackButton />,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
