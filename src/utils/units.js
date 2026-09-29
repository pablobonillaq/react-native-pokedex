// PokeAPI devuelve el peso en hectogramos y la altura en decímetros.
// (Antes se trataban como libras y pulgadas: Pikachu salía con 27.24 kg y 10.16 cm).
export const hectogramsToKg = hg => (hg / 10).toFixed(1);

export const decimetersToCm = dm => dm * 10;
