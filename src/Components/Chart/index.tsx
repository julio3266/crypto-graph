import React from 'react'
import { ChartContainer } from './styles'
import { Line } from '../Line'

export type chartType = 'Line' | 'Candle'

interface ChartProps {
  type: chartType
}

export const Chart: React.FC<ChartProps> = ({ type }) => {
  return (
    <ChartContainer>
      <Line />
    </ChartContainer>
  )
}
