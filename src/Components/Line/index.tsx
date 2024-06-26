import React, { useEffect, useState } from 'react';
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
import { useChart } from '@Src/hooks/useChart';

const GRAPH_HEIGHT = 260;
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

    const candleData = useChart();
    const [data, setData] = useState<DataPoint[]>([]);
    const [latestDataPoint, setLatestDataPoint] = useState<DataPoint | null>(null);
    const font = useFont(require("@Src/Assets/Roboto-Light.ttf"), 12);

    useEffect(() => {
        if (candleData && candleData.length > 0) {
            const newDataPoint = {
                date: new Date().toISOString(),
                value: candleData[candleData.length - 1].close
            };

            setData(prevData => [...prevData, newDataPoint].slice(-30)); // Manter apenas os últimos 30 pontos de dados
            setLatestDataPoint(newDataPoint);
            transitionStart();
        }
    }, [candleData]);

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

    if (!font) {
        return null;
    }

    return (
        <Canvas
            style={{
                width: GRAPH_WIDTH,
                height: GRAPH_HEIGHT,
            }}
        >
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
``
