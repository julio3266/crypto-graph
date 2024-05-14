import Styled from 'styled-components/native'
import { Animated } from 'react-native'
import { Home, Search, Wallet } from '@Src/Assets/svg'
import Theme from '@Global/Theme';
import { SvgProps } from 'react-native-svg';

interface IconProps {
    isFocused?: boolean;
}
export const Container = Styled.View`
    background-color: ${({ theme }) => theme.colors.secondary};
    height: 9%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    border-top-left-radius: 30px;
`

export const ContentButton = Styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Btn = Styled.TouchableOpacity<IconProps>`
    border-radius: ${({ isFocused }) => isFocused ? '60px' : 0};
    justify-content: center;
    align-items: center;
    width:  ${({ isFocused }) => isFocused ? '125px' : '125px'};
    height: ${({ isFocused }) => isFocused ? '48px' : '40px'};
    background-color: ${({ isFocused }) => isFocused ? Theme.colors.pink : 'transparent'};

`

export const AnimatedView = Styled(Animated.View)`
    flex-direction: row;
    height: 35%;    
    justify-content: center;
    align-items: center;
`

export const Title = Styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    font-weight: 700;
    text-align: center;
`


export const HomeIcon = Styled(Home).attrs<IconProps>(({ isFocused }) => ({
    color: isFocused ? Theme.colors.white : Theme.colors.pink
})) <SvgProps>`
    
`;


export const SearchIcon = Styled(Search).attrs<IconProps>(({ isFocused }) => ({
    color: isFocused ? Theme.colors.white : Theme.colors.pink
})) <SvgProps>`
    
`;


export const WalletIcon = Styled(Wallet).attrs<IconProps>(({ isFocused }) => ({
    color: isFocused ? Theme.colors.white : Theme.colors.pink
})) <SvgProps>`
    
`;
