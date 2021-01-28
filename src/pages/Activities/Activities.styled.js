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
`

export const BoxWrapper = styled.div`
  border: 2px solid #f5f5f5;

  &:not(:last-child) {
    margin-bottom: 40px;
  }
`

export const Title = ProfileTitle.extend`
  margin-bottom: 20px;
`

export const Image = styled.img`
  //og 0.375
  height: 375px;
  width: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 250px;
  }
`

export const BoxItemHeader = styled.div`
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
