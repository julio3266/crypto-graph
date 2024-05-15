import React, { useEffect } from 'react';
import { ScaleLinear } from 'd3';
import { Line, Rect } from 'react-native-svg';
import Animated, { Easing, useSharedValue, useAnimatedProps, withTiming } from 'react-native-reanimated';

const MARGIN = 2;

export interface CandlesModel {
    date: string;
    day: number;
    open: number;
    high: number;
    low: number;
    close: number;
}

interface CandlesProps {
    candle: CandlesModel;
    index: number;
    width: number;
    scaleY: ScaleLinear<number, number>;
    scaleBody: ScaleLinear<number, number>;
}

const AnimatedLine = Animated.createAnimatedComponent(Line);
const AnimatedRect = Animated.createAnimatedComponent(Rect);

export const Candles: React.FC<CandlesProps> = ({
    candle,
    index,
    width,
    scaleY,
    scaleBody
}) => {
    const { close, open, high, low } = candle;
    const fill = close > open ? "#4AFA9A" : "#E33F64";
    const x = index * width;
    const max = Math.max(open, close);
    const min = Math.min(open, close);

    const animatedHeight = useSharedValue(0);
    const animatedLow = useSharedValue(scaleY(low));
    const animatedHigh = useSharedValue(scaleY(high));
    const animatedY = useSharedValue(scaleY(max));

    useEffect(() => {
        animatedHeight.value = withTiming(scaleBody(max - min), {
            duration: 500,
            easing: Easing.inOut(Easing.ease),
        });
        animatedLow.value = withTiming(scaleY(low), {
            duration: 500,
            easing: Easing.inOut(Easing.ease),
        });
        animatedHigh.value = withTiming(scaleY(high), {
            duration: 500,
            easing: Easing.inOut(Easing.ease),
        });
        animatedY.value = withTiming(scaleY(max), {
            duration: 500,
            easing: Easing.inOut(Easing.ease),
        });
    }, [scaleBody, scaleY, low, high, max, min]);

    const animatedLineProps = useAnimatedProps(() => ({
        y1: animatedLow.value,
        y2: animatedHigh.value
    }));

    const animatedRectProps = useAnimatedProps(() => ({
        y: animatedY.value,
        height: animatedHeight.value
    }));

    return (
        <>
            <AnimatedLine
                x1={x + width / 2}
                x2={x + width / 3}
                stroke={fill}
                strokeWidth={1}
                animatedProps={animatedLineProps}
            />
            <AnimatedRect
                x={x + MARGIN}
                width={width - MARGIN * 2}
                fill={fill}
                animatedProps={animatedRectProps}
            />
        </>
    );
};
