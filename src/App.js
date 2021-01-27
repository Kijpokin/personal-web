import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Intro from './pages/Intro'
import Main from './pages/Main'

const App = () => {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route component={Main} />
      </Switch>
    </Router>
  )
}

export default App
