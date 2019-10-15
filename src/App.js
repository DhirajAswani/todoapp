import React from 'react';
import logo from './img16.jpg';
import './App.css';
import { functionExpression, directive } from '@babel/types';

function App(){
  return (
    <div className = "App">
      <header className = "App-Header">
        <img src = {logo} className = "App-logo"/>
      </header>
      <h1> Hello World </h1>
      <p> Working with React</p>

    </div>
  );
}

export default App;
