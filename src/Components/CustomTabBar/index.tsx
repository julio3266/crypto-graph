import React from "react";
import { AnimatedView, Btn, Container, HomeIcon, SearchIcon, Title, WalletIcon } from './styles'

import { assignTestId } from "@Src/utils/QualityAssurance";
import { NavigationHelpers, ParamListBase, TabNavigationState, useNavigation } from "@react-navigation/native";
import { BottomTabDescriptorMap, BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { Animated } from "react-native";

export interface CustomTabBarProps {
    testID?: string;
    state: TabNavigationState<ParamListBase>;
    descriptors: BottomTabDescriptorMap;
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

export const CustomTabBar: React.FC<CustomTabBarProps> = ({
    testID = 'CustomTabBarID',
    state,
    descriptors,
    navigation
}) => {
    return (
        <Container {...assignTestId("View", testID)}>
            {
                state?.routes.map((route, index: number) => {
                    const opacity = React.useRef(new Animated.Value(1)).current;
                    const isFocused = state.index === index;

                    const onPress = () => {

                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    return (
                        <AnimatedView
                            {...assignTestId('Lottie', `${testID}_tabBarAnimatedView_${index}`)}
                            key={index}
                            style={[
                                {
                                    opacity: isFocused ? 1 : 0.5,
                                    transform: [
                                        { scaleX: isFocused ? 1 : 1 },
                                        { scaleY: isFocused ? 1 : 1 },
                                    ],
                                },
                            ]}
                        >
                            <Btn
                                isFocused={isFocused}
                                onPress={() => onPress()}
                                {
                                ...assignTestId('TouchableOpacity', `${testID}_tabBarBtn_${index}`)
                                }
                            >
                                {
                                    route.name === 'Home' && (
                                        <>
                                            <HomeIcon isFocused={isFocused} />
                                            {isFocused && (<Title>{route.name}</Title>)}
                                        </>
                                    ) ||
                                    route.name === 'Search' && (
                                        <>
                                            <SearchIcon isFocused={isFocused} />
                                            {isFocused && (<Title>{route.name}</Title>)}
                                        </>
                                    ) ||
                                    route.name === 'Wallet' && (
                                        <>
                                            <WalletIcon isFocused={isFocused} />
                                            {isFocused && (<Title>{route.name}</Title>)}
                                        </>
                                    )
                                }
                            </Btn>
                        </AnimatedView>
                    )
                })
            }
        </Container>
    );

}