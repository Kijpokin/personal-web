import React from 'react'
import { Route } from 'react-router-dom'
import Profile from '../../components/Profile'
import Experience from '../../components/Experience'
import Project from '../../components/Project'
import Acheivement from '../../components/Acheivements'
import MainLayout from '../../components/MainLayout'

const Main = () => {
  return (
    <MainLayout>
      <Route path="/profile" component={Profile} />
      <Route path="/experience" component={Experience} />
      <Route path="/project" component={Project} />
      <Route path="/achievement" component={Acheivement} />
    </MainLayout>
  )
}

export default Main
