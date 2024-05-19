import React, { useState } from 'react';
import { AppContent } from '@Src/Components/AppContent';
import { Chart, chartType } from '@Src/Components/Chart';
import { Btn, Header, Icon } from './styles';
import { useNavigation } from '@react-navigation/native';




export const Dashboard = ({ navigation }: any) => {

    const [selectedChart, setSelectedChart] = useState<chartType>('Line')

    const handlePress = (chartType: 'Line' | 'Candle') => {
        setSelectedChart(chartType);
    };

    return (
        <AppContent>
            <Header>
                <Btn onPress={() => { handlePress('Line') }}>
                    <Icon
                        selected={selectedChart === 'Line'}
                        name={'chart-line'}
                    />
                </Btn>
                <Btn onPress={() => { navigation.navigate('Candle') }}>
                    <Icon
                        name={'chart-bar'}
                        selected={selectedChart === 'Candle'}
                    />
                </Btn>
            </Header>
            <Chart type={selectedChart} />
        </AppContent>
    );
};

