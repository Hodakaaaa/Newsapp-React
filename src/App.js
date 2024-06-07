import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={6} country="us" category="general" badgeColor="bg-primary" />} />
          <Route path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={6} country="us" category="sports" badgeColor="bg-success" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={6} country="us" category="entertainment" badgeColor="bg-warning" />} />
          <Route path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={6} country="us" category="health" badgeColor="bg-danger" />} />
          <Route path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={6} country="us" category="science" badgeColor="bg-info" />} />
          <Route path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={6} country="us" category="technology" badgeColor="bg-secondary" />} />
          <Route path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={6} country="us" category="business" badgeColor="bg-dark" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
