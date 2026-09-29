import { typesColors } from '../theme';

// Color asociado a un tipo ("Grass", "Fire"...).
export const getTypeColor = type => typesColors[type.toLowerCase()];

// El color principal de un Pokémon es el de su primer tipo.
export const getPokemonColor = pokemon => getTypeColor(pokemon.type[0]);

// "special-attack" -> "special attack"
export const formatStatName = name => name.replace('-', ' ');
