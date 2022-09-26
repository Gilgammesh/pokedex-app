import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  View,
  Text,
  FlatList,
} from 'react-native';
import PokemonCard from '../components/PokemonCard';
import SearchInput from '../components/SearchInput';
import useDebounced from '../hooks/useDebounced';
import usePokemonsBase from '../hooks/usePokemonsBase';

const SearchScreen = () => {
  const {searching, basePokemons} = usePokemonsBase();

  const [textValue, setTextValue] = useState<string>('');

  const debouncedValue = useDebounced(textValue);

  if (searching) {
    return (
      <View style={styles.activity}>
        <ActivityIndicator size={'large'} color="grey" />
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchInput setTextValue={setTextValue} />
      <FlatList
        style={styles.list}
        data={basePokemons.filter(ele => {
          if (debouncedValue === '') {
            return ele;
          } else {
            if (isNaN(Number(debouncedValue))) {
              return ele.name
                .toLowerCase()
                .includes(debouncedValue.toLowerCase());
            } else {
              return ele.id === debouncedValue;
            }
          }
        })}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  activity: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    marginTop: 20,
  },
});

export default SearchScreen;
