import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Content from './Content';
import MucLuc from './MucLuc';
import Chapter from './Chapter';

class DieuHuongurl extends Component {
    render() {
        return (
            <div>
                <Router>
    <div>

      <Route exact path="/" component={Home} />
      <Route exact path="/truyen/:id" component={Content} />
      <Route exact path="/:slug/:slug/mucluc/:id" component={MucLuc} />
      <Route exact path="/chapter/:id" component={Chapter} />
    </div>
  </Router>
            </div>
        );
    }
}

export default DieuHuongurl;