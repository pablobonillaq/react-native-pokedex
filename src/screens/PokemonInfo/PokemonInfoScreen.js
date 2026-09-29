import React, { useMemo } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../theme';
import { pokedex } from '../../data/pokedex';
import { usePokemonDetails } from '../../hooks';
import { getPokemonColor } from '../../utils';
import { Container, Header, PokemonInfoBody, PokemonInfoImageContainer } from '../../components';

const PokemonInfoScreen = ({ route }) => {

  const { id } = route.params;
  const pokemon = useMemo(() => pokedex.find(p => p.id === id), [id]);
  const bgColor = getPokemonColor(pokemon);

  const { details, error, reload } = usePokemonDetails(id);

  return (
    <Container>
      <Header id={pokemon.id} bgColor={bgColor} showBackButton showNumber />
      {/* La imagen y el nombre son locales: se muestran al instante, sin esperar a la API. */}
      <PokemonInfoImageContainer image={pokemon.image} bgColor={bgColor} />
      <PokemonInfoBody
        pokemon={pokemon}
        details={details}
        bgColor={bgColor}
        placeholder={
          <View style={styles.placeholder}>
            {error ? (
              <TouchableOpacity onPress={reload}>
                <Text style={styles.errorText}>No se pudieron cargar los datos.{'\n'}Toca para reintentar.</Text>
              </TouchableOpacity>
            ) : (
              <ActivityIndicator size="large" color={bgColor} />
            )}
          </View>
        }
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    flex: 13.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: colors.pokemonInfoTextColor,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default PokemonInfoScreen;
