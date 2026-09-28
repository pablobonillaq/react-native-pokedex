import styled from 'styled-components/native'

export const PokemonItem = styled.View`
    flex: 1;
    background-color: ${props => props.bgColor};
    margin-bottom: 10px;
    margin-horizontal: 10px;
    border-radius: 30px;
`;

export const PokemonButton = styled.TouchableOpacity`
    height: 200px;
    justify-content: center;
`

export const PokemonImageContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10px;
`

export const PokemonImage = styled.Image`
    width: 120px;
    height: 120px;
`

export const PokemonName = styled.Text`
    width: 100%;
    font-size: 20px;
    color: #FFF;
    text-align: center;
`