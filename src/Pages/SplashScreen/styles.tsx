
import Styled from 'styled-components/native'
import LottieView from 'lottie-react-native';


export const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.darkBlue};
`

export const Splash = Styled(LottieView)`
    width: 100%;
`