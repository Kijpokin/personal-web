import styled, { keyframes } from 'styled-components'

export const TextAnimationFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export const WorksWrapper = styled.div``

export const ProjectsWrapper = styled.div``

export const Wrapper = styled.div`
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }

  animation: ${TextAnimationFadeIn} 0.75s ease-in-out;
`

export const ProfileTitle = styled.h2`
  margin-top: 40px;
  margin-bottom: 15px;
  color: black;

  background: linear-gradient(to right, #363636 0%, #bcbcbc 75%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const BoxItem = styled.div`
  padding: 1rem 1.5rem 2rem;
  position: relative;
  color: rgba(0, 0, 0, 0.7);
  border: 2px solid #f5f5f5;

  &:before {
    display: block;
    content: '';
    position: absolute;
    top: -6px;
    left: 0;
    width: 100%;
    height: 5px;
    background: black;
    background-image: linear-gradient(to right, #363636, #bcbcbc);
  }

  &:not(:last-child) {
    margin-bottom: 40px;
  }
`

export const BoxItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  font-size: 125%;
  font-weight: 600;
`

export const BoxDetails = styled.div`
  line-height: 1.55;
  font-weight: 600;
`

export const BoxDetailsDate = styled.span`
  font-weight: normal;
  font-size: 60%;
`

export const BoxSubDetails = styled.div`
  font-size: 90%;
  font-weight: normal;
`

export const Title = ProfileTitle.extend`
  margin-bottom: 20px;
`

export const ProjectTitle = Title.extend`
  margin-top: 3.5rem;
`

export const Link = styled.a`
  font-size: 0.75em;
  cursor: pointer;
  color: #666;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
