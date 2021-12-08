import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
import NavBar from './components/NavBar.js'
import CarIndex from './components/CarIndex.js'
import CarPage from './components/CarPage.js'
import Footer from './components/Footer.js'
import ScrollToTop from './components/ScrollToTop'


function App() {
  

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {/* <ScrollToTop> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/cars" component={CarIndex} />
        <Route exact path="/cars/:id" component={CarPage} />
        {/* </ScrollToTop> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
