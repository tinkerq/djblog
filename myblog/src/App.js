import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


function Article({article}) {
  return <div style={{
    display: "inline-block",
    width: '50%',
    verticalAlign: 'top',
    border: "2px solid black",
    boxSizing: "border-box"
  }}>
    <h1>{article.title}</h1>
    <p>{article.body.substr(0, 100)}...</p>
    <Link to={"/article/" + article.id}>read more</Link>
  </div>

}
function App({articles}) {
  return <Router>
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h2>Welcome to My Blog</h2>
    </div>
    <Link to="/article/new">Create a new article</Link>
    <switch>

    </switch>
    }
    export default App;
