import React from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  Text,
  Image,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackNavigatorParams} from '../navigator/Navigation';
import usePokemon from '../hooks/usePokemon';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FadeInImage from '../components/FadeInImage';
import PokemonDetails from '../components/PokemonDetails';

type PokemonScreenProps = StackScreenProps<
  RootStackNavigatorParams,
  'PokemonScreen'
>;

const PokemonScreen = ({route, navigation}: PokemonScreenProps) => {
  const {simplePokemon} = route.params;
  const {id, name, picture, color} = simplePokemon;

  const {pokemon, loading} = usePokemon(id);

  const {top} = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={[styles.header, {backgroundColor: color}]}>
        <View style={[styles.containerBack, {marginTop: top}]}>
          <Pressable onPress={() => navigation.navigate('HomeScreen')}>
            <Icon name="arrow-back-outline" size={30} color="#fff" />
          </Pressable>
          <Text style={styles.id}>#{id}</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={[styles.pokeball]}
        />
        <FadeInImage uri={picture} style={styles.image} />
      </View>
      {loading && (
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#252525" />
        </View>
      )}
      {pokemon && !loading && <PokemonDetails pokemon={pokemon} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activity: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 370,
    zIndex: 999,
    borderBottomLeftRadius: 400,
    borderBottomRightRadius: 400,
    shadowColor: '#252525',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerBack: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(37,37,37,0.3)',
    padding: 10,
  },
  id: {
    fontSize: 22,
    color: '#fff',
    marginLeft: 8,
    marginRight: 8,
    fontWeight: 'bold',
  },
  name: {
    flex: 1,
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  pokeball: {
    position: 'absolute',
    width: 250,
    height: 250,
    bottom: 8,
    opacity: 0.7,
  },
  image: {
    position: 'absolute',
    width: 260,
    height: 260,
    bottom: -24,
  },
});

export default PokemonScreen;
