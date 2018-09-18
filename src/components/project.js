import React from 'react'
import { Wrapper, Title as profileTitle } from './profile'
import styled from 'styled-components'
import SmartWhaleImg from '../assets/1-1.jpg'

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

export const Project = () => {
  const projects = [
    {
      src: SmartWhaleImg,
      position: 'SmartWhale',
      company: 'Computer Exploration',
      date: 'Octobor 2015',
      details: `SmartWhale - Mobile Application Project This application is a game application on smart phone in IOS platform and android platfrom by using engine name 'UNITY'. Inside this game it have many mini game for appeal to player with various games.`
    }
  ]

  const getBox = item => (
    <BoxWrapper>
      <Image src={item.src} />
      <BoxItem>
        <BoxItemHeader> {item.position} </BoxItemHeader>
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
      <Title> Projects </Title>
      {projectsItems}
    </Wrapper>
  )
}

export default Project
