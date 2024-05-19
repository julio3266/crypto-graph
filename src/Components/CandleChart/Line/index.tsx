import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Line as LineSvg } from "react-native-svg";

interface LineProps {
    x: number;
    y: number;
}

export const Line = ({ x, y }: LineProps) => {
    return (
        <Svg style={StyleSheet.absoluteFill}>
            <LineSvg
                x1={0}
                y1={0}
                x2={x}
                y2={y}
                strokeWidth={2}
                stroke="#B5B6B7"
                strokeDasharray="6 6"
            />
        </Svg>
    );
};