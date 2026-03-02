import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hub } from './src/pages/Hub';
import { Escola } from './src/pages/Escola';
import { Company } from './src/pages/Company';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path="/escola" element={<Escola />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </Router>
  );
};

export default App;