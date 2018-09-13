import React from 'react'
import ProfilePic from '../assets/Pic027.jpg'
import styled from 'styled-components'
import Phone from '../assets/outline-phone-24px.svg'
import Cake from '../assets/outline-cake-24px.svg'
import Mail from '../assets/outline-mail-24px.svg'

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 155px;
  height: 155px;
  object-fit: cover;
`

const ProfileDetails = styled.span`
  margin-left: 25px;
  line-height: 1.75;
`

const ProfileTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
`

const ProfileSubTitle = styled.div`
  font-size: 18px;
`

const ProfileSubDetails = styled.div`
  font-size: 16px;
  line-height: 1.5;
  margin-top: 25px;
`

const ProfileWrapper = styled.div`
  display: flex;
  padding: 0 1.5rem;
`

const Wrapper = styled.div`
  padding: 1rem 2rem;
`

// const TagTitle = styled.div`
//   font-size: 28px;
//   font-weight: 600;
//   padding: 10px 0;
//   margin-bottom: 40px;

//   border-bottom: 6px solid #363636;
//   border-image: linear-gradient(to right, #363636 0%, #f5f5f5 100%) 1;

//   margin: ${props => props.margin};
// `

const SubDetailsIcon = styled.img`
  vertical-align: text-bottom;
  // margin-right: 5px;
`

const ContactDetails = styled.div`
  display: inline-block;
  &:not(last-child) {
    margin-right: 30px;
  }
`

const ContactWrapper = styled.div`
  padding: 0 1.5rem;
`

const Title = styled.h2`
  margin-top: 40px;
  margin-bottom: 15px;

  background: linear-gradient(to right, #363636 0%, #bcbcbc 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const SkillsFlexWrap = styled.div`
  display: flex;
  flex: 1;
  padding: 0 1.5rem;
  margin: ${props => props.margin};
`

const SkillsWrapper = styled.div`
  width: 50%;
  &:not(:last-child) {
    margin-right: 25px;
  }
`

const SkillsBox = styled.div`
  background: #f5f5f5;
  padding: 1.25em 1.5em 1.25em;
  border-radius: 5px;
  margin: ${props => props.margin};
  box-sizing: border-box;

  width: ${props => props.width};
  height: ${props => props.height};
`

const SkillsTitle = styled.span`
  font-weight: 600;
  font-size: 110%;
  color: #363636;
`

const SkillsTagWrapper = styled.div`
  margin-top: 25px;
`

const SkillsTag = styled.div`
  display: inline-block;
  vertical-align: top;

  font-size: 75%;
  margin: 0 8px 8px 0;
  padding: 8px 12px;
  background: #363636;
  color: #f5f5f5;
  border-radius: 10px;
`
// const LanguageSkillLine = styled.div`
//   width: 100%;
//   height: 1px;
//   background: #efefef;
//   margin: 25px 0;
// `

const TimelineWrapper = styled.div``

const TimelineItem = styled.div`
  padding: 0.75rem 1.5rem 2rem;
  position: relative;
  color: rgba(0, 0, 0, 0.7);
  border-left: 2px solid #363636;

  &:before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    background: white;
    border: 2px solid #363636;
    left: -8px;
    margin-top: 2px;
  }

  &:last-child {
    border-image: linear-gradient(to bottom, #363636 40%, white 100%) 1 100%;
  }
`

const TimelineItemHeader = styled.div`
  margin-bottom: 1rem;
  font-size: 90%;
  font-weight: 600;
`

const TimelineDetails = styled.div`
  line-height: 1.55;
  font-weight: 600;
`

const TimelineCompanyDetails = styled.div`
  font-size: 90%;
  font-weight: normal;
`

export const Profile = () => {
  const ProgrammingLanguages = [
    'C/C++',
    'Python',
    'PHP',
    'Java',
    'Javascript',
    'SQL'
  ]

  const WebDevelopments = [
    'HTML5',
    'CSS3',
    'Jquery',
    'MySQL',
    'MongoDB',
    'Laravel',
    'Angular 2+',
    'React',
    'Firebase Realtime Database'
  ]

  const MobileDevelopments = ['Ionic', 'React Native']

  const Languages = [
    'Thai - (Native)',
    'English - (Intermediate)',
    'German - (Beginner)'
  ]

  const TimelineData = [
    {
      date: '2003-2014',
      company: 'Assumption College, Bangkok, Thailand',
      details: 'High school in science and mathematics program'
    },
    {
      date: '2015-Present',
      company: `King Mongkut's University Of Technology Thonburi`,
      details: 'Bachelor degree of Computer Engineering'
    },
    {
      date: '2016-Present',
      company: 'Ramkamhaeng University',
      details: 'Bachelor degree of Business Administration'
    }
  ]

  const ProgrammingLanguagesTags = ProgrammingLanguages.map(language => (
    <SkillsTag>{language}</SkillsTag>
  ))

  const WebDevelopmentsTags = WebDevelopments.map(item => (
    <SkillsTag>{item}</SkillsTag>
  ))

  const MobileDevelopmentsTags = MobileDevelopments.map(item => (
    <SkillsTag>{item}</SkillsTag>
  ))

  const LanguagesTags = Languages.map(item => <SkillsTag>{item}</SkillsTag>)

  const Timelines = TimelineData.reverse().map(item => (
    <TimelineItem>
      <TimelineItemHeader>{item.date}</TimelineItemHeader>
      <TimelineDetails>
        {item.company}
        <TimelineCompanyDetails> {item.details} </TimelineCompanyDetails>
      </TimelineDetails>
    </TimelineItem>
  ))

  return (
    <Wrapper>
      <Title> About me </Title>
      <ProfileWrapper>
        <ProfileImg src={ProfilePic} />
        <ProfileDetails>
          <ProfileTitle>Kijpokin Ngamsomsakskul </ProfileTitle>
          <ProfileSubTitle> Front-end developer </ProfileSubTitle>
          <ProfileSubDetails>
            Active on learning, improve to work as fast as possible and also
            hands-on experience in programming.
          </ProfileSubDetails>
        </ProfileDetails>
      </ProfileWrapper>
      <Title> Contact </Title>
      <ContactWrapper>
        <ContactDetails>
          <SubDetailsIcon src={Cake} /> 11 Oct 1996
        </ContactDetails>
        <ContactDetails>
          <SubDetailsIcon src={Phone} /> 089-797-3566
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
            <SkillsTagWrapper>{ProgrammingLanguagesTags}</SkillsTagWrapper>
          </SkillsBox>
        </SkillsWrapper>
        <SkillsWrapper>
          <SkillsBox>
            <SkillsTitle>Web Development</SkillsTitle>
            <SkillsTagWrapper>{WebDevelopmentsTags}</SkillsTagWrapper>
          </SkillsBox>
          <SkillsBox margin={'25px 0 0 0'}>
            <SkillsTitle>Mobile Development</SkillsTitle>
            <SkillsTagWrapper>{MobileDevelopmentsTags}</SkillsTagWrapper>
          </SkillsBox>
        </SkillsWrapper>
      </SkillsFlexWrap>
      <SkillsFlexWrap margin={'25px 0 0 0'}>
        <SkillsBox width={'100%'}>
          <SkillsTitle>Languages</SkillsTitle>
          <SkillsTagWrapper>{LanguagesTags}</SkillsTagWrapper>
        </SkillsBox>
      </SkillsFlexWrap>
      <Title> Education </Title>
      <TimelineWrapper>{Timelines}</TimelineWrapper>
    </Wrapper>
  )
}

export default Profile
