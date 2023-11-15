import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';
import { PageNotFound } from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='*'element={<PageNotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
