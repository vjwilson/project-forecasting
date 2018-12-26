import React, { Component } from 'react';
import './App.css';

import AppHeader from './components/AppHeader/AppHeader';

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, list: null };
  }

  listConsultants = api => e => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch('/.netlify/functions/' + api)
      .then(response => response.json())
      .then(json => {
        const list = json.msg.map(person => (
          <li
            className="consultant-list-item"
            key={person.email}
          >
            <span>{person.firstName} {person.lastName}</span>
            <span>
              {person.title}
              {person.specialty && <span>, {person.specialty}</span>}
            </span>
          </li>
        ));

        this.setState({ loading: false, list })
      });

  }

  render() {
    const { loading, list } = this.state;

    return (
      <div>
        <button onClick={this.listConsultants('consultants')}>
          {loading ? 'Loading...' : 'Get Consultants'}
        </button>
        <br />
        <ul className="consultant-list">{list}</ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <LambdaDemo />
      </div>
    );
  }
}

export default App;
