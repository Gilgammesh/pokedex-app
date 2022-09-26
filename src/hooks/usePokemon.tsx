import {useEffect, useState} from 'react';
import pokeApi from '../api/pokeApi';
import {Pokemon} from '../interfaces/pokemon';

const usePokemon = (id: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    let mounted = true;
    const getPokemon = async () => {
      try {
        const response = await pokeApi.get<Pokemon>(
          `https://pokeapi.co/api/v2/pokemon/${id}`,
        );
        if (mounted && response && response.data) {
          setPokemon(response.data);
        }
      } catch (error) {
        console.log(`Error obteniendo detalle de pokemon ${id} =>`, error);
      }
      setLoading(false);
    };
    getPokemon();
    return () => {
      mounted = false;
    };
  }, [id]);

  return {pokemon, loading};
};

export default usePokemon;
