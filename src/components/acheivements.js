import React from 'react'
import { Wrapper, Title as profileTitle } from './profile'
import styled from 'styled-components'
import Img1 from '../assets/1.jpg'
import Img2 from '../assets/2.jpg'

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
  height: 375px;
  width: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 250px;
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

export const Archeivement = () => {
  const archeivement = [
    {
      src: Img1,
      position: 'Final Round Programming Contest',
      company: 'CodeHew Hackathon',
      date: 'January 2016',
      details:
        'The winner in activities and 13th rank of Total team, sponsored by Wongnai and Association Programming Thailand'
    },
    {
      src: Img2,
      position: 'Participate The Tenth Thailand Olympiad in Informatics',
      company: 'Ubonratchathani University',
      date: 'May 2014',
      details: `The Computer Olympics Contest (POSN) The details of the camp is studying about Data Structure and Algorithm Design for competitive programming.`
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

  const archeivementItems = archeivement.map(item => getBox(item))

  return (
    <Wrapper>
      <Title> Archievements </Title>
      {archeivementItems}
    </Wrapper>
  )
}

export default Archeivement
