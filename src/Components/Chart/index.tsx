import React, { useEffect, useRef, useState } from 'react';
import { ChartContainer } from './styles';
import { Line } from '../Line';
import { Candle } from '../Candle';



export type chartType = 'Line' | 'Candle'

interface ChartProps {
    type: chartType;

}

export const Chart: React.FC<ChartProps> = ({
    type
}) => {

    return (
        <ChartContainer>
            {
                type === 'Line' && (
                    <Line />
                )
            }
            {
                type === 'Candle' && (
                    <Candle />
                )
            }

        </ChartContainer>
    );
};


