import React, { useEffect, useRef, useState } from 'react';
import { scaleLinear } from 'd3';
import Theme from '@Global/Theme';
import Svg from 'react-native-svg';
import { Dimensions, ScrollView } from 'react-native';
import { format, getDate } from 'date-fns';
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
const { heightScreen } = Theme.dimensions;
export const { width: windowWidth } = Dimensions.get('window');

const CM_TO_PX = 2
const MIN_CANDLE_WIDTH_CM = 8;
const MIN_CANDLE_WIDTH_PX = MIN_CANDLE_WIDTH_CM * CM_TO_PX;

export const Candle: React.FC = () => {
    const [candlestickData, setCandlestickData] = useState<any[]>([]);
    const scrollViewRef = useRef<ScrollView>(null);
    const ws = useRef<WebSocket | null>(null);

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
    const scaleY = scaleLinear().domain(domain).range([heightScreen, 0]);
    const scaleBody = scaleLinear()
        .domain([1, Math.max(...domain) - Math.min(...domain)])
        .range([0, heightScreen]);

    useEffect(() => {
        ws.current = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1m');

        ws.current.onmessage = (event: any) => {
            const data = JSON.parse(event.data);
            const newCandle = processKlineData(data);

            setCandlestickData((prevData) => {
                const updatedData = [...prevData, newCandle];

                setTimeout(() => {
                    if (scrollViewRef.current) {
                        scrollViewRef.current.scrollToEnd({ animated: true });
                    }
                }, 100);

                return updatedData;
            });
        };

        return () => {
            ws.current?.close();
        };
    }, []);

    const processKlineData = (data: any) => {
        const { k, E } = data;
        const newDate = new Date(E);
        const newDateFormat = format(newDate, 'yyyy-MM-dd HH:mm');
        const day = getDate(newDate);

        return {
            day: day,
            date: newDateFormat,
            open: parseFloat(k.o),
            high: parseFloat(k.h),
            low: parseFloat(k.l),
            close: parseFloat(k.c),
        };
    };

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
        <GestureHandlerRootView >
            <PanGestureHandler onGestureEvent={panHandler}>
                <Animated.View style={{ flex: 1 }}>
                    <ScrollView ref={scrollViewRef} horizontal>
                        <Animated.View style={animatedStyle}>
                            <Svg width={Math.max(candlestickData.length * width, windowWidth)} height={heightScreen}>
                                {candlestickData.map((candle, index) => (
                                    <Svg key={index} width={Math.max(candlestickData.length * width, windowWidth)} height={heightScreen}>
                                        <Candles
                                            key={index}
                                            candle={candle}
                                            index={index}
                                            width={width}
                                            scaleY={scaleY}
                                            scaleBody={scaleBody}
                                        />
                                    </Svg>
                                ))}
                            </Svg>
                        </Animated.View>
                    </ScrollView>
                </Animated.View>
            </PanGestureHandler>
        </GestureHandlerRootView>
    );
};
