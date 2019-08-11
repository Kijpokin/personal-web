import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import LandingPage from './components/landingPage'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

export const styles = {
  fontSize: 180,
  subFontSize: 28,
  subTitleGap: 120
}

export const mobileStyles = {
  fontSize: 80,
  subFontSize: 24,
  subTitleGap: 80
}

const MainLayout = styled.div`
  min-height: 100vh;

  height: 100%;
  width: 100%;

  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Animate = keyframes`
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

const Animate2 = keyframes`
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

const Text = styled.text`
  fill: black !important;
  stroke: rgba(255, 255, 255, 0.75);
  stroke-width: 2.5px;
  stroke-dasharray: 100%;
  transform: translate3d(0, 0, 0);

  animation: ${Animate} 3s linear infinite;
`

const Text2 = Text.extend`
  stroke: rgba(255, 255, 255, 0.4);
  transform: translate3d(0, 0, 0);

  animation: ${Animate2} 3s linear infinite;
`

const MainWrapper = styled.div`
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

const AnimateBackground = keyframes`
  from {
    width: 0vw;
  }

  to {
    width: 100vw;
  }
`

const Box = styled.div`
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

const PositionBox = styled.div`
  position: relative;
  top: -32px;
`

const BoxTitle = styled.div`
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

const TextFade = styled.span`
  animation: ${TextAnimationFadeIn} 1.25s ease-in;
`

const UnderLineAnimation = keyframes`
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

const BoxNext = styled.div`
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

const MOBILE_BREAKDOWN_PIXEL = 768

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isAnimateTitle, setIsAnimateTitle] = useState(false)
  const [shouldFadeTitle, setShouldFadeTitle] = useState(false)
  const [shouldShowSubTitle, setShouldShowSubTitle] = useState(false)
  const [shouldShowDetails, setShouldShowDetails] = useState(false)

  const isMobile = window.innerWidth <= MOBILE_BREAKDOWN_PIXEL

  if (isMobile) {
    styles.fontSize = mobileStyles.fontSize
  }

  useEffect(() => {
    const loadTime = 1500

    setTimeout(() => setIsLoading(false), loadTime)
    setTimeout(() => setIsAnimateTitle(true), loadTime + 1500)
    setTimeout(() => setShouldFadeTitle(true), loadTime + 2750)
    setTimeout(() => setShouldShowSubTitle(true), loadTime + 4250)
  }, [])

  const mainLogoLoading = (
    <svg height={styles.fontSize} width={styles.fontSize - 25}>
      <Text2
        fontFamily="Quicksand, sans-serif"
        fontSize={styles.fontSize}
        strokeOpacity="null"
        strokeWidth="0"
        textAnchor="start"
        x="0"
        y={styles.fontSize}
        xmlSpace="preserve"
      >
        M
      </Text2>
      <Text
        id="svg_3"
        fill="#000000"
        fillOpacity="null"
        fontFamily="Quicksand, sans-serif"
        fontSize={styles.fontSize}
        stroke="#000"
        strokeOpacity="null"
        strokeWidth="0"
        textAnchor="start"
        x="0"
        y={styles.fontSize}
        xmlSpace="preserve"
      >
        M
      </Text>
    </svg>
  )

  if (isLoading) {
    return (
      <MainLayout>
        <MainWrapper>
          <PositionBox>{mainLogoLoading}</PositionBox>
        </MainWrapper>
      </MainLayout>
    )
  }

  const welcomeLayout = (
    <MainLayout>
      <MainWrapper>
        <Box>
          <PositionBox>
            <BoxTitle
              width={isAnimateTitle ? (isMobile ? 260 : 590) : undefined}
              isMobile={isMobile}
            >
              <span>M</span>
              {shouldFadeTitle && <TextFade>a</TextFade>}
              {shouldFadeTitle && <TextFade>c</TextFade>}
              {shouldFadeTitle && <TextFade>k</TextFade>}
              {shouldFadeTitle && <TextFade>i</TextFade>}
              {shouldFadeTitle && <TextFade>e</TextFade>}
            </BoxTitle>
          </PositionBox>
          {shouldShowSubTitle && (
            <BoxNext onClick={() => setShouldShowDetails(true)}>
              Click to Continue
            </BoxNext>
          )}
        </Box>
      </MainWrapper>
    </MainLayout>
  )

  const detailsLayout = (
    <Router basename="/">
      <Switch>
        <LandingPage />
      </Switch>
    </Router>
  )

  if (!shouldShowDetails) {
    return <React.Fragment>{welcomeLayout}</React.Fragment>
  }

  return <React.Fragment>{detailsLayout}</React.Fragment>
}

export default App
