import styled from 'styled-components/native'
import { colors } from '../../theme/colors'

export const PokemonName = styled.Text`
    flex: 2;
    width: 100%;
    font-size: 30px;
    text-align: center;
    color: ${colors.pokemonInfoTextColor};
    text-align-vertical: center;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const TypesContainer = styled.View`
    flex: 1.2;
    flex-direction: row;
    justify-content: center;
`

export const Type = styled.Text`
    width: 130px;
    font-size: 15px;
    text-align: center;
    border-radius: 10px;
    margin-left: 10px;
    color: ${colors.pokemonInfoTextColor};
    text-align-vertical: center;
    background-color: ${props => props.bgColor};
`