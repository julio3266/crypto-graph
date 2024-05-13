import React, { useEffect } from 'react';

import { Container, Splash } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '@react-navigation/native';

export interface SplashScreenProps {

}

export const SplashScreen: React.FC<SplashScreenProps> = () => {

    useEffect(() => {
        const showSplash = async () => {
            try {
                const splashShown = await AsyncStorage.getItem('splashShown');
                if (!splashShown) {
                    await AsyncStorage.setItem('splashShown', 'true');
                }
            } catch (error) {
                console.error('Error reading or setting splashShown:', error);
            }
        };
        showSplash();
    }, []);

    return (
        <Container>
            <Splash
                source={require('@Src/Assets/splash.json')}
                loop={false}
                autoPlay
            />
        </Container>
    )
}