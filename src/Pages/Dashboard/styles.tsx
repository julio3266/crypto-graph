import Styled, { styled } from 'styled-components/native'
import { FontAwesome5 } from '@expo/vector-icons';
import Theme from '@Global/Theme';

export const Header = Styled.View`
    flex-direction: row;
    margin-left: auto;
    right: 1%;
    
`

export const Btn = Styled.TouchableOpacity`
    padding: 5px;
`

export const Icon = styled(FontAwesome5).attrs((props: { selected: any; }) => ({
    color: props.selected ? Theme.colors.pink : Theme.colors.secondaryLight,
    size: 33,
}))``;