import * as React from 'react';

import Pokedex from './containers/pokedex';

class App extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <div className="main">
        <h2>Pokedex App</h2>
        <Pokedex />
      </div>
    )
  }
}

export default App;
