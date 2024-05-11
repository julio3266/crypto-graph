import React from "react";
import { Container } from './styles'
import { Text, TouchableOpacity } from "react-native";
import { assignTestId } from "@Src/utils/QualityAssurance";

export interface CustomTabBarProps {
    testID?: string;
    state: any;
    descriptors: any;
    navigation: any;
}

export const CustomTabBar: React.FC<CustomTabBarProps> = ({
    testID = 'CustomTabBarID',
    state,
    descriptors,
    navigation
}) => {
    return (
        <Container {...assignTestId("View", testID)}>
            {/* {state?.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key];
                return ( */}
            <TouchableOpacity {...assignTestId('TouchableOpacity', `${testID}_tabBarBtn`)} >
                <Text {...assignTestId('Text', `${testID}_tabBarBtnTitle`)}>
                    teste
                </Text>
            </TouchableOpacity>
            {/* );
            })} */}
        </Container>
    );

}