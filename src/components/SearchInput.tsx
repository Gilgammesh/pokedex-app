import React from 'react';
import {View, StyleSheet, TextInput, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface ISearchInputProps {
  setTextValue: (textValue: string) => void;
}

const SearchInput = ({setTextValue}: ISearchInputProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <TextInput
          placeholder={'Buscar pokemón'}
          style={styles.textinput}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={setTextValue}
        />
        <Icon name="search-outline" size={30} color="grey" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 4 : 12,
    marginHorizontal: 10,
  },
  background: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f1f3',
    borderRadius: 50,
    height: 52,
    paddingHorizontal: 20,
    hadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textinput: {
    flex: 1,
    fontSize: 18,
  },
});

export default SearchInput;
