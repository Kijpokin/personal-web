import styled, { keyframes } from 'styled-components'
import ProfilePic from '../../assets/profile.jpg'

export const ProfileImageWrapper = styled.div`
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

export const ProfileDetails = styled.span`
  margin-left: 25px;
  line-height: 1.75;

  @media (max-width: 768px) {
    line-height: 1.25;
    margin-left: 0;
  }
`

export const ProfileTitle = styled.div`
  font-size: 28px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 10px;
    margin-top: 20px;
  }
`

export const ProfileSubTitle = styled.div`
  font-size: 18px;
`

export const ProfileSubDetails = styled.div`
  font-size: 16px;
  line-height: 1.5;
  margin-top: 25px;
`

export const ProfileWrapper = styled.div`
  display: flex;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
    flex-wrap: wrap;
  }
`

export const TextAnimationFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 15px, 0);
  }

  to {
    opacity: 1;
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

export const SubDetailsIcon = styled.img`
  vertical-align: text-bottom;

  max-width: 24px;
  max-height: 24px;
  // margin-right: 5px;

  ${(props) => (props.cursor ? 'cursor: pointer' : '')};
`

export const ContactDetails = styled.div`
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

export const ContactWrapper = styled.div`
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

export const SkillsFlexWrap = styled.div`
  display: flex;
  flex: 1;
  padding: 0 1.5rem;
  margin: ${(props) => props.margin};

  @media (max-width: 768px) {
    padding: 0 0.5rem;
    flex-wrap: wrap;
  }
`

export const SkillsWrapper = styled.div`
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

export const SkillsBox = styled.div`
  background: #f5f5f5;
  padding: 1.25em 1.5em 1.25em;
  border-radius: 5px;
  margin: ${(props) => props.margin};
  box-sizing: border-box;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
`

export const SkillsTitle = styled.span`
  font-weight: 600;
  font-size: 110%;
  color: #363636;
`

export const SkillsTagWrapper = styled.div`
  margin-top: 25px;
`

export const SkillsTag = styled.div`
  display: inline-block;
  vertical-align: top;

  font-size: 75%;
  margin: 0 8px 8px 0;
  padding: 8px 12px;
  background: #363636;
  color: #f5f5f5;
  border-radius: 10px;
`

export const TimelineWrapper = styled.div``

export const TimelineItem = styled.div`
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

export const TimelineItemHeader = styled.div`
  margin-bottom: 1rem;
  font-size: 90%;
  font-weight: 600;
`

export const TimelineDetails = styled.div`
  line-height: 1.55;
  font-weight: 600;
`

export const TimelineCompanyDetails = styled.div`
  font-size: 90%;
  font-weight: normal;
`

export const OptionLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

export const OptionLinkItem = styled.div`
  width: 24px;
  height: 24px;
  &:not(:last-child) {
    margin-right: 5px;
  }
`
