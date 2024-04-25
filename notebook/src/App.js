import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import HomePage from './routes/home/home';
import NewPage from './routes/new-page/new-page';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/new-page" element={<NewPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
