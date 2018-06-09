import * as React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../reducers';
import { Result } from '../models/pokedex-models';
import { createRequest } from '../actions/pokedex-actions';
import PokemonList from '../components/pokemon-list';
import PokemonDetails from '../components/pokemon-details';
import MyList from '../components/pokedex-mylist';

interface State {
  toggleList: boolean;
}

interface ReduxState {
  isFetchingResults: boolean;
  list: object[];
  selectedPokemon: any,
  results: Result[];
  count: number;
  next: string | null;
  previous: string | null;
}

interface Props extends ReduxState {
  createRequest(payload: any): any;
}

class Pokedex extends React.PureComponent<Props, State> {
  state = {
    toggleList: false
  } 

  public componentDidMount() {
    const payload = { url: 'https://pokeapi.co/api/v2/pokemon/' };
    this.props.createRequest(payload); // initial fetch
  }

  toggleList = () => {
    this.setState({ toggleList: !this.state.toggleList})
  }

  public render(): JSX.Element {
    const { isFetchingResults, results, count, list, selectedPokemon } = this.props;
  
    return (
      <div className="pokedex">
        { isFetchingResults ? 'Fetching pokemons...' : null }
        { count === 0 ? null :
          <div>
            { list.length === 0 ? null :
              <button type="button" onClick={this.toggleList} className="btn btn-warning btn-sm cardInfo__button">My Pokemon</button>
            }
            { !this.state.toggleList ? null :
              <MyList list={list} />
            }

            { selectedPokemon === '' ? null :
              <PokemonDetails pokemon={selectedPokemon} />
            }

            { results.map((result, index) => (
              <PokemonList
                key={ index }
                id={index + 1}
                url={result.url}
                name={result.name}
              />
            ))
            }
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) : ReduxState => {
  const {
    pokedexApp: {
      isFetchingResults,
      list,
      selectedPokemon,
      output: { 
        results, count, next, previous
      }
    }
  } = state;
  return {
    isFetchingResults,
    list,
    selectedPokemon,
    results,
    count,
    next,
    previous
  }
}

const mapDispatchToProps = { createRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
