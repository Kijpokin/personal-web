import React from 'react'

import {
  WorksWrapper,
  ProjectsWrapper,
  Wrapper,
  BoxItem,
  BoxItemHeader,
  BoxDetails,
  BoxDetailsDate,
  BoxSubDetails,
  Title,
  ProjectTitle,
  Link,
  ImgLogo,
} from './Experience.styled'
import { EXPERIENCE_CONFIGS } from './const'

const renderBoxItem = ({ src, position, link, company, details, date }) => (
  <BoxItem key={date}>
    <BoxItemHeader>
      {position} {link && <Link href={link}>Link</Link>}
    </BoxItemHeader>
    {src && <ImgLogo src={src} />}
    <BoxDetails>
      {company} <BoxDetailsDate>{date}</BoxDetailsDate>
      <BoxSubDetails dangerouslySetInnerHTML={{ __html: details }} />
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
