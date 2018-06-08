import * as React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../reducers'
import { createRequest, updateList } from '../actions/pokedex-actions';

import { concat } from 'lodash';

interface State {
  imageUrl: string;
}

interface ReduxState {
  list: any;
}

interface Props extends ReduxState {
  url: string;
  name: string;
  id: number;
  info: object;
  createRequest(payload: any): any;
  updateList(payload: any): any;
}

class PokemonInfo extends React.PureComponent<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = { imageUrl: 'sdfdsf' }
  }

  public componentDidMount() {
    const payload = { url: this.props.url };
    this.props.createRequest(payload);
  }

  public componentWillReceiveProps(nextProps: Props) {
    console.log('remiel');
  }

  handleViewButton = () => {
    
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
    return (
      <div key={ name } className="card cardInfo text-center">
        <div className="card-header cardInfo__header">
          Pokemon
        </div>
        <div className="card-body cardInfo__body">
          <h5 className="card-title cardInfo__title">{ name }</h5>
          <button type="button" onClick={this.handleViewButton} className="btn btn-primary btn-sm cardInfo__button">View details</button>{' '}
          { this.isOnList(list, this.props.id) ?
            <button type="button" onClick={this.handleToggleToList} className="btn btn-danger btn-sm cardInfo__button">- Remove</button>:
            <button type="button" onClick={this.handleToggleToList} className="btn btn-success btn-sm cardInfo__button">+ Add</button>
          }
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

export default connect(mapStateToProps, { createRequest, updateList })(PokemonInfo);
