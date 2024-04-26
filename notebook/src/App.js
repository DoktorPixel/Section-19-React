import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components-default/header';
import HomePage from './routes/home/home';
import TaskAppReducer from './routes/task-app-reducer/task-app-reducer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/new-page" element={<TaskAppReducer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
