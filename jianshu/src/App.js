import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { Iconfont } from './static/iconfont/iconfont';
import Header from './common/header/index';
import store from './store/index'



class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Iconfont />
        <Provider store={store}>
            <Header />
        </Provider>
      </div>
    );
  }
}

export default App;
