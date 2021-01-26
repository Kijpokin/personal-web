import styled, { keyframes } from 'styled-components'

export const animateText = keyframes`
  0% {
    stroke-dashoffset: 180%;
  }

  25% {
    stroke-dashoffset: 280%;
  }

  50% {
    stroke-dashoffset: 380%;
  }

  75% {
    stroke-dashoffset: 480%;
  }

  100% {
    stroke-dashoffset: 580%;
  }
`

export const animateTextOutlined = keyframes`
  0% {
    stroke-dashoffset: 100%;
  }

  25% {
    stroke-dashoffset: 200%;
  }

  50% {
    stroke-dashoffset: 300%;
  }

  75% {
    stroke-dashoffset: 400%;
  }

  100% {
    stroke-dashoffset: 500%;
  }
`

export const Text = styled.text`
  fill: #000000 !important;
  stroke: rgba(255, 255, 255, 0.75);
  stroke-width: 2.5px;
  stroke-dasharray: 100%;
  transform: translate3d(0, 0, 0);

  animation: ${animateText} 3s linear infinite;
`

export const TextOutlined = Text.extend`
  stroke: rgba(255, 255, 255, 0.4);
  transform: translate3d(0, 0, 0);

  animation: ${animateTextOutlined} 3s linear infinite;
`