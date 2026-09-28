import { 
    PokemonItem, 
    PokemonButton, 
    PokemonImageContainer, 
    PokemonImage, 
    PokemonName 
} from './styles';
import { useNavigation } from '@react-navigation/native';

const PokemonCard = ({pokemon, bgColor}) => {

    const navigation = useNavigation();
    const fetchPokemonDataAndNavigate = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon.id);
        const data = await response.json();
        navigation.navigate('PokemonInfo', {pokemon: {...pokemon, ...data}})
    }

    return (
        <PokemonItem bgColor={bgColor}>
            <PokemonButton onPress={fetchPokemonDataAndNavigate}>
                <PokemonImageContainer>
                    <PokemonImage source={pokemon.image} />
                </PokemonImageContainer>
                <PokemonName>{'#' + (pokemon.id) + ' ' + pokemon.name.english}</PokemonName>
            </PokemonButton>
        </PokemonItem>
    );
};

export default PokemonCard;