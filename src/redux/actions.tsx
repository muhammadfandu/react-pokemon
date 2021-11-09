export const addPokemon = (item: any) => ({
  type: 'ADD_POKE',
  payload: item,
});

export const deletePokemon = (id: any) => ({
  type: 'DELETE_POKE',
  payload: id,
});

export const selectPokemon = (item: any) => ({
  type: 'SELECT_POKE',
  payload: item,
});
