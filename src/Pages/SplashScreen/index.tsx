import React, { useEffect } from 'react';

import { Container, Splash } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { assignTestId } from '@Src/utils/QualityAssurance';

export interface SplashScreenProps {
    testID: string;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ testID }) => {

    useEffect(() => {
        const showSplash = async () => {
            const splashShown = await AsyncStorage.getItem('splashShown');
            if (!splashShown) {
                await AsyncStorage.setItem('splashShown', 'true');
            }

        };
        showSplash();
    }, []);

    return (
        <Container {...assignTestId('View', `${testID}`)}>
            <Splash
                {...assignTestId('Lottie', `${testID}_lottie`)}
                source={require('@Src/Assets/splash.json')}
                loop={false}
                autoPlay
            />
        </Container>
    )
}