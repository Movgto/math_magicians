import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route, Routes, BrowserRouter, NavLink,
} from 'react-router-dom';
import App from './App';
import Quotes from './components/Quotes';
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <nav>
        <ul>
          <li><NavLink className="link" to="/">Home</NavLink></li>
          <li><NavLink className="link" to="/calculator">Calculator</NavLink></li>
          <li><NavLink className="link" to="/quote">Quote</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/calculator" element={<App />} />
          <Route path="/quote" element={<Quotes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
