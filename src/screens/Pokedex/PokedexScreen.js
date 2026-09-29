import React, { useState, useMemo, useCallback } from 'react';
import { FlatList, TextInput, StyleSheet } from 'react-native';
import { pokedex } from '../../data/pokedex';
import { Container, Header, PokemonCard, ROW_HEIGHT } from '../../components';
import { getPokemonColor } from '../../utils';

// Funciones definidas fuera del componente: misma referencia en cada render.
const keyExtractor = item => String(item.id);

const renderItem = ({ item }) => (
  <PokemonCard
    pokemon={item}
    bgColor={getPokemonColor(item)}
  />
);

// Todas las filas miden lo mismo, así FlatList no tiene que medirlas.
// Con numColumns, "index" es el índice de la fila.
const getItemLayout = (_data, index) => ({
  length: ROW_HEIGHT,
  offset: ROW_HEIGHT * index,
  index,
});

const PokedexScreen = () => {

  const [search, setSearch] = useState('');

  // Solo se vuelve a filtrar cuando cambia el texto de búsqueda.
  const data = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) {
      return pokedex;
    }
    return pokedex.filter(pokemon => pokemon.name.english.toLowerCase().includes(term));
  }, [search]);

  const onChangeText = useCallback(text => setSearch(text), []);

  return (
    <Container>
      <Header showText />
      <TextInput
        onChangeText={onChangeText}
        placeholder={'Search pokemon by name'}
        style={styles.search}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        numColumns={2}
        initialNumToRender={8}
        maxToRenderPerBatch={6}
        updateCellsBatchingPeriod={50}
        windowSize={7}
        removeClippedSubviews
        keyboardShouldPersistTaps="handled"
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  search: {
    padding: 15,
    backgroundColor: '#FFF',
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
});

export default PokedexScreen;
