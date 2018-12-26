import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
            class="consultant-list-item"
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
      <p>
        <button onClick={this.listConsultants('consultants')}>
          {loading ? 'Loading...' : 'Get Consultants'}
        </button>
        <br />
        <ul class="consultant-list">{list}</ul>
      </p>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <LambdaDemo />
        </header>
      </div>
    );
  }
}

export default App;
