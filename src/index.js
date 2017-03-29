import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, Route,hashHistory} from 'react-router';

class MainLayout extends Component{
  render(){
    return (
      <div className="app">
        <header className="primary-header"><header>
        <aside className="primary-aside"></aside>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

class SearchLayout extends Component{
  render(){
    return (
        <div className="search">
          <header className="search-header"></header>
          <div className="results">
            {this.props.children}
          </div>
          <div className="search-footer pagination"></div>
        </div>
      );
  }
}

class UserList extends Component{
  render(){
    return(
      <ul className="user-list">
        <li>Dan</li>
        <li>Ryan</li>
        <li>Michael</li>
      </ul>
    );
  }
}

ReactDOM.render((
    <Router>
      <Route path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/widgets" component={Widgets} />
    </Router>
), document.getElementById('root'));
