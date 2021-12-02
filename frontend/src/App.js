import React from 'react'
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
import NavBar from './components/NavBar.js'
import CarIndex from './components/CarIndex.js'
import CarPage from './components/CarPage.js'
import Footer from './components/Footer.js'


function App() {
  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/cars') // * <-- replace with your endpoint
      console.log(res.data)
    }
    getData()
  })

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cars" component={CarIndex} />
        <Route exact path="/cars/:id" component={CarPage} />
        <h1>Hello World</h1>
      </Switch>
      <Footer />

    </BrowserRouter>
  )
    

}

export default App
