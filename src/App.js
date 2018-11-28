import React, { Component } from 'react'
import Navbar from './components/Navbar';
import AddCol from './components/AddCol';

export default class App extends Component {

    render() {
        return (
            <Navbar>
                <AddCol></AddCol>
            </Navbar>
        );
    }
}
