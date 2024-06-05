import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  render() 
  {
    return (
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<News key="general" pageSize={6} country="us" category="general" />} />
            <Route path="/sports" element={<News key="sports" pageSize={6} country="us" category="sports" />} />
            <Route path="/entertainment" element={<News key="entertaintment" pageSize={6} country="us" category="entertainment" />} />
            <Route path="/health" element={<News key="health" pageSize={6} country="us" category="health" />} />
            <Route path="/science" element={<News key="science" pageSize={6} country="us" category="science" />} />
            <Route path="/technology" element={<News key="technology" pageSize={6} country="us" category="technology" />} />
            <Route path="/business" element={<News key="business" pageSize={6} country="us" category="business" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
