import React from 'react'
import { Route } from 'react-router-dom'

import MainLayout from '../../components/MainLayout'
import Experience from '../Experience'
import Profile from '../Profile'
import Projects from '../Projects'
import Activities from '../Activities'
import Resume from '../Resume'

const Main = () => {
  return (
    <MainLayout>
      <Route path="/profile" component={Profile} />
      <Route path="/experience" component={Experience} />
      <Route path="/project" component={Projects} />
      <Route path="/activities" component={Activities} />
      <Route path="/resume" component={Resume} />
    </MainLayout>
  )
}

export default Main
