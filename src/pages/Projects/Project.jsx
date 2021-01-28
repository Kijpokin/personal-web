import React from 'react'
import {
  BoxDetails,
  BoxDetailsDate,
  BoxItem,
  BoxItemHeader,
  BoxSubDetails,
  BoxWrapper,
  Image,
  Link,
  Title,
  Wrapper,
} from './Project.styled'
import { PROJECT_CONFIGS } from './const'

const renderProject = ({ src, position, link, date, company, details }) => (
  <BoxWrapper key={date}>
    <Image src={src} />
    <BoxItem>
      <BoxItemHeader>
        {position}{' '}
        {link && (
          <Link href={link} target="blank">
            Link
          </Link>
        )}
      </BoxItemHeader>
      <BoxDetails>
        {company} <BoxDetailsDate>{date}</BoxDetailsDate>
        <BoxSubDetails> {details}</BoxSubDetails>
      </BoxDetails>
    </BoxItem>
  </BoxWrapper>
)

const projectsItems = PROJECT_CONFIGS.projects.map(renderProject)

export const Project = () => {
  return (
    <Wrapper>
      <Title>Projects</Title>
      {projectsItems}
    </Wrapper>
  )
}

export default Project
