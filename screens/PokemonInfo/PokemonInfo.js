import React from 'react'
import { typesColors } from '../../theme/colors'
import Header from '../../components/header/header';
import PokemonInfoImageContainer from '../../components/pokemonInfoImageContainer/pokemonInfoImageContainer';
import PokemonInfoBody from '../../components/pokemonInfoBody/pokemonInfoBody';
import { Container } from '../../components/container/container';

const PokemonInfo = ({route}) => {

  const pokemon = route.params.pokemon;
  const bgColor = typesColors[pokemon.type[0].toLowerCase()];

    return (
      <Container>
        <Header id={pokemon.id} bgColor={bgColor} showBackButton showNumber />
        <PokemonInfoImageContainer image={pokemon.image} bgColor={bgColor} />
        <PokemonInfoBody pokemon={{...pokemon}} bgColor={bgColor} />
      </Container>
    );
  };
  
  export default PokemonInfo;
  