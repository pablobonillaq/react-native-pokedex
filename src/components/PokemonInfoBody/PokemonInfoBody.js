import React from 'react';
import { PokemonName, TypesContainer, Type } from './styles';
import { getTypeColor } from '../../utils';
import WeightAndHeightContainer from '../WeightAndHeightContainer';
import PokemonStats from '../PokemonStats';
import { PokemonInfoContainer } from '../PokemonInfoContainer';

const PokemonInfoBody = ({ pokemon, details, bgColor, placeholder }) => {
    return (
      <PokemonInfoContainer>
        <PokemonName>{pokemon.name.english}</PokemonName>
        <TypesContainer>
          {pokemon.type.map(type => <Type key={type} bgColor={getTypeColor(type)}>{type}</Type>)}
        </TypesContainer>
        {details ? (
          <>
            <WeightAndHeightContainer weight={details.weight} height={details.height} />
            <PokemonStats stats={details.stats} bgColor={bgColor} />
          </>
        ) : placeholder}
      </PokemonInfoContainer>
    );
};

export default PokemonInfoBody;
