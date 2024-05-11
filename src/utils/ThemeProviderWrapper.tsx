import React from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "../Global/Theme";

interface IProps {
    children: any;
    padding?: boolean;
}

export const ThemeProviderWrapper: React.FC<IProps> = ({ children }) => {
    return (<ThemeProvider theme={theme}>{children}</ThemeProvider>
    );
};