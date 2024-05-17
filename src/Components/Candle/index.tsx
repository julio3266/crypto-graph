import React, { useRef } from 'react';
import { scaleLinear } from 'd3';
import Theme from '@Global/Theme';
import Svg from 'react-native-svg';
import { Dimensions, ScrollView, View } from 'react-native';
import { Candles, CandlesModel } from './Candles';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedGestureHandler,
} from 'react-native-reanimated';
import {
    PanGestureHandler,
    GestureHandlerRootView,
    PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import { useChart } from '@Src/hooks/useChart';

const { heightScreen } = Theme.dimensions;
export const { width: windowWidth } = Dimensions.get('window');


const MIN_CANDLE_WIDTH_CM = 8;
const MIN_CANDLE_WIDTH_PX = MIN_CANDLE_WIDTH_CM / 2;
const MAX_CANDLE_HEIGHT_PX = heightScreen / 5;

export const Candle: React.FC = () => {

    const scrollViewRef = useRef<ScrollView>(null);
    const candlestickData = useChart();
    const scale = useSharedValue(1);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const getDomain = (rows: CandlesModel[]): [number, number] => {
        const values = rows.map(({ high, low }) => [high, low]).flat();
        return [Math.min(...values), Math.max(...values)];
    };

    const domain = getDomain(candlestickData);
    const candleWidth = Math.max(windowWidth / 40, MIN_CANDLE_WIDTH_PX);
    const width = candleWidth * scale.value;
    const scaleY = scaleLinear()
        .domain(domain)
        .range([MAX_CANDLE_HEIGHT_PX, 0]);
    const scaleBody = scaleLinear()
        .domain([1, Math.max(...domain) - Math.min(...domain)])
        .range([0, MAX_CANDLE_HEIGHT_PX]);

    const panHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
        onActive: (event) => {
            translateX.value = event.translationX;
            translateY.value = event.translationY;
        }
    });

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { scale: scale.value },
            { translateX: translateX.value },
            { translateY: translateY.value },
        ],
    }));

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <PanGestureHandler onGestureEvent={panHandler}>
                <Animated.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ScrollView ref={scrollViewRef} horizontal contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Animated.View style={[animatedStyle, { justifyContent: 'center', alignItems: 'center' }]}>
                            <Svg width={Math.max(candlestickData.length * width, windowWidth)} height={heightScreen / 2}>
                                {candlestickData.map((candle, index) => (
                                    <Candles
                                        key={index}
                                        candle={candle}
                                        index={index}
                                        width={width}
                                        scaleY={scaleY}
                                        scaleBody={scaleBody}
                                    />
                                ))}
                            </Svg>
                        </Animated.View>
                    </ScrollView>
                </Animated.View>
            </PanGestureHandler>
        </GestureHandlerRootView>
    );
};
