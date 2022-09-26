export interface PokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export interface SimplePokemon {
  id: string;
  name: string;
  picture: string;
  color?: string;
}

export interface Pokemon {
  abilities: PokemonAbility[];
  base_experience: number;
  forms: PokemonSpecies[];
  game_indices: PokemonGameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMove[];
  name: string;
  order: number;
  past_types: any[];
  species: PokemonSpecies;
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
}

export interface PokemonAbility {
  ability: PokemonSpecies;
  is_hidden: boolean;
  slot: number;
}

export interface PokemonSpecies {
  name: string;
  url: string;
}

export interface PokemonGameIndex {
  game_index: number;
  version: PokemonSpecies;
}

export interface PokemonMove {
  move: PokemonSpecies;
  version_group_details: PokemonVersionGroupDetail[];
}

export interface PokemonVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: PokemonSpecies;
  version_group: PokemonSpecies;
}

export interface PokemonGenerationV {
  'black-white': PokemonSprites;
}

export interface PokemonGenerationIv {
  'diamond-pearl': PokemonSprites;
  'heartgold-soulsilver': PokemonSprites;
  platinum: PokemonSprites;
}

export interface PokemonVersions {
  'generation-i': PokemonGenerationI;
  'generation-ii': PokemonGenerationIi;
  'generation-iii': PokemonGenerationIii;
  'generation-iv': PokemonGenerationIv;
  'generation-v': PokemonGenerationV;
  'generation-vi': {[key: string]: PokemonHome};
  'generation-vii': PokemonGenerationVii;
  'generation-viii': PokemonGenerationViii;
}

export interface PokemonSprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: PokemonOther;
  versions?: PokemonVersions;
  animated?: PokemonSprites;
}

export interface PokemonGenerationI {
  'red-blue': PokemonRedBlue;
  yellow: PokemonRedBlue;
}

export interface PokemonRedBlue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface PokemonGenerationIi {
  crystal: PokemonCrystal;
  gold: PokemonGold;
  silver: PokemonGold;
}

export interface PokemonCrystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

export interface PokemonGold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent?: string;
}

export interface PokemonGenerationIii {
  emerald: PokemonEmerald;
  'firered-leafgreen': PokemonGold;
  'ruby-sapphire': PokemonGold;
}

export interface PokemonEmerald {
  front_default: string;
  front_shiny: string;
}

export interface PokemonHome {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface PokemonGenerationVii {
  icons: PokemonDreamWorld;
  'ultra-sun-ultra-moon': PokemonHome;
}

export interface PokemonDreamWorld {
  front_default: string;
  front_female: null;
}

export interface PokemonGenerationViii {
  icons: PokemonDreamWorld;
}

export interface PokemonOther {
  dream_world: PokemonDreamWorld;
  home: PokemonHome;
  'official-artwork': PokemonOfficialArtwork;
}

export interface PokemonOfficialArtwork {
  front_default: string;
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: PokemonSpecies;
}

export interface PokemonType {
  slot: number;
  type: PokemonSpecies;
}
