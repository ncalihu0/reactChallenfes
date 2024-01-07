import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {

            }
        };
    }
    render() {
        return (
            <div>
                <p>name: nicole calihua</p>
                <p>number: 704-763-3840</p>
                <p>DOB: 08/28/2004</p>
            </div>
        )
    }
}

export default App;