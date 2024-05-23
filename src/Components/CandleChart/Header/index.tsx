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
import { Candle } from "../Candle";
import Theme from "@Global/Theme";


interface HeaderProps {
    candles: Candle[];
}

const { green, red, white } = Theme.colors

export const Header: React.FC<HeaderProps> = ({ candles }) => {
    const valueProps = candles.map((candle) => {
        const color = candle.close > candle.open ? green : red;
        const value = candle.high || candle.low

        return { color, value }
    })
    const { value, color } = valueProps?.[0]
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
                    <Value valueColor={color ?? white} >{value} USD</Value>
                </Values>
            </Actions>
        </Container>
    );
};