import React, { Component } from 'react';
import Header from './common/header'

import './App.css';
import {GlobalFontStyle} from './statics/iconfont/iconfont' 

import {Provider} from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <div>
        {/* V4 之后必须通过这种方式也引用全局的 styled-components 中的 css */}
        <GlobalFontStyle />
        <Provider store={store}>
          <Header />
        </Provider>
      </div>
    );
  }
}

export default App;
