import * as React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../reducers'
import { createRequest, updateList, updateSelectedPokemon } from '../actions/pokedex-actions';

import { concat } from 'lodash';
import { Pokemon } from '../models/pokedex-models';

interface ReduxState {
  list: any;
}

interface Props extends ReduxState {
  url: string;
  name: string;
  id: number;
  createRequest(payload: any): any;
  updateList(payload: any): any;
  updateSelectedPokemon(payload: any): any;
}

class PokemonInfo extends React.PureComponent<Props> {
  handleViewDetailsButton = () => {
    fetch(this.props.url)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);
        this.props.updateSelectedPokemon(pokemon);
      })
      .catch(error => console.log(error));
  }

  handleToggleToList = () => {
    const { list } = this.props;

    let newList = list.filter((item: any) => item.id === this.props.id);
    if (newList.length === 0) {
      newList = concat(list, [{
        id: this.props.id,
        name: this.props.name,
      }]);
    } else {
      newList = list.filter((item: any) => item.id !== this.props.id);
    }

    this.props.updateList(newList);
  }

  public render(): JSX.Element {
    const { name, list } = this.props;
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`;
    return (
      <div key={ name } className="card cardInfo text-center">
        <div className="card-header cardInfo__header">
          Pokemon
        </div>
        <div className="card-body cardInfo__body">
          <img src={imgUrl} />
          <button type="button" onClick={this.handleViewDetailsButton} className="btn btn-primary btn-sm cardInfo__button">View details</button>{' '}
          { this.isOnList(list, this.props.id) ?
            <button type="button" onClick={this.handleToggleToList} className="btn btn-danger btn-sm cardInfo__button">- Remove</button>:
            <button type="button" onClick={this.handleToggleToList} className="btn btn-success btn-sm cardInfo__button">+ Add</button>
          }
          <div className="cardInfo__details">
            
          </div>
        </div>
      </div>
    )
  }

  private isOnList(list: any, id: any) {
    const newList = list.filter((item: any) => item.id === id);
    return newList.length !== 0;
  }
}

const mapStateToProps = (state: AppState) : ReduxState => {
  const {
    pokedexApp: {
      list
    }
  } = state;
  return {
    list
  }
}

const mapDispatchToProps = { createRequest, updateList, updateSelectedPokemon };

export default connect(mapStateToProps, mapDispatchToProps)(PokemonInfo);
