import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Header from './components-default/header';
import HomePage from './routes/home/home';
import TaskAppReducer from './routes/task-app-reducer/task-app-reducer';
import TaskAppContext from './routes/task-app-context/task-app-context';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/task-app-reducer" element={<TaskAppReducer />} />
          <Route path="/task-app-context" element={<TaskAppContext />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
