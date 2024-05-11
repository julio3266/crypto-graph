import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from 'styled-components';

import { Dashboard } from '@Pages/Dashboard';
import Theme from '@Global/Theme';
import { CustomTabBar } from '@Src/Components/CustomTabBar';

const Tab = createBottomTabNavigator();


export const Routes = () => {
    return (
        <ThemeProvider theme={Theme}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{ headerShown: false }}
                    tabBar={props => <CustomTabBar {...props} />}
                >
                    <Tab.Screen name="Home" component={Dashboard} />
                </Tab.Navigator>
            </NavigationContainer>
        </ThemeProvider>

    )
}