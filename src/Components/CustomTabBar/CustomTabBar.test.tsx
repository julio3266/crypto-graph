import React from "react";
import { render } from "@testing-library/react-native";
import { mockTestID } from "@Src/utils/QualityAssurance";
import { ThemeProviderWrapper as wrapper } from "@Src/utils/ThemeProviderWrapper";
import { CustomTabBar, CustomTabBarProps } from "@Src/Components/CustomTabBar";
import { NavigationHelpers, ParamListBase, TabNavigationState } from "@react-navigation/native";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import { BottomTabDescriptorMap } from "@react-navigation/bottom-tabs/lib/typescript/src/types";


describe("Components/CustomTabBar", () => {
    type MockNavigation = NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
    type MockTabNavigationState = TabNavigationState<ParamListBase>;

    const mockNavigation: MockNavigation = {
        navigate: jest.fn(),
        dispatch: jest.fn(),
        reset: jest.fn(),
        goBack: jest.fn(),
        isFocused: jest.fn(),
        canGoBack: jest.fn(() => false),
        emit: jest.fn(),
        getId: jest.fn(),
        getParent: jest.fn(),
        getState: jest.fn(),
        setParams: jest.fn(),
    };

    const mockDescriptors: BottomTabDescriptorMap = {
        Route1: {
            navigation: {
                navigate: jest.fn(),
                addListener: jest.fn(),
                canGoBack: jest.fn(),
                dispatch: jest.fn(),
                getId: jest.fn(),
                getParent: jest.fn(),
                getState: jest.fn(),
                goBack: jest.fn(),
                isFocused: jest.fn(),
                jumpTo: jest.fn(),
                removeListener: jest.fn(),
                reset: jest.fn(),
                setOptions: jest.fn(),
                setParams: jest.fn(),
            },
            render: jest.fn(),
            options: {},
            route: { key: 'Home', name: 'Home', params: {}, path: '' }
        },
    };

    const mockState: MockTabNavigationState = {
        key: 'stateKey',
        index: 0,
        routeNames: ['Route1', 'Route2'],
        routes: [
            { name: 'Home', key: 'Home', params: undefined },
            { name: 'Search', key: 'Search', params: undefined },
            { name: 'Candle', key: 'Candle', params: undefined },
        ],
        type: 'tab',
        stale: false,
        history: [
            {
                type: "route",
                key: ''
            }
        ]
    };

    let props: CustomTabBarProps = {
        testID: "CustomTabBarID",
        descriptors: mockDescriptors,
        navigation: mockNavigation,
        state: mockState
    };

    it(`should render CustomTabBar component`, async () => {
        const { findByTestId, toJSON } = render(<CustomTabBar {...props} />, {
            wrapper,
        });

        const sut_container = mockTestID("View", props.testID!).testID;
        const el_tab_animated_0 = mockTestID("Lottie", `${props.testID!}_tabBarAnimatedView_0`).testID;
        const el_tab_animated_1 = mockTestID("Lottie", `${props.testID!}_tabBarAnimatedView_1`).testID;
        const el_btn_0 = mockTestID("TouchableOpacity", `${props.testID!}_tabBarBtn_0`).testID;
        const el_btn_1 = mockTestID("TouchableOpacity", `${props.testID!}_tabBarBtn_1`).testID;

        const sut = await findByTestId(sut_container);
        expect(sut).toBeTruthy();

        const tabBarAnimated0 = await findByTestId(el_tab_animated_0);
        expect(tabBarAnimated0).toBeTruthy();

        const tabBarAnimated1 = await findByTestId(el_tab_animated_1);
        expect(tabBarAnimated1).toBeTruthy();

        const button0 = await findByTestId(el_btn_0);
        expect(button0).toBeTruthy();

        const button1 = await findByTestId(el_btn_1);
        expect(button1).toBeTruthy();

        expect(toJSON()).toMatchSnapshot();
    });
});
