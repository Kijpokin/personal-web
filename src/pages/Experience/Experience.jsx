import React from 'react'
import styled from 'styled-components'

import {
  WorksWrapper,
  ProjectsWrapper,
  Wrapper,
  ProfileTitle,
  BoxItem,
  BoxItemHeader,
  BoxDetails,
  BoxDetailsDate,
  BoxSubDetails,
  Title,
  ProjectTitle,
  Link,
} from './Experience.styled'
import { EXPERIENCE_CONFIGS } from './const'

const renderBoxItem = ({ position, link, company, details, date }) => (
  <BoxItem key={date}>
    <BoxItemHeader>
      {position} {link && <Link href={link}>Link</Link>}
    </BoxItemHeader>
    <BoxDetails>
      {company} <BoxDetailsDate>{date}</BoxDetailsDate>
      <BoxSubDetails> {details}</BoxSubDetails>
    </BoxDetails>
  </BoxItem>
)

const worksItems = EXPERIENCE_CONFIGS.works.map(renderBoxItem)
const projectsItems = EXPERIENCE_CONFIGS.projects.map(renderBoxItem)
const volunteersItems = EXPERIENCE_CONFIGS.volunteers.map(renderBoxItem)

const Experience = () => {
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
