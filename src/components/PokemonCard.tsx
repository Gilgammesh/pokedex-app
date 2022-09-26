import React, {useEffect, useRef, useState} from 'react';
import {Text, StyleSheet, Pressable, Image, View} from 'react-native';
import FadeInImage from './FadeInImage';
import getImageColors from '../helpers/getImageColors';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigatorParams} from '../navigator/Navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {SimplePokemon} from '../interfaces/pokemon';

interface Props {
  pokemon: SimplePokemon;
}

const PokemonCard = ({pokemon}: Props) => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackNavigatorParams>>();

  const [bgColor, setBgColor] = useState<string>('');
  const isMounted = useRef(true);

  useEffect(() => {
    getImageColors(pokemon.picture)
      .then(({background}) => setBgColor(background))
      .catch(error => {
        console.log('Obteniendo color del pokemon url', pokemon.picture, error);
        setBgColor('#bbb');
      });
    return () => {
      isMounted.current = false;
    };
  }, [pokemon.picture]);

  return (
    <Pressable
      style={[styles.container, {backgroundColor: bgColor}]}
      onPress={() => {
        if (bgColor !== '') {
          navigation.navigate('PokemonScreen', {
            simplePokemon: {
              id: pokemon.id,
              name: pokemon.name,
              picture: pokemon.picture,
              color: bgColor,
            },
          });
        }
      }}>
      <View style={styles.containerText}>
        <Text style={styles.textName}>{pokemon.name}</Text>
        <Text style={styles.textId}>#{pokemon.id}</Text>
      </View>
      <Image
        source={require('../assets/pokebola-blanca.png')}
        style={styles.pokebola}
      />
      <FadeInImage uri={pokemon.picture} style={styles.image} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    marginHorizontal: 10,
    height: 120,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#252525',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerText: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'rgba(37,37,37,0.3)',
    paddingTop: 10,
    paddingLeft: 8,
    paddingBottom: 2,
    zIndex: 100,
  },
  textName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  textId: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 3,
  },
  image: {
    width: 110,
    height: 110,
    position: 'absolute',
    bottom: -15,
    right: -15,
    zIndex: 300,
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -15,
    right: -10,
    opacity: 0.5,
    zIndex: 200,
  },
});

export default PokemonCard;
