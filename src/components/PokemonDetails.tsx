import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Pokemon} from '../interfaces/pokemon';
import FadeInImage from './FadeInImage';

interface PokemonDetailsProps {
  pokemon: Pokemon;
}

const PokemonDetails = ({pokemon}: PokemonDetailsProps) => {
  return (
    <ScrollView
      style={{...StyleSheet.absoluteFillObject}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.title}>Tipos</Text>
          <View style={styles.types}>
            {pokemon.types.map(ele => (
              <Text key={ele.slot} style={styles.type}>
                {ele.type.name}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Peso</Text>
          <View style={styles.weight}>
            <Text>{pokemon.weight} kg</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Sprites</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <FadeInImage
              uri={pokemon.sprites.front_default}
              style={styles.spriteImg}
            />
            <FadeInImage
              uri={pokemon.sprites.back_default}
              style={styles.spriteImg}
            />
            <FadeInImage
              uri={pokemon.sprites.front_shiny}
              style={styles.spriteImg}
            />
            <FadeInImage
              uri={pokemon.sprites.back_shiny}
              style={styles.spriteImg}
            />
          </ScrollView>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Habilidades</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.abilities}>
            {pokemon.abilities.map(ele => (
              <Text key={ele.slot} style={styles.type}>
                {ele.ability.name}
              </Text>
            ))}
          </ScrollView>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Movimientos</Text>
          <View style={styles.moves}>
            {pokemon.moves.map(ele => (
              <Text key={ele.move.name} style={styles.move}>
                {ele.move.name}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Estadísticas</Text>
          <View style={styles.stats}>
            {pokemon.stats.map(ele => (
              <View key={ele.stat.name} style={styles.stat}>
                <Text style={styles.statName}>{ele.stat.name}:</Text>
                <Text style={styles.statValue}>{ele.base_stat}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.sectionFinal}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={styles.finalImg}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 378,
    paddingHorizontal: 15,
  },
  section: {
    paddingVertical: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  types: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 5,
  },
  type: {
    marginRight: 5,
  },
  weight: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 5,
  },
  spriteImg: {
    width: 80,
    height: 80,
  },
  abilities: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 5,
  },
  ability: {
    marginRight: 5,
  },
  moves: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 5,
    flexWrap: 'wrap',
  },
  move: {
    marginRight: 5,
  },
  stats: {
    paddingVertical: 5,
  },
  stat: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  statName: {
    width: 150,
  },
  statValue: {
    fontWeight: '700',
    marginLeft: 10,
  },
  sectionFinal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    marginBottom: 20,
  },
  finalImg: {
    width: 120,
    height: 120,
  },
});

export default PokemonDetails;
