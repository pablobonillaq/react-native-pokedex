import styled from 'styled-components/native'
import { colors } from '../../theme/colors'

export const HeaderContainer = styled.View`
    width: 100%;
    height: 50px;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${props => props.bgColor};
`;

export const HeaderText = styled.Text`
    height: 100%;
    width: 100px;
    color: ${colors.pokemonInfoTextColor};
    font-size: 20px;
    text-align-vertical: center;
    text-align: center;
    padding-horizontal: 10px;
`