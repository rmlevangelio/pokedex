import * as React from 'react';

const PokemonDetails = (props: any) => {
  const { name, image, type, weight, height } = props.pokemon;

  return (
    <div className="pokemonDetails">
      <img src={image} className='sprite-image' alt="sprite"/>
      <div className='pokemonDetails__container'>
        <h1 className='pokemonDetails__name'>{name}</h1>
        <p className="pokemonDetails__type">Type: {type}</p>
        <p className="pokemonDetails__type">Weight: {weight}</p>
        <p className="pokemonDetails__type">Height: {height}</p>
      </div>
    </div>
  )
}

export default PokemonDetails;
