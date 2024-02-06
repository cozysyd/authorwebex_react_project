import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import SeriesOne from './Pages/SeriesOne';
import ReleaseDate from './Pages/ReleaseDate';

function App() {
  let component
    switch (window.location.pathname) {
      case "/Home":
        component = <Home />;
        break;
      case "/about":
        component = <About />;
        break;
      case "/seriesone":
        component = <SeriesOne />;
        break;
      case "/releasedate":
        component = <ReleaseDate />;
        break;
      default: 
        component = <Home />;
        break;
    }
  return (
    <div>
      <NavBar />
      {component}
    </div> 
  );
}

export default App;
