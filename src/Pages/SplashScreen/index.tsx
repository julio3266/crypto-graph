import React, { useEffect } from 'react';
import { Container } from './styles'
import Animated, { Easing, useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';


import { CryptoGraphSvgLogo } from '@Src/Assets/svg';


export const SplashScreen: React.FC = () => {
    const progress = useSharedValue(0);

    useEffect(() => {
        progress.value = withTiming(1, { duration: 2000, easing: Easing.out(Easing.exp) });
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: progress.value }],
        opacity: progress.value,
    }));

    return (
        <Container>
            <Animated.View style={animatedStyle}>
                <CryptoGraphSvgLogo width={350} height={350} />
            </Animated.View>
        </Container>
    );
};


