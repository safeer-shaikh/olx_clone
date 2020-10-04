import React from 'react';
import './App.css';
import Header from './components/Header'
import SubHeader from './components/SubHeader'
import Banner from './components/Banner'

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <SubHeader />
        <Banner />
      </div>
    )
  }
}

export default App;
