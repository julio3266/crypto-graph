import React, { useEffect, useRef, useState } from 'react';
import {
    Canvas,
    Path,
    Circle,
    SkPath,
    Skia,
    useValue,
    runTiming,
    useComputedValue,
    Text,
    useFont,
} from '@shopify/react-native-skia';
import Theme from '@Global/Theme';
import { area, line, scaleLinear, scaleTime } from 'd3';
import { Easing } from 'react-native';

export const SOCKET_URL = "wss://nbstream.binance.com/eoptions/ws";
const GRAPH_HEIGHT = 250;
const GRAPH_WIDTH = Theme.dimensions.widthScreen;

export interface DataPoint {
    date: string;
    value: number;
}

export interface GraphData {
    min: number;
    max: number;
    curve: SkPath;
    area: SkPath;
}

export const Line: React.FC = ({ }) => {
    const transition = useValue(1);
    const state = useValue({
        current: 0,
        next: 1,
    });

    const [data, setData] = useState<DataPoint[]>([]);
    const [latestDataPoint, setLatestDataPoint] = useState<DataPoint | null>(null);
    const font = useFont(require("@Src/Assets/Roboto-Light.ttf"), 12);

    const makeGraph = (data: DataPoint[]): GraphData => {
        const max = Math.max(...data.map(val => val.value));
        const min = Math.min(...data.map(val => val.value));
        const y = scaleLinear().domain([min, max]).range([GRAPH_HEIGHT, 35]);

        const x = scaleTime()
            .domain([new Date(data[0].date), new Date(data[data.length - 1].date)])
            .range([10, GRAPH_WIDTH - 10]);

        const straightLine = line<DataPoint>()
            .x(d => x(new Date(d.date)))
            .y(d => y(d.value))(data);

        const filledArea = area<DataPoint>()
            .x(d => x(new Date(d.date)))
            .y0(GRAPH_HEIGHT)
            .y1(d => y(d.value))(data);

        const skLinePath = Skia.Path.MakeFromSVGString(straightLine!);
        const skAreaPath = Skia.Path.MakeFromSVGString(filledArea!);

        return {
            max,
            min,
            curve: skLinePath!,
            area: skAreaPath!,
        };
    };

    const transitionStart = () => {
        state.current = {
            current: state.current.next,
            next: (state.current.next + 1) % 2,
        };
        transition.current = 0;
        runTiming(transition, 1, {
            duration: 750,
            easing: Easing.inOut(Easing.cubic),
        });
    };

    const graphData = data.length > 0 ? [makeGraph(data)] : [];

    const path = useComputedValue(() => {
        if (graphData.length > 0) {
            const start = graphData[0].curve;
            const end = graphData[0].curve;
            const result = start.interpolate(end, transition.current);
            return result?.toSVGString() ?? '0';
        }
        return '0';
    }, [state, transition, graphData]);

    const areaPath = useComputedValue(() => {
        if (graphData.length > 0) {
            const start = graphData[0].area;
            const end = graphData[0].area;
            const result = start.interpolate(end, transition.current);
            return result?.toSVGString() ?? '0';
        }
        return '0';
    }, [state, transition, graphData]);

    const handleNewData = (newData: DataPoint) => {
        setData((prevData) => {
            const updatedData = [...prevData, newData].slice(-30);
            transitionStart();
            return updatedData;
        });
        setLatestDataPoint(newData);
    };

    const dataBuffer = useRef<DataPoint[]>([]);

    useEffect(() => {
        const ws = new WebSocket(SOCKET_URL);

        ws.onopen = () => {
            ws.send(JSON.stringify({
                method: "SUBSCRIBE",
                params: ["ETHUSDT@index"],
                id: 1
            }));
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.e === 'index') {
                dataBuffer.current.push({ date: new Date().toISOString(), value: parseFloat(data.p) });
            }
        };

        ws.onclose = () => {

        };

        ws.onerror = (error) => {

        };

        const intervalId = setInterval(() => {
            if (dataBuffer.current.length > 0) {
                handleNewData(dataBuffer.current[dataBuffer.current.length - 1]);
                dataBuffer.current = [];
            }
        }, 3000);

        return () => {
            ws.close();
            clearInterval(intervalId);
        };
    }, []);
    if (!font) {
        return null
    }
    return (
        <Canvas
            style={{
                width: GRAPH_WIDTH,
                height: GRAPH_HEIGHT,
            }}>
            {graphData.length > 0 && (
                <>
                    <Path path={areaPath} color={`${Theme.colors.pink}55`} />
                    <Path style="stroke" path={path} strokeWidth={2} color={Theme.colors.pink} />
                    {latestDataPoint && (
                        <>
                            <Circle
                                cx={scaleTime().domain([new Date(data[0].date), new Date(data[data.length - 1].date)]).range([10, GRAPH_WIDTH - 10])(new Date(latestDataPoint.date))}
                                cy={scaleLinear().domain([Math.min(...data.map(val => val.value)), Math.max(...data.map(val => val.value))]).range([GRAPH_HEIGHT, 35])(latestDataPoint.value)}
                                r={4}
                                color={Theme.colors.pink}
                            />
                            <Text
                                x={scaleTime().domain([new Date(data[0].date), new Date(data[data.length - 1].date)]).range([10, GRAPH_WIDTH - 30])(new Date(latestDataPoint.date))}
                                y={scaleLinear().domain([Math.min(...data.map(val => val.value)), Math.max(...data.map(val => val.value))]).range([GRAPH_HEIGHT, 20])(latestDataPoint.value) - 10}
                                text={latestDataPoint.value.toFixed(2)}
                                font={font}
                                color={Theme.colors.white}
                            />

                        </>
                    )}
                </>
            )}
        </Canvas>

    );
};
