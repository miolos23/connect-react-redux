import React from 'react';
import './App.css';
import NewAccounts from './components/NewAccounts';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NewAccounts />
      </div>
    </Provider>
  );
}

export default App;
