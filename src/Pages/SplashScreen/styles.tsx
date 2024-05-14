import Styled from 'styled-components/native';

export const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.darkBlue}
`