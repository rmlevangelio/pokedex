import * as React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../reducers';
import { Result } from '../models/pokedex-models';
import { createRequest } from '../actions/pokedex-actions';
import PokemonInfo from '../components/pokemon-info';

interface State {
  toggleList: boolean;
}

interface ReduxState {
  isFetchingResults: boolean;
  info: object[];
  list: object[];
  results: Result[];
  count: number;
  next: string | null;
  previous: string | null;
}

interface Props extends ReduxState {
  createRequest(payload: any): any;
}

class Pokedex extends React.PureComponent<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = { toggleList: false }
  }

  public componentDidMount() {
    const payload = { url: 'https://pokeapi.co/api/v2/pokemon/' };
    this.props.createRequest(payload); // initial fetch
  }

  public componentWillReceiveProps(nextProps: Props) {
    if (nextProps.info.length !== 0) {
      console.log('remiel');
    } 
  }

  toggleList = () => {
    this.setState({ toggleList: !this.state.toggleList})
  }

  public render(): JSX.Element {
    const { isFetchingResults, results, count, info, list } = this.props;

    return (
      <div className="pokedex">
        { isFetchingResults ? 'Fetching pokemons...' : null }
        { count === 0 ? null :
          <div>
            <button type="button" onClick={this.toggleList} className="btn btn-warning btn-sm cardInfo__button">View List</button>
            { this.state.toggleList ? 
              <div className="list">
                { list.length === 0 ? null :
                  <ol>
                    { list.map((item: any) => <li className="listItem">{ item.name }</li>)}
                  </ol>
                }
              </div> : null
            }
            
            { results.map((result, index) => (
              <PokemonInfo
                key={ index }
                id={index + 1}
                url={result.url}
                name={result.name}
                info={info}
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
      info,
      list,
      output: { 
        results, count, next, previous
      }
    }
  } = state;
  return {
    isFetchingResults,
    info,
    list,
    results,
    count,
    next,
    previous
  }
}

const mapDispatchToProps = { createRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
