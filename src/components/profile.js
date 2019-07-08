import React from 'react'
import ProfilePic from '../assets/Pic027.jpg'
import styled from 'styled-components'
import Phone from '../assets/outline-phone-24px.svg'
import Cake from '../assets/outline-cake-24px.svg'
import Mail from '../assets/outline-mail-24px.svg'
import { keyframes } from 'styled-components'
import AttachFile from '../assets/resume.svg'
import Bitbucket from '../assets/bitbucket-sign.svg'
import Facebook from '../assets/facebook.svg'
import LinkedIn from '../assets/linkedin-logo.svg'

const ProfileImageWrapper = styled.div`
  border-radius: 50%;
  width: 155px !important;
  height: 155px !important;

  margin: auto;

  background-image: url(${ProfilePic});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  flex-shrink: 0;
`

const ProfileDetails = styled.span`
  margin-left: 25px;
  line-height: 1.75;

  @media (max-width: 768px) {
    line-height: 1.25;
    margin-left: 0;
  }
`

const ProfileTitle = styled.div`
  font-size: 28px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 10px;
    margin-top: 20px;
  }
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

  @media (max-width: 768px) {
    padding: 0 0.5rem;
    flex-wrap: wrap;
  }
`

export const TextAnimationFadeIn = keyframes`
  from {
    opacity: 0
    transform: translate3d(0, 15px, 0);
  }

  to {
    opacity: 1
    transform: translate3d(0, 0, 0);
  }
`

export const Wrapper = styled.div`
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }

  animation: ${TextAnimationFadeIn} 0.75s ease-in-out;
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

  max-width: 24px;
  max-height: 24px;
  // margin-right: 5px;

  ${props => (props.cursor ? 'cursor: pointer' : '')};
`

const ContactDetails = styled.div`
  display: inline-block;

  &:not(last-child) {
    line-height: 1.5;
    margin-right: 30px;
    width: 100%;
  }

  @media (max-width: 768px) {
    margin-right: 0 !important;
  }
`

const ContactWrapper = styled.div`
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`

export const Title = styled.h2`
  margin-top: 40px;
  margin-bottom: 15px;
  color: black;

  background: linear-gradient(to right, #363636 0%, #bcbcbc 75%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const SkillsFlexWrap = styled.div`
  display: flex;
  flex: 1;
  padding: 0 1.5rem;
  margin: ${props => props.margin};

  @media (max-width: 768px) {
    padding: 0 0.5rem;
    flex-wrap: wrap;
  }
`

const SkillsWrapper = styled.div`
  width: 50%;
  &:not(:last-child) {
    margin-right: 25px;
  }

  @media (max-width: 768px) {
    width: 100%;
    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 25px;
    }
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

const OptionLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

const OptionLinkItem = styled.div`
  width: 24px;
  height: 24px;
  &:not(:last-child) {
    margin-right: 5px;
  }
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
        <ProfileImageWrapper />
        <ProfileDetails>
          <ProfileTitle>Kijpokin Ngamsomsakskul </ProfileTitle>
          <ProfileSubTitle> Front-end developer </ProfileSubTitle>
          <ProfileSubDetails>
            Active on learning, improve to work as fast as possible and also
            hands-on experience in programming.
          </ProfileSubDetails>
          <OptionLinkWrapper>
            <OptionLinkItem>
              <SubDetailsIcon
                cursor
                src={AttachFile}
                onClick={() =>
                  window.open('https://firebasestorage.googleapis.com/v0/b/myportv2.appspot.com/o/Resume.pdf?alt=media&token=9ba1433b-b16c-4721-a35e-633433b7f526')
                }
              />
            </OptionLinkItem>
            <OptionLinkItem>
              <SubDetailsIcon
                cursor
                src={Facebook}
                onClick={() =>
                  window.open('https://www.facebook.com/mackunz.mac')
                }
              />
            </OptionLinkItem>
            <OptionLinkItem>
              <SubDetailsIcon
                cursor
                src={LinkedIn}
                onClick={() =>
                  window.open('https://www.linkedin.com/in/kijpokin/')
                }
              />
            </OptionLinkItem>
            <OptionLinkItem>
              <SubDetailsIcon
                cursor
                src={Bitbucket}
                onClick={() => window.open('https://bitbucket.org/MackieZ/')}
              />
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
