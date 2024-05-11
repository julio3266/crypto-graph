import React from "react";
import { render } from "@testing-library/react-native";
import { mockTestID } from "@Src/utils/QualityAssurance";
import { ThemeProviderWrapper as wrapper } from "@Src/utils/ThemeProviderWrapper";
import { CustomTabBar, CustomTabBarProps } from "@Src/Components/CustomTabBar";

describe("Components/CustomTabBar", () => {
    let props: CustomTabBarProps = {
        testID: "CustomTabBarID",
        descriptors: 'teste',
        navigation: 'teste',
        state: 'teste'
    };

    it(`should render CustomTabBar component`, async () => {
        const { findByTestId, toJSON } = render(<CustomTabBar {...props} />, {
            wrapper,
        });

        const sut_container = mockTestID("View", props.testID!).testID;
        const el_btn = mockTestID("TouchableOpacity", `${props.testID!}_tabBarBtn`).testID;
        const el_btn_title = mockTestID("Text", `${props.testID!}_tabBarBtnTitle`).testID;

        const sut = await findByTestId(sut_container);
        expect(sut).toBeTruthy();

        const button = await findByTestId(el_btn);
        expect(button).toBeTruthy();

        const buttonTitle = await findByTestId(el_btn_title);
        expect(buttonTitle).toBeTruthy();

        expect(toJSON()).toMatchSnapshot();
    });
});
