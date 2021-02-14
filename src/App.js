import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from "./Footer";
import SearchPage from "./SearchPage";

import { BrowserRouter as Router, Switch, Route }
from "react-router-dom";

function App() {
  return (
    // BEM
    <div className="app">
    <Router>

      <Header /> {/*always*/}

      <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/">
            <Home />
          </Route> {/* Keep your default route at the last, If any other route doesn't matches, It will render this at last*/}

      </Switch>

      <Footer /> {/*always*/}

      </Router>
      {/* Home */}
        {/* Header */}

        {/* Banner */}
          {/* Search */}

        {/* Cards */}

        {/* Footer */}

      {/* Search Page*/}
        {/* Header */}
        {/* ... */ }

    </div>
  );
}

export default App;
