import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Home from './ParenttoChild/Home';
import About from './ParenttoChild/About';
import SeriesOne from './ParenttoChild/SeriesOne';
import ReleaseDate from './ParenttoChild/ReleaseDate';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Link to="/other">Go to Other Component</Link>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/seriesone" component={SeriesOne} />
        <Route path="/releasedate" component={ReleaseDate} />
      </Router>
      <NavBar />
    </div>
  );
}

export default App;
