import React from 'react';
import './App.css';
import Header from './components/Header'
import SubHeader from './components/SubHeader'

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <SubHeader />
      </div>
    )
  }
}

export default App;
