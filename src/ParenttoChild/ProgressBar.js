import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ReleaseDate() {
  return (
    <div>
      <h1>Release Date Countdown!</h1>
      <CountdownBar />
      <footer>Follow @AuthorName for more updates!</footer>
    </div>
  );
}

function CountdownBar() {
  const now = 60;
  return <ProgressBar animated now={now} label={`${now} Days Left!`} />;
}

export default ReleaseDate;