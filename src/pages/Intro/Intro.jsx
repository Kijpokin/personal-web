import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, BoxContinue, BoxTitle, MainLayout, MainWrapper, PositionBox, TextFade } from './Intro.styled'
import MainLogo from './components/MainLogo'
import { mobileStyles, styles } from '../../styles'

const MOBILE_BREAKDOWN_PIXEL = 768

const Intro = () => {
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(true)
  const [isAnimateTitle, setIsAnimateTitle] = useState(false)
  const [shouldFadeTitle, setShouldFadeTitle] = useState(false)
  const [shouldShowSubTitle, setShouldShowSubTitle] = useState(false)
  
  const handleContinue = useCallback(() => {
    history.push('/profile')
  }, [history])

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
    <MainLogo fontSize={styles.fontSize} />
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

  return (
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
            <BoxContinue onClick={handleContinue}>
              Click to Continue
            </BoxContinue>
          )}
        </Box>
      </MainWrapper>
    </MainLayout>
  )
}

export default Intro