import React, { useEffect, useState } from "react";
import { Container, Content } from "./styles";
import { useChart } from '@Src/hooks/useChart';
import { StyleSheet, View } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { onGestureEvent, useValues } from 'react-native-redash';
import Animated, {
    add,
    diffClamp,
    eq,
    modulo,
    sub,
} from "react-native-reanimated";

import { Header } from "@Src/Components/CandleChart/Header";
import { Candle } from "@Src/Components/CandleChart/Candle";
import { size, Chart } from "@Src/Components/CandleChart/Chart";
import { Line } from "@Src/Components/CandleChart/Line";


const getDomain = (rows: Candle[]): [number, number] => {
    const values = rows.map(({ high, low }) => [high, low]).flat();
    return [Math.min(...values), Math.max(...values)];
};

export const CandleChart = () => {
    const candlestickData = useChart();
    const [x, y, state] = useValues(0, 0, State.UNDETERMINED);
    const [startIndex, setStartIndex] = useState(0);
    const [candles, setCandles] = useState<Candle[]>([]);

    useEffect(() => {
        const newCandles = candlestickData.slice(startIndex, startIndex + 40);
        setCandles(newCandles);
    }, [startIndex, candlestickData]);

    const loadMoreCandles = () => {
        setStartIndex(prevIndex => prevIndex + 2);
    };

    useEffect(() => {
        if (candles.length === 20) {
            loadMoreCandles();
        }
    }, [candles]);

    const domain = getDomain(candles);

    const gestureHandler = onGestureEvent({
        x,
        y,
        state,
    });

    const caliber = size / candles.length;
    const translateY = diffClamp(y, 0, size);
    const translateX = add(sub(x, modulo(x, caliber)), caliber / 2);
    const opacity = eq(state, State.ACTIVE);

    return (
        <Container >
            <Content>
                <Header candles={candles} />
                <View>
                    {candles.length > 1 && (
                        <>
                            <Chart {...{ candles, domain }} />
                            <PanGestureHandler minDist={0} {...gestureHandler}>
                                <Animated.View style={StyleSheet.absoluteFill}>
                                    <Animated.View
                                        style={{
                                            transform: [{ translateY }],
                                            opacity,
                                            ...StyleSheet.absoluteFillObject,
                                        }}
                                    >
                                        <Line x={size} y={0} />
                                    </Animated.View>
                                    <Animated.View
                                        style={{
                                            transform: [{ translateX }],
                                            opacity,
                                            ...StyleSheet.absoluteFillObject,
                                        }}
                                    >
                                        <Line x={0} y={size} />
                                    </Animated.View>
                                </Animated.View>
                            </PanGestureHandler>
                        </>
                    )}
                </View>
            </Content>
        </Container>
    );
};
