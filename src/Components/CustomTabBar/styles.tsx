import Styled from 'styled-components/native'
import { Animated } from 'react-native'
import { Home, Search, Wallet } from '@Src/Assets/svg'


export const Container = Styled.View`
    background-color: ${({ theme }) => theme.colors.secondary};
    height: 10%;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    border-top-left-radius: 30px;
`

export const Btn = Styled.TouchableOpacity`
    
    
`

export const AnimatedView = Styled(Animated.View)`
    flex-direction: row;
    height: 35%;
    border-radius: 8px
    
`

export const Title = Styled.Text`
    color: #eee;
    font-size: 15px;
    font-weight: 700;
    text-align: center;
`

export const HomeIcon = Styled(Home).attrs(({}))``

export const SearchIcon = Styled(Search).attrs(({}))``

export const WalletIcon = Styled(Wallet).attrs(({}))``
