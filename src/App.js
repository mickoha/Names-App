import './App.css';
import {useEffect} from 'react'

import {Provider} from 'react-redux';
import store from './store'

import Names from './Components/Names/Names'

import {loadNames} from './services/names'


function App() {
  useEffect(() => {
    store.dispatch(loadNames())
  }, []);
  
  return (
    <Provider store={store}>
      <Names />
    </Provider>
    
  );
}

export default App;
