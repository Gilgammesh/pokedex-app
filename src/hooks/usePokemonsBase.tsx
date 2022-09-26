import {useEffect, useState} from 'react';
import pokeApi from '../api/pokeApi';
import {PokemonResponse, Result, SimplePokemon} from '../interfaces/pokemon';

const usePokemonsBase = () => {
  const [searching, setSearchig] = useState<boolean>(true);
  const [basePokemons, setBasePokemons] = useState<SimplePokemon[]>([]);

  useEffect(() => {
    let mounted = true;
    const getPokemons = async () => {
      const url = 'https://pokeapi.co/api/v2/pokemon?&limit=1400';
      try {
        const response = await pokeApi.get<PokemonResponse>(url);
        if (mounted && response && response.data) {
          mapPokemons(response.data.results);
        }
      } catch (error) {
        console.log('Error obteniendo base de pokemons =>', error);
        setSearchig(false);
      }
    };
    getPokemons();
    return () => {
      mounted = false;
    };
  }, []);

  const mapPokemons = (pokemonsList: Result[]) => {
    const newBasePokemons: SimplePokemon[] = pokemonsList.map(({name, url}) => {
      const parts = url.split('/');
      const id = parts[parts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return {id, name, picture};
    });
    setBasePokemons(newBasePokemons);
    setSearchig(false);
  };

  return {searching, basePokemons};
};

export default usePokemonsBase;
