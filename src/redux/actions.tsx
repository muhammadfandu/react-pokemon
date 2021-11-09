export type Action = { type: 'ADD_POKE'; payload: string };

export const addPokemon = (item: any): Action => ({
  type: 'ADD_POKE',
  payload: item,
});
