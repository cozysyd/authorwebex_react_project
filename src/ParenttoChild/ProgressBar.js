import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ReleaseDate() {
  const now = 60;
  return <ProgressBar now={now} label={`${now} Days Left!`} />;
}

export default ReleaseDate;