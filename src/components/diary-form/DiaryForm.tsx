import React, { ChangeEvent, useState } from 'react';

interface DiaryFormProps {
  addPokemon(pokemon: string): void;
}

export const DiaryForm: React.FC<DiaryFormProps> = ({ addPokemon }) => {
  const [pokemon, setPokemon] = useState('');

  const updatePokemon = (event: ChangeEvent<HTMLInputElement>) => {
    setPokemon(event.target.value);
  };

  const onAddPokemonClick = () => {
    addPokemon(pokemon);
    setPokemon('');
  };

  return (
    <div className="">
      <div className="row">
        <div className="col-md-6">
          <div className="diary-form">
            <input
              onChange={updatePokemon}
              value={pokemon}
              type="text"
              placeholder="Add an item"
              className="form-control"
            />
            <button onClick={onAddPokemonClick} className="btn btn-primary mt-2" type="submit">
              Add Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
