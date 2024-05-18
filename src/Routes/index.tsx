import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from '@Pages/Dashboard';
import { CustomTabBar } from '@Src/Components/CustomTabBar';
import { StatusBar } from 'expo-status-bar';
import { Search } from '@Pages/Search';

import { Wallet } from '@Pages/Wallet';
import { SplashScreen } from '@Pages/SplashScreen';



const Tab = createBottomTabNavigator();

export const Routes = () => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowSplash(false);
        }, 4000);
    }, []);


    return (
        <>
            <StatusBar style='light' />
            {
                showSplash ? (
                    <SplashScreen />
                ) :
                    (
                        <NavigationContainer>
                            <Tab.Navigator
                                initialRouteName='Home'
                                screenOptions={{ headerShown: false }}
                                tabBar={(props: BottomTabBarProps) => <CustomTabBar {...props} />}
                            >
                                <Tab.Screen name="Home" component={Dashboard} />
                                <Tab.Screen name="Search" component={Search} />
                                <Tab.Screen name="Wallet" component={Wallet} />
                            </Tab.Navigator>
                        </NavigationContainer>
                    )
            }



        </>
    )
}