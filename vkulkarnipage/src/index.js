import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import CardCreator from './projects/cardCreator';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(<CardCreator />, document.getElementById('card-creator-root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
