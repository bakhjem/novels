import React, { Component } from 'react';
import './../Css/App.css';
import Header from './Header';
import Home from './Home';
import DieuHuongurl from './DieuHuongurl';

class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Header></Header>
        <DieuHuongurl></DieuHuongurl>
      </div>
    );
  }
}

export default App;
