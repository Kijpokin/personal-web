import styled, { keyframes } from 'styled-components'

export const underlineAnimate = keyframes`
  0% {
    width: 0;
  }

  25% {
    width: 50%;
  }

  75% {
    width: 80%;
  }

  90% {
    width: 85%;
  }

  100% {
    width: 100%;

  }
`

export const Wrapper = styled.div`
  min-height: 100vh;
  height: auto;
  background: white;
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 800px;
`

export const HeadBar = styled.div`
  min-height: 100%;
  position: relative;
  background: white;
`

export const Menu = styled.div`
  width: 25%;
  padding: 5px 0;
  text-align: center;
  font-size: 22px;
  cursor: pointer;
  position: relative;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  &.active,
  &:hover {
    &:after {
      position: absolute;
      top: 100%;
      height: 5px;
      content: '';
      width: 100%;
      display: block;
      background: black;
      background-image: linear-gradient(to right, #363636 0%, #bcbcbc 100%);
      background-repeat: repeat-x;

      animation: ${underlineAnimate} 0.25s linear 1;
    }
  }
`

export const TextMenu = styled.span`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const Sticky = styled.div`
  position: sticky;
  top: 0;
  padding: 5px 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  max-width: 736px;
  margin: 0 auto;
  align-items: center;
`

export const NavBar = styled.div`
  background: #fefefe;
  box-shadow: 0 1px 5px -1px #111;
  position: sticky;
  top: 0;
  z-index: 999;
`

export const FaIcon = styled.div``

export const ImgIcon = styled.img`
  vertical-align: bottom;
  width: 24px;
  height: 24px;
`
