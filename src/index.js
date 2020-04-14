import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { CalcController } from './CalcController';

const App = () => {
  return <CalcController />;
};

ReactDOM.render(<App />, document.getElementById('root'));
