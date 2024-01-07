// import logo from './logo.svg';
import './App.css';
// import VeryEasy from './components/veryEasy'
import BasicInfo from './components/medium2'

import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [{
        name: 'nicole calihua',
        dob: '08/28/2004',
        number: '704-763-3840'
      },
      {
        name: 'jimena hernandez',
        dob: '06/18/2002',
        number: '704-663-3231'
      },
      {
        name: 'alex hernandez',
        dob: '12/16/2005',
        number: '704-329-3729'
      }]
    };
  }
  render() {
    return (
      <div class="personInfoContent">
        {this.state.person.map((person, position) => (
          <BasicInfo key={position} person={person}></BasicInfo>
        ))}

      </div>
    )
  }
}

export default App;