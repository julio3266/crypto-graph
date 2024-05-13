import React from "react";
import { AnimatedView, Btn, Container, HomeIcon, SearchIcon, WalletIcon } from './styles'

import { assignTestId } from "@Src/utils/QualityAssurance";
import { NavigationHelpers, ParamListBase, TabNavigationState, useNavigation } from "@react-navigation/native";
import { BottomTabDescriptorMap, BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs/lib/typescript/src/types";

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
                        >
                            <Btn
                                onPress={onPress}
                                {
                                ...assignTestId('TouchableOpacity', `${testID}_tabBarBtn_${index}`)
                                }
                            >
                                {
                                    route.name === 'Home' && (<HomeIcon />) ||
                                    route.name === 'Search' && (<SearchIcon />) ||
                                    route.name === 'Wallet' && (<WalletIcon />)

                                }
                            </Btn>
                        </AnimatedView>
                    )
                })
            }
        </Container>
    );

}