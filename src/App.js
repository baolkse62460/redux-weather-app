import React from 'react';
import './App.css';
import Weather from './container/WeatherContainer';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
}

export default App;
