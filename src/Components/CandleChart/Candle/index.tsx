import React from "react";
import { ScaleLinear } from "d3";
import { LineComponent, RectComponent } from "./styles";
import Theme from "@Global/Theme";

const MARGIN = 2;

export interface Candle {
    date: string;
    day: number;
    open: number;
    high: number;
    low: number;
    close: number;
}

interface CandleProps {
    candle: Candle;
    index: number;
    width: number;
    scaleY: ScaleLinear<number, number>;
    scaleBody: ScaleLinear<number, number>;
}
const { green, red } = Theme.colors
export const Candle = ({ candle, index, width, scaleY, scaleBody }: CandleProps) => {
    const { close, open, high, low } = candle;
    const fill = close > open ? green : red;
    const x = index * width;
    const max = Math.max(open, close);
    const min = Math.min(open, close);
    return (
        <>
            <LineComponent
                x1={x + width / 2}
                y1={scaleY(low)}
                x2={x + width / 2}
                y2={scaleY(high)}
                stroke={fill}
                strokeWidth={1}
            />
            <RectComponent
                x={x + MARGIN}
                y={scaleY(max)}
                width={width - MARGIN * 2}
                height={scaleBody(max - min)}
                {...{ fill }}
            />
        </>
    );
};