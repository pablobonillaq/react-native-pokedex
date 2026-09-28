import {View} from 'react-native'
import {PokemonName, TypesContainer, Type} from './styles'
import { typesColors } from '../../theme/colors'
import WeightAndHeightContainer from '../weightAndHeightContainer/weightAndHeightContainer';
import PokemonStats from '../pokemonStats/pokemonStats';
import { PokemonInfoContainer } from '../pokemonInfoContainer/pokemonInfoContainer';

const PokemonInfo = ({pokemon, bgColor}) => {
    return(
      <PokemonInfoContainer>
        <PokemonName>
          {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
        </PokemonName>
        <TypesContainer>
          {pokemon.type.map(type => <Type key={type} bgColor={typesColors[type.toLowerCase()]}>{type}</Type>)}
        </TypesContainer>
        <WeightAndHeightContainer weight={pokemon.weight} height={pokemon.height}/>
        <PokemonStats stats={pokemon.stats} bgColor={bgColor} />
      </PokemonInfoContainer>
    );
};

export default PokemonInfo;