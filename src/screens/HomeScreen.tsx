import React from 'react';
import {
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import usePokemons from '../hooks/usePokemons';
import PokemonCard from '../components/PokemonCard';

const HomeScreen = () => {
  const {colors} = useTheme();

  const {simplePokemons, loadPokemons} = usePokemons();

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/pokebola.png')} style={styles.logo} />
      <Text style={[styles.title, {color: colors.text}]}>Pokedex</Text>
      <FlatList
        style={styles.list}
        data={simplePokemons}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        onEndReached={() => loadPokemons()}
        onEndReachedThreshold={0.2}
        ListFooterComponent={
          <ActivityIndicator size={24} color="grey" style={styles.activity} />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  logo: {
    position: 'absolute',
    top: -100,
    right: -100,
    width: 300,
    height: 300,
    opacity: 0.2,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    paddingHorizontal: 10,
  },
  list: {
    marginTop: 14,
  },
  activity: {
    marginVertical: 20,
  },
});

export default HomeScreen;
