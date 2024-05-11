import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '@Pages/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import Theme from '@Global/Theme';

const Tab: any = createBottomTabNavigator();


export const Routes = () => {
    return (
        <ThemeProvider theme={Theme}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Tab.Screen name="Home" component={Dashboard} />
                </Tab.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    )
}