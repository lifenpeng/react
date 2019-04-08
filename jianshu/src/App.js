import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter,Route } from 'react-router-dom';
import { GlobalStyle } from './style';
import { Iconfont } from './static/iconfont/iconfont';
import Header from './common/header/index';
import store from './store/index';
import Home from './page/home';
import Detail from './page/detail';



class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Iconfont />
        <Provider store={store}>
              <BrowserRouter>
                  <div>
                    <Header />
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/detail" exact component={Detail}></Route>
                  </div>          
              </BrowserRouter>  
        </Provider>
      </div>
    );
  }
}

export default App;
