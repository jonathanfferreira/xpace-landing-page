import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { CompanyHome } from './src/pages/CompanyHome';
import { Escola } from './src/pages/Escola';
import { DanceCompany } from './src/pages/DanceCompany';
import { Xtage } from './src/pages/Xtage';
import { Privacy } from './src/pages/Privacy';
import './index.css';

// Preserve campaign parameters and section links on legacy school URLs.
const LegacyRedirect: React.FC<{ to: string }> = ({ to }) => {
  const { search, hash } = useLocation();
  return <Navigate to={{ pathname: to, search, hash }} replace />;
};

const RouteScroll: React.FC = () => {
  const { pathname, hash } = useLocation();
  React.useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <RouteScroll />
      <Routes>
        <Route path="/" element={<CompanyHome />} />
        <Route path="/dance" element={<Escola />} />
        <Route path="/dance/company" element={<DanceCompany />} />
        <Route path="/xtage" element={<Xtage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/escola" element={<LegacyRedirect to="/dance" />} />
        <Route path="/company" element={<LegacyRedirect to="/dance/company" />} />
      </Routes>
    </Router>
  );
};

export default App;
