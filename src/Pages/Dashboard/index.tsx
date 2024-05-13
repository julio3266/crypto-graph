import React from 'react';
import { SplashScreen } from '@Pages/SplashScreen';
import { AppContent } from '@Src/Components/AppContent';
import { Text } from 'react-native';



export const Dashboard = () => {
    return (
        <AppContent>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Home</Text>
        </AppContent>
    )
}