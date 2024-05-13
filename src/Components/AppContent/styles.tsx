import Styled from 'styled-components/native'

export const Container = Styled.View`
    flex: 1;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary};
 
`