import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AddRunPage from './pages/AddRunPage';
import EditRunPage from './pages/EditRunPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-run" element={<AddRunPage />} />
          <Route path="/edit-run/:id" element={<EditRunPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;