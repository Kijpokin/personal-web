import React from 'react'
import Cake from '../../assets/outline-cake-24px.svg'
import Mail from '../../assets/outline-mail-24px.svg'
import Github from '../../assets/github-sign.svg.svg'
import Facebook from '../../assets/facebook.svg'
import LinkedIn from '../../assets/linkedin-logo.svg'

import {
  ContactDetails,
  ContactWrapper,
  OptionLinkItem,
  OptionLinkWrapper,
  ProfileDetails,
  ProfileImageWrapper,
  ProfileSubDetails,
  ProfileSubTitle,
  ProfileTitle,
  ProfileWrapper,
  SkillsBox,
  SkillsFlexWrap,
  SkillsTag,
  SkillsTagWrapper,
  SkillsTitle,
  SkillsWrapper,
  SubDetailsIcon,
  TimelineCompanyDetails,
  TimelineDetails,
  TimelineItem,
  TimelineItemHeader,
  TimelineWrapper,
  Title,
  Wrapper,
} from './Profile.styled'
import { PROFILE_CONFIGS } from './const'

const renderSkillTag = (item) => <SkillsTag key={item}>{item}</SkillsTag>

const programmingLangugesTags = PROFILE_CONFIGS.programmingLanguages.map(renderSkillTag)
const webDevelopmentsTags = PROFILE_CONFIGS.webDevelopments.map(renderSkillTag)
const mobileDevelopmentsTags = PROFILE_CONFIGS.mobileDevelopments.map(renderSkillTag)
const languagesTags = PROFILE_CONFIGS.languages.map(renderSkillTag)

const timelines = PROFILE_CONFIGS.educations.reverse().map(({ date, company, details }) => (
  <TimelineItem key={date}>
    <TimelineItemHeader>{date}</TimelineItemHeader>
    <TimelineDetails>
      {company}
      <TimelineCompanyDetails> {details} </TimelineCompanyDetails>
    </TimelineDetails>
  </TimelineItem>
))

const Profile = () => {
  return (
    <Wrapper>
      <Title>About me</Title>
      <ProfileWrapper>
        <ProfileImageWrapper />
        <ProfileDetails>
          <ProfileTitle>Kijpokin Ngamsomsakskul </ProfileTitle>
          <ProfileSubTitle>Software Engineer</ProfileSubTitle>
          <ProfileSubDetails>
            Active on learning, passionate to create high-quality product for users and also hands-on experience in
            programming
          </ProfileSubDetails>
          <OptionLinkWrapper>
            <OptionLinkItem>
              <SubDetailsIcon
                cursor
                src={Facebook}
                onClick={() => window.open('https://www.facebook.com/mackunz.mac')}
              />
            </OptionLinkItem>
            <OptionLinkItem>
              <SubDetailsIcon
                cursor
                src={LinkedIn}
                onClick={() => window.open('https://www.linkedin.com/in/kijpokin/')}
              />
            </OptionLinkItem>
            <OptionLinkItem>
              <SubDetailsIcon cursor src={Github} onClick={() => window.open('https://github.com/Kijpokin')} />
            </OptionLinkItem>
          </OptionLinkWrapper>
        </ProfileDetails>
      </ProfileWrapper>

      <Title> Contact </Title>
      <ContactWrapper>
        <ContactDetails>
          <SubDetailsIcon src={Cake} /> 11 Oct 1996
        </ContactDetails>
        <ContactDetails>
          <SubDetailsIcon src={Mail} /> kijpokin.nga@hotmail.com
        </ContactDetails>
      </ContactWrapper>
      <Title> Skills </Title>
      <SkillsFlexWrap>
        <SkillsWrapper>
          <SkillsBox height={'100%'}>
            <SkillsTitle>Programming Languages</SkillsTitle>
            <SkillsTagWrapper>{programmingLangugesTags}</SkillsTagWrapper>
          </SkillsBox>
        </SkillsWrapper>
        <SkillsWrapper>
          <SkillsBox>
            <SkillsTitle>Web Development</SkillsTitle>
            <SkillsTagWrapper>{webDevelopmentsTags}</SkillsTagWrapper>
          </SkillsBox>
          <SkillsBox margin={'25px 0 0 0'}>
            <SkillsTitle>Mobile Development</SkillsTitle>
            <SkillsTagWrapper>{mobileDevelopmentsTags}</SkillsTagWrapper>
          </SkillsBox>
        </SkillsWrapper>
      </SkillsFlexWrap>
      <SkillsFlexWrap margin={'25px 0 0 0'}>
        <SkillsBox width={'100%'}>
          <SkillsTitle>Languages</SkillsTitle>
          <SkillsTagWrapper>{languagesTags}</SkillsTagWrapper>
        </SkillsBox>
      </SkillsFlexWrap>
      <Title> Education </Title>
      <TimelineWrapper>{timelines}</TimelineWrapper>
    </Wrapper>
  )
}

export default Profile
