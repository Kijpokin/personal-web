import React from 'react'
import {
  BoxDetails,
  BoxDetailsDate,
  BoxItem,
  BoxItemHeader,
  BoxSubDetails,
  BoxWrapper,
  Image,
  Title,
  Wrapper,
} from './Activities.styled'
import { ACTIVITIES_CONFIGS } from './const'

const renderActivity = ({ src, position, date, company, details }) => (
  <BoxWrapper key={date}>
    <Image src={src} />
    <BoxItem>
      <BoxItemHeader> {position} </BoxItemHeader>
      <BoxDetails>
        {company} <BoxDetailsDate>{date}</BoxDetailsDate>
        <BoxSubDetails> {details}</BoxSubDetails>
      </BoxDetails>
    </BoxItem>
  </BoxWrapper>
)

const activityItems = ACTIVITIES_CONFIGS.activities.map(renderActivity)

export const Activities = () => {
  return (
    <Wrapper>
      <Title> Activities </Title>
      {activityItems}
    </Wrapper>
  )
}

export default Activities
