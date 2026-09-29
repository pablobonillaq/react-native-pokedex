import { useCallback, useEffect, useState } from 'react';
import { getPokemonDetails } from '../api/pokemonApi';

// Pide a la API los detalles (peso, altura, stats) de un Pokémon.
// Devuelve `reload` para reintentar si la petición falla.
export const usePokemonDetails = id => {

  const [details, setDetails] = useState(null);
  const [error, setError] = useState(false);

  const reload = useCallback(() => {
    let cancelled = false;
    setError(false);
    getPokemonDetails(id)
      .then(data => { if (!cancelled) setDetails(data); })
      .catch(() => { if (!cancelled) setError(true); });
    // Evita actualizar el estado si el usuario ya regresó antes de que llegue la respuesta.
    return () => { cancelled = true; };
  }, [id]);

  useEffect(reload, [reload]);

  return { details, error, reload };
};
