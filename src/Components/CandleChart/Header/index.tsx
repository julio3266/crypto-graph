import React from "react";
import {
    Actions,
    Container,
    TabActive,
    TabLabelActive,
    Tabs,
    TabsContainer,
    Value,
    Values
} from "./styles";
import { CandlesModel } from "@Src/Components/Candle/Candles";

interface HeaderProps {
    candles: CandlesModel[];
}

export const Header: React.FC<HeaderProps> = ({ }) => {
    return (
        <Container >
            <TabsContainer>
                <Tabs >
                    <TabActive >
                        <TabLabelActive>Candle</TabLabelActive>
                    </TabActive>
                </Tabs>
            </TabsContainer>
            <Actions>
                <Values>
                    <Value>5000.00 USD</Value>
                </Values>
            </Actions>
        </Container>
    );
};