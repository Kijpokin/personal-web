import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Intro from './pages/Intro'
import ProfilePage from './components/Profile'
import Experience from './components/Experience'
import ProjectPage from './components/Project'
import AcheivementPage from './components/Acheivements'
import LandingPage from './components/LandingPage'

const App = () => {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route component={LandingPage} />
      </Switch>
    </Router>
  )
}

export default App
