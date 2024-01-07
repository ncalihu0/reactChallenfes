import React, { Component } from 'react'
import BasicInfo from './medium2'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                name: 'nicole calihua',
                dob: '08/28/2004',
                number: '704-763-3840'
            }
        };
    }
    render() {
        return (
            <div>
                <BasicInfo person={this.state.person}></BasicInfo>
            </div>
        )
    }
}

export default App;