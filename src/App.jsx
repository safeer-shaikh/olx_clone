import React from 'react';
import './App.css';
// import firebase from './config/firebase'
import AppRouter from './config/Router'

class App extends React.Component{
  render(){
    return(
      <div>
        <AppRouter />
      </div>
    )
  }
}
export default App;
