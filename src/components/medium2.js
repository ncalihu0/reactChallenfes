import React, { Component } from 'react'

export default class BasicInfo extends Component {
    render() {
        return (
            <div class="personInfo">
                <p>name: {this.props.person.name}</p>
                <p>number: {this.props.person.number}</p>
                <p>DOB: {this.props.person.dob}</p>
            </div>
        )

    }
}


