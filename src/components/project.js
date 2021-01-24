import React from 'react'
import { Wrapper, Title as profileTitle } from './profile'
import styled from 'styled-components'
import SmartWhaleImg from '../assets/projects/smart-whale.jpg'
import EasiEatImg from '../assets/projects/easieat.jpg'
import CssChallengeImg from '../assets/projects/css-challenge.jpg'

const BoxItem = styled.div`
  padding: 1rem 1.5rem 2rem;
  position: relative;
  color: rgba(0, 0, 0, 0.7);
`

const BoxWrapper = styled.div`
  border: 2px solid #f5f5f5;

  &:not(:last-child) {
    margin-bottom: 40px;
  }
`

const Title = profileTitle.extend`
  margin-bottom: 20px;
`

const Image = styled.img`
  //og 0.375
  height: 225px;
  width: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 175px;
  }
`

const BoxItemHeader = styled.div`
  margin-bottom: 1.5rem;
  font-size: 125%;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
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

const Link = styled.a`
  font-size: 0.75em;
  cursor: pointer;
  color: #666;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const Project = () => {
  const projects = [
    {
      src: CssChallengeImg,
      position: 'Css Challenge',
      date: 'Augsut 2019 - January 2020',
      details:
        'Create new things using css (eg. 3d Cube, bouncing ball animation) every months',
      link: 'https://modest-lichterman-82e8af.netlify.com/'
    },
    {
      src: EasiEatImg,
      position: 'Easieat',
      company: 'Senior project',
      date: 'August 2018 - May 2019',
      details: `Easieat - Platform restaurant assistant system with website and mobile application, To improve the efficient restaurant service model and create the possible maximum satisfaction for customers. which are the queue management system, food ordering, restaurant management system.`
    },
    {
      src: SmartWhaleImg,
      position: 'SmartWhale',
      company: 'Computer Exploration',
      date: 'October 2015',
      details: `SmartWhale - Mobile Application Project This application is a game application on smart phone in IOS platform and android platfrom by using engine name 'UNITY'. Inside this game it have many mini game for appeal to player with various games.`
    }
  ]

  const getBox = item => (
    <BoxWrapper>
      <Image src={item.src} />
      <BoxItem>
        <BoxItemHeader>
          {item.position} {item.link && <Link href={item.link} target="blank">Link</Link>}
        </BoxItemHeader>
        <BoxDetails>
          {item.company} <BoxDetailsDate>{item.date}</BoxDetailsDate>
          <BoxSubDetails> {item.details}</BoxSubDetails>
        </BoxDetails>
      </BoxItem>
    </BoxWrapper>
  )

  const projectsItems = projects.map(item => getBox(item))

  return (
    <Wrapper>
      <Title>Projects</Title>
      {projectsItems}
    </Wrapper>
  )
}

export default Project
