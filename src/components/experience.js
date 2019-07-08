import React from 'react'
import { Wrapper, Title as profileTitle } from './profile'
import styled from 'styled-components'

const WorksWrapper = styled.div``

const ProjectsWrapper = styled.div``

const BoxItem = styled.div`
  padding: 1rem 1.5rem 2rem;
  position: relative;
  color: rgba(0, 0, 0, 0.7);
  border: 2px solid #f5f5f5;

  &:before {
    display: block;
    content: '';
    position: absolute;
    top: -6px;
    left: 0;
    width: 100%;
    height: 5px;
    background: black;
    background-image: linear-gradient(to right, #363636, #bcbcbc);
  }

  &:not(:last-child) {
    margin-bottom: 40px;
  }
`

const BoxItemHeader = styled.div`
  margin-bottom: 1.5rem;
  font-size: 125%;
  font-weight: 600;
`

const BoxDetails = styled.div`
  line-height: 1.55;
  font-weight: 600;
`

const BoxDetailsDate = styled.span`
  font-weight: normal;
  font-size: 60%;
`

const BoxSubDetails = styled.div`
  font-size: 90%;
  font-weight: normal;
`

const Title = profileTitle.extend`
  margin-bottom: 20px;
`

const ProjectTitle = Title.extend`
  margin-top: 3.5rem;
`

export const Experience = () => {
  const works = [
    {
      position: 'Front-End Developer Intern',
      company: 'Dek-D Interactive Co.,ltd.',
      date: 'June 2018 - July 2018',
      details: `Develop UI/UX and implement new design on Dek-D's Board and back-end development using GraphQL API.
      Also work on Dek-D's School front-end development using React.`
    },
    {
      position: 'Microsoft Student Partner (Technical Evangelist)',
      company: 'Microsoft Thailand',
      date: 'July 2017 - June 2018',
      details:
        'An educational program for student, Organize event and workshop, Coordinate with Microsoft Thailand and the university'
    }
  ]

  const projects = [
    {
      position: 'FillFeels',
      date: 'January 2019 - May 2019',
      // company: ''
      details: `Full-Stack Development, FillFeels Tracking and take care express your feel by color. using React, Firebase`
    },
    {
      position: 'Histolearn',
      date: 'June 2018 - October 2018',
      company: 'UNESCO',
      details:
        'Full-Stack Development, A new way to learn history via Augmented Reality(AR) and real-time website classroom. using React, Firebase, NodeJs '
    },
    {
      position: 'Mobile banking',
      // company: 'Confidential',
      date: 'June 2017 - January 2018',
      details: `Develop Front-end application implement new design on Ios & Android and maintenance over 2.0 millions users using Ionic3.`
    },
    {
      position: 'Computer Engineering MIS',
      company: 'Innosoft KMUTT',
      date: 'June 2016 - July 2017',
      details:
        'Full-stack development and design, web application for manage information in department using PHP.'
    }
  ]

  const volunteers = [
    {
      position: 'Coach, Co-Ordinator',
      company: 'Robot Kids Workshop Camp, Nakhon Ratchasima',
      date: 'January 2016',
      details: `Volunteered to plan and teach a robot programming course for 50+ high school students., Coached and encouraged students to train for the Robot and Programming.`
    }
  ]

  const getBox = item => (
    <BoxItem>
      <BoxItemHeader> {item.position} </BoxItemHeader>
      <BoxDetails>
        {item.company} <BoxDetailsDate>{item.date}</BoxDetailsDate>
        <BoxSubDetails> {item.details}</BoxSubDetails>
      </BoxDetails>
    </BoxItem>
  )

  const worksItems = works.map(item => getBox(item))
  const projectsItems = projects.map(item => getBox(item))
  const volunteersItems = volunteers.map(item => getBox(item))

  return (
    <Wrapper>
      <Title> Work Experience </Title>
      <WorksWrapper>{worksItems}</WorksWrapper>

      <ProjectTitle> Project Experience </ProjectTitle>
      <ProjectsWrapper>{projectsItems}</ProjectsWrapper>

      <ProjectTitle> Volunteer Experience </ProjectTitle>
      <WorksWrapper>{volunteersItems}</WorksWrapper>
    </Wrapper>
  )
}

export default Experience
