import React from 'react'
import { Redirect, useLocation } from 'react-router'
import ResumeFE from '../../assets/Resume-FE.pdf'
import ResumeSE from '../../assets/Resume-SE.pdf'

const Resume = () => {
  const location = useLocation()
  let link = document.createElement('a')

  if (location.pathname === '/resume/kijpokin-FE.pdf') {
    link.href = ResumeFE

    document.body.appendChild(link)
    link.click()

    return null
  }

  if (location.pathname === '/resume/kijpokin-SE.pdf') {
    link.href = ResumeSE

    document.body.appendChild(link)
    link.click()

    return null
  }

  return <Redirect to={'/'} />
}

export default Resume
