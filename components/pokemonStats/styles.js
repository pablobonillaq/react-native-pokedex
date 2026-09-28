import styled from 'styled-components/native'
import { colors } from '../../theme/colors'

export const StatsContainer = styled.View`
    flex: 10;
    width: 80%;
    margin-horizontal: 10%;
`

export const StatsTitle = styled.Text`
    flex: 3;
    width: 100%;
    font-size: 30px;
    text-align: center;
    color: ${colors.pokemonInfoTextColor};
    text-align-vertical: center;
`

export const StatContainer = styled.View`
    margin-bottom: 5px;
`