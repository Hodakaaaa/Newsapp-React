import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  }

  render() {
    return (
      <Router>
        <LoadingBar
          height = {3}
          color='#f11946'
          progress={this.state.progress}
        />
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} key="general" pageSize={6} country="us" category="general" badgeColor="bg-primary" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={6} country="us" category="sports" badgeColor="bg-success" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={6} country="us" category="entertainment" badgeColor="bg-warning" />} />
            <Route path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={6} country="us" category="health" badgeColor="bg-danger" />} />
            <Route path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={6} country="us" category="science" badgeColor="bg-info" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={6} country="us" category="technology" badgeColor="bg-secondary" />} />
            <Route path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={6} country="us" category="business" badgeColor="bg-dark" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
