import React from 'react';
import './App.css';
import Header from './components/Header'
import SubHeader from './components/SubHeader'
import Banner from './components/Banner'
import Body from './components/Body'
import Items from './components/Items'
import SubBanner from './components/SubBanner'
import SubFooter from './components/SubFooter'
import Footer from './components/Footer'

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <SubHeader />
        <Banner />
        <Body />
        <SubBanner />
        <SubFooter />
        <Footer />
      </div>
    )
  }
}

export default App;
