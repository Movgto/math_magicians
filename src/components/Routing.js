import {
  Route, Routes, HashRouter, NavLink,
} from 'react-router-dom';
import App from '../App';
import Quotes from './Quotes';
import Home from './Home';

const apiKey = "aSn23Z2Z26ES8eaiczrw2w==SHUDji9fSQZwMG1g";

const Routing = () => (
  <>
    <HashRouter>
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
          <Route path="/quote" element={<Quotes apiKey={apiKey} data-testid="quotes" />} />
        </Route>
      </Routes>
    </HashRouter>
  </>
);

export default Routing;