import React from "react";
import ScrollViewExample from "./screens/ScrollViewExample";
import TextInputExample from "./screens/TextInputExample";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function Navigate(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Task1" component={ScrollViewExample} options={{title: "Завдання 1"}}/>
                <Stack.Screen name="Task2" component={TextInputExample} options={{title: "Завдання 2"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
