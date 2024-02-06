import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SeriesList from './ParenttoChild/SeriesList';
import ReleaseDate from './ParenttoChild/ProgressBar';

function App() {
  return (
    <div>
      <SeriesList />

      <hr />

      <ReleaseDate />
    </div>
  );
}

export default App;
