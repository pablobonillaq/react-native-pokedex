import React, {useState} from 'react';
import {FlatList,TextInput} from 'react-native';
import { typesColors } from '../../theme/colors'
import { pokedex } from '../../data/pokemon_data';
import PokemonCard from '../../components/pokemonCard/pokemonCard';
import { Container } from '../../components/container/container';
import Header from '../../components/header/header';

const Pokemons = () => {

  const [search, setSearch] = useState('');

  return (
    <>
      <Container>
        <Header showText />
        <TextInput onChangeText={(text) => setSearch(text)} placeholder={'Search pokemon by name'} style={{padding: 15, backgroundColor: '#FFF', marginBottom: 10, marginHorizontal: 10, borderRadius: 10}}/>
        <FlatList
          data={search.length ? pokedex.filter(pokemon => pokemon.name.english.toLowerCase().includes(search)) : pokedex}
          renderItem={(item) => 
            <PokemonCard 
              pokemon={{...item.item}} 
              bgColor={ typesColors[item.item.type[0].toLowerCase()] }
            />}
          numColumns={2}
          keyExtractor={item => item.name.english}
        />
      </Container>
    </>
  );
};

export default Pokemons;
