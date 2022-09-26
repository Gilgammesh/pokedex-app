import {useEffect, useRef, useState} from 'react';
import pokeApi from '../api/pokeApi';
import {PokemonResponse, Result, SimplePokemon} from '../interfaces/pokemon';

const usePokemons = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [simplePokemons, setSimplePokemons] = useState<SimplePokemon[]>([]);
  const pageUrl = useRef('https://pokeapi.co/api/v2/pokemon?offset=0&limit=40');

  useEffect(() => {
    let mounted = true;
    const getPokemons = async () => {
      setLoading(true);
      try {
        const response = await pokeApi.get<PokemonResponse>(pageUrl.current);
        if (mounted && response && response.data) {
          pageUrl.current = response.data.next;
          mapPokemons(response.data.results);
        }
      } catch (error) {
        console.log('Error obteniendo pokemons =>', error);
        setLoading(false);
      }
    };
    getPokemons();
    return () => {
      mounted = false;
    };
  }, []);

  const loadPokemons = async () => {
    setLoading(true);
    try {
      const response = await pokeApi.get<PokemonResponse>(pageUrl.current);
      if (response && response.data) {
        pageUrl.current = response.data.next;
        mapPokemons(response.data.results);
      }
    } catch (error) {
      console.log('Error obteniendo pokemons =>', error);
      setLoading(false);
    }
  };

  const mapPokemons = (pokemonsList: Result[]) => {
    const newSimplePokemons: SimplePokemon[] = pokemonsList.map(
      ({name, url}) => {
        const parts = url.split('/');
        const id = parts[parts.length - 2];
        const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        return {id, name, picture};
      },
    );
    setSimplePokemons(prev => [...prev, ...newSimplePokemons]);
    setLoading(false);
  };

  return {simplePokemons, loading, loadPokemons};
};

export default usePokemons;
