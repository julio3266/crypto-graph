import Styled from 'styled-components/native'

export const Container = Styled.SafeAreaView`
    flex: 1;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.darkBlue};
 
`