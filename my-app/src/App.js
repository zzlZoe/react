import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import HomeHeader from './HomeHeader'

import Home from './toDoList/Home'
import Find from './toDoList/Find'
import Mine from './toDoList/Mine'

class App extends Component {
  render() {
    return (
      // 注释   标签外
      <Router>
        <div className="App">
            {/* 组件  标签内*/}  
            <HomeHeader></HomeHeader>
            
              <Route path="/Home" component={Home}></Route>
              <Route path="/Find" component={Find}></Route>
              <Route path="/Mine" component={Mine}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
