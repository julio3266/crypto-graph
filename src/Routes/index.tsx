import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from '@Pages/Dashboard';
import { CustomTabBar } from '@Src/Components/CustomTabBar';
import { StatusBar } from 'expo-status-bar';
import { Search } from '@Pages/Search';
import { SplashScreen } from '@Pages/SplashScreen';


const Tab = createBottomTabNavigator();

export const Routes = () => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowSplash(false);
        }, 4000);
    }, []);

    if (showSplash) {
        return <SplashScreen testID='SplashScreen' />;
    }
    return (
        <>
            <StatusBar style='light' />
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName='Home'
                    screenOptions={{ headerShown: false }}
                    tabBar={(props: BottomTabBarProps) => <CustomTabBar {...props} />}
                >
                    <Tab.Screen name="Home" component={Dashboard} />
                    <Tab.Screen name="Search" component={Search} />
                    <Tab.Screen name="Wallet" component={Search} />
                </Tab.Navigator>
            </NavigationContainer>

        </>
    )
}