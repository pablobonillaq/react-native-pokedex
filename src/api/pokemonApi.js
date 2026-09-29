import { POKEAPI_BASE_URL } from '../constants';

// Caché en memoria: si abres el mismo Pokémon otra vez no se vuelve a pedir a la API.
const cache = new Map();

// La respuesta de PokeAPI pesa cientos de KB (moves, sprites, game_indices...).
// Solo guardamos los campos que la app usa.
const pickDetails = data => ({
    weight: data.weight, // hectogramos
    height: data.height, // decímetros
    stats: data.stats.map(s => ({ name: s.stat.name, value: s.base_stat })),
});

export const getPokemonDetails = async id => {
    if (cache.has(id)) {
        return cache.get(id);
    }
    const response = await fetch(`${POKEAPI_BASE_URL}/pokemon/${id}`);
    if (!response.ok) {
        throw new Error('HTTP ' + response.status);
    }
    const details = pickDetails(await response.json());
    cache.set(id, details);
    return details;
};
