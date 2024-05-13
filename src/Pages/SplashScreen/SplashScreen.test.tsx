import React from "react";
import { render } from "@testing-library/react-native";
import { mockTestID } from "@Src/utils/QualityAssurance";
import { ThemeProviderWrapper as wrapper } from "@Src/utils/ThemeProviderWrapper";
import { SplashScreen, SplashScreenProps } from "@Src/Pages/SplashScreen";
;


describe("Components/SplashScreen", () => {
    let props: SplashScreenProps = {
        testID: "SplashScreen"
    };

    it(`should render CustomTabBar component`, async () => {
        const { findByTestId, toJSON } = render(<SplashScreen {...props} />, {
            wrapper,
        });

        const sut_container = mockTestID("View", props.testID!).testID;
        const el_lottie = mockTestID("Lottie", `${props.testID!}_lottie`).testID;


        const sut = await findByTestId(sut_container);
        expect(sut).toBeTruthy();

        const tabLottie = await findByTestId(el_lottie);
        expect(tabLottie).toBeTruthy();

        expect(toJSON()).toMatchSnapshot();
    });
});
