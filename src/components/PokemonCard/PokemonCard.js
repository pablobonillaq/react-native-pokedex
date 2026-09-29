import React, { memo, useCallback } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants';
import { styles } from './styles';

const PokemonCard = ({ pokemon, bgColor }) => {

    const navigation = useNavigation();

    // Navega de inmediato solo con el id; la pantalla de detalle se encarga de pedir los datos.
    // Así la navegación no espera a la red y los params quedan pequeños y serializables.
    const onPress = useCallback(() => {
        navigation.navigate(ROUTES.POKEMON_INFO,{ id: pokemon.id });
    }, [navigation, pokemon.id]);

    return (
        <View style={[styles.item, { backgroundColor: bgColor }]}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <View style={styles.imageContainer}>
                    {/* resizeMethod="resize" reduce la imagen al decodificarla en Android (475px -> 120px) */}
                    <Image source={pokemon.image} style={styles.image} resizeMethod="resize" fadeDuration={0} />
                </View>
                <Text style={styles.name}>{'#' + pokemon.id + ' ' + pokemon.name.english}</Text>
            </TouchableOpacity>
        </View>
    );
};

// memo: la tarjeta solo se vuelve a renderizar si cambian sus props.
export default memo(PokemonCard);
