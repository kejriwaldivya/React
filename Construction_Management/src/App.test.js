import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//it helps to write 1 individual test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
