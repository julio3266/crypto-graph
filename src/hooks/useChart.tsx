import { format, getDate } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { CandlesModel } from "../Components/Candle/Candles";

export const useChart = () => {
    const [chartData, setChartData] = useState<CandlesModel[]>([]);
    const socket = useRef<WebSocket | null>(null);

    useEffect(() => {
        socket.current = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1m');

        socket.current.onmessage = (event: any) => {
            const data = JSON.parse(event.data);
            const { k, E } = data;
            const newDate = new Date(E);
            const newDateFormat = format(newDate, 'yyyy-MM-dd HH:mm');
            const day = getDate(newDate);
            const newCandleData: CandlesModel = {
                day: day,
                date: newDateFormat,
                open: parseFloat(k.o),
                high: parseFloat(k.h),
                low: parseFloat(k.l),
                close: parseFloat(k.c),
            };

            setChartData(prevData => [...prevData, newCandleData]);
        };

        return () => {
            if (socket.current) {
                socket.current.close();
            }
        };
    }, []);

    return chartData;
};
