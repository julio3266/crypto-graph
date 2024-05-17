import Styled from 'styled-components/native'
import { Path } from '@shopify/react-native-skia';

import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const ChartContainer = Styled.View`
  width: ${width}px;
  height: 43%;
  background-color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  elevation: 4;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  shadow-offset: 0px 5px;
`;

