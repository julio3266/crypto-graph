import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-between;
`;

export const TabsContainer = styled(View)``

export const Tabs = styled(View)`
  flex-direction: row;
  padding: 16px;
`;

export const TabActive = styled(View)`
  border-bottom-width: 1px;
  border-color: white;
  padding-bottom: 8px;
`;

export const TabLabelActive = styled(Text)`
  color: white;
  font-size: 20px;
`;

export const Tab = styled(View)`
  border-bottom-width: 1px;
  border-color: #222324;
  padding-bottom: 8px;
  flex: 1;
`;

export const TabLabel = styled(Text)`
  font-size: 20px;
  color: #222324;
  margin-left: 16px;
`;

export const Actions = styled(View)`
  flex-direction: row;
  margin-horizontal: 16px;
  align-items: center;
  background-color: #222324;
  border-radius: 8px;
  padding: 16px;
`;




export const Values = styled(View)`
  flex: 1;
`;

export const Value = styled(Text) <any>`
  color: ${props => props.valueColor};
  font-size: 16px;
`;

export const Button = styled(TouchableOpacity)`
  padding-vertical: 8px;
  padding-horizontal: 16px;
  margin: 4px;
  border-radius: 8px;
`;

export const Label = styled(Text)`
  font-size: 20px;
`;
