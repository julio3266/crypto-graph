import React from "react";
import { Dimensions } from "react-native";
import { scaleLinear } from "d3";

import { Candle, Candle as CandleModel } from "../Candle";
import { SVG } from "./styles";

export const { width: size } = Dimensions.get("window");

interface ChartProps {
    candles: CandleModel[];
    domain: [number, number];
}

export const Chart = ({ candles, domain }: ChartProps) => {
    const width = size / candles.length;
    const scaleY = scaleLinear().domain(domain).range([size, 0]);
    const scaleBody = scaleLinear()
        .domain([0, Math.max(...domain) - Math.min(...domain)])
        .range([0, size]);

    return (
        <SVG width={size} height={size}>
            {candles.map((candle, index) => (
                <Candle
                    key={index}
                    {...{ candle, index, width, scaleY, scaleBody }}
                />
            ))}
        </SVG>
    );
};