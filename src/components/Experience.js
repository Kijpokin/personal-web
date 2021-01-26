import React from 'react'
import { Wrapper, Title as profileTitle } from './Profile'
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
  display: flex;
  justify-content: space-between;
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

const Link = styled.a`
  font-size: 0.75em;
  cursor: pointer;
  color: #666;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const Experience = () => {
  const works = [
    {
      position: 'Full-stack Developer',
      company: '7peakssoftware',
      date: 'November 2019 - Now',
      details: 'Design and build advanced applications using React and Node.js'
    },
    {
      position: 'Software Developer',
      company: 'Empyrean Solutions - APAC',
      date: 'June 2019 - October 2019',
      details:
        'Front-end development and research new things to apply in teams using React, GraphQL'
    },
    {
      position: 'Full-stack Developer Part-time',
      company: 'Focal Solutions',
      date: 'January 2019 - May 2019',
      details:
        'Develop website with automation testing and CI/CD using React, Docker, Jenkins'
    },
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
      details: `Full-Stack Development, FillFeels Tracking and take care express your feel by color. using React, Firebase`,
      link: 'https://fillfeels.com'
    },
    {
      position: 'Histolearn',
      date: 'June 2018 - October 2018',
      company: 'UNESCO',
      details:
        'Full-Stack Development, A new way to learn history via Augmented Reality(AR) and real-time website classroom. using React, Firebase, NodeJs ',
      link: 'https://histolearn-unesco.web.app/'
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

  const renderBoxItem = item => (
    <BoxItem>
      <BoxItemHeader>
        {item.position} {item.link && <Link href={item.link}>Link</Link>}
      </BoxItemHeader>
      <BoxDetails>
        {item.company} <BoxDetailsDate>{item.date}</BoxDetailsDate>
        <BoxSubDetails> {item.details}</BoxSubDetails>
      </BoxDetails>
    </BoxItem>
  )

  const worksItems = works.map(item => renderBoxItem(item))
  const projectsItems = projects.map(item => renderBoxItem(item))
  const volunteersItems = volunteers.map(item => renderBoxItem(item))

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
