import { SafeAreaView, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';


export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    
    
`;

export const Content = styled(ScrollView)`
    flex: 1;
    padding-top: 25px; 
`;