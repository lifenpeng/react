import React, { Component } from 'react';
import { GlobalStyle } from './style';
import Header from './common/header/index';


class App extends Component {
  render() {
    return (
      <div>
          <GlobalStyle />
          <Header />
      </div>
    );
  }
}

export default App;