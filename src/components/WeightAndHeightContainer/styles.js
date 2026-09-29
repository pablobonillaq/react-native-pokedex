import styled from 'styled-components/native'
import { colors } from '../../theme/colors'

export const MeasuresContainer = styled.View`
    flex: 3.5;
    flex-direction: row;
    padding-horizontal: 15%;
    margin-top: 20px;
`

export const Measure = styled.View`
    flex: 1;
`

export const MeasureText = styled.Text`
    flex: 1;
    width: 100%;
    font-size: 22px;
    text-align: center;
    text-align-vertical: center;
    color: ${colors.pokemonInfoTextColor};
`

export const MeasureLabel = styled.Text`
    flex: 0.5;
    color: ${colors.pokemonInfoLabelColor};
    text-align: center;
`