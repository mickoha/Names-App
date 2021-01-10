import './App.css';
import {useEffect} from 'react'

import {Provider} from 'react-redux';
import store from './store'

import FinderBanner from './Components/FinderBanner'
import Names from './Components/Names/Names'
import Header from './Components/Header'

import {loadNames} from './services/names'


function App() {
  useEffect(() => {
    store.dispatch(loadNames())
  }, []);
  
  return (
    <Provider store={store}>
      <Header />
      <FinderBanner />
      <Names />
    </Provider>
    
  );
}

export default App;
