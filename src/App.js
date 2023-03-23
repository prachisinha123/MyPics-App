
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import Pics from './components/Pics';

export default class App extends Component {
  render() {
    return (
      <div>
       <NavBar/>
       <Pics/>
       
      </div>
    )
  }
}

