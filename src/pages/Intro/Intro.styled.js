import styled, { keyframes } from 'styled-components'
import { mobileStyles, styles } from '../../styles'

export const MainLayout = styled.div`
  min-height: 100vh;

  height: 100%;
  width: 100%;

  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${styles.fontSize}px;
  color: white;

  white-space: nowrap;
  font-weight: normal;
  max-width: 100%;
  margin: auto;

  @media (max-width: 768px) {
    font-size: ${mobileStyles.fontSize}px;
  }
`

export const AnimateBackground = keyframes`
  from {
    width: 0;
  }

  to {
    width: 100vw;
  }
`

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: white;
  color: black;
  transform: translate3d(0, 0, 0);

  animation: ${AnimateBackground} 1.5s cubic-bezier(0, 0.95, 0.35, 0.91);
`

export const PositionBox = styled.div`
  position: relative;
  top: -32px;
`

export const BoxTitle = styled.div`
  transition: width 1.25s;
  width: ${props => (props.width ? props.width : (5 / 6) * styles.fontSize)}px;
`

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

export const TextFade = styled.span`
  animation: ${TextAnimationFadeIn} 1.25s ease-in;
`

export const UnderLineAnimation = keyframes`
  0% {
    width: 0;
    margin: 0 50%;
  }

  75% {
    width: 80%;
    margin: 0 10%;
  }

  100% {
    width: 100%;
    margin: 0;
  }
`

export const BoxContinue = styled.a`
  font-size: ${styles.subFontSize}px;
  position: absolute;
  margin-top: 120px;
  cursor: pointer;

  animation: ${TextAnimationFadeIn} 1.25s ease-in;

  &:before {
    position: absolute;
    top: 100%;
    height: 2px;
    content: '';
    width: 100%;
    display: block;
    background: #dfdfdf;
  }

  &:after {
    position: absolute;
    top: 100%;
    height: 2px;
    content: '';
    width: 100%;
    display: block;
    background: black;

    animation: ${UnderLineAnimation} 1.25s linear infinite;
  }

  @media (max-width: 768px) {
    font-size: ${mobileStyles.subFontSize}px;
    margin-top: ${mobileStyles.subTitleGap}px;
  }
`