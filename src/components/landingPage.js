import React from 'react'
import styled, { keyframes } from 'styled-components'
import Work from '../assets/outline-work_outline-24px.svg'
import Assignment from '../assets/outline-assignment-24px.svg'
import Person from '../assets/outline-person-24px.svg'
import Star from '../assets/outline-star_border-24px.svg'
import ProfilePage from './profile'
import Footer from './footer'
import Experience from './experience'
import ProjectPage from './project'
import AcheivementPage from './acheivements'
import { Route, withRouter } from 'react-router-dom'
import { TextAnimationFadeIn } from '../App'

export const UnderLineAnimation = keyframes`
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

const Layout = styled.div`
  min-height: 100vh;
  height: auto;
  background: white;
  display: flex;
  flex-direction: column;
`

// const HeaderTheme = styled.div`
//   display: inline-block;
//   height: 25vh;
//   width: 100%;
//   background: ${StartColor};
//   background-image: -webkit-linear-gradient(
//     top,
//     ${StartColor} 0%,
//     ${EndColor} 100%
//   );
//   background-image: -o-linear-gradient(top, ${StartColor} 0%, ${EndColor} 100%);
//   background-image: linear-gradient(
//     to bottom,
//     ${StartColor} 0%,
//     ${EndColor} 100%
//   );
//   background-repeat: repeat-x;
// `

const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 800px;
`

const HeadBar = styled.div`
  min-height: 100%;
  position: relative;
  background: white;
`

const Menu = styled.div`
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
  &:hover,
  &:active {
    // &:before {
    //   position: absolute;
    //   top: 100%;
    //   height: 3px;
    //   content: '';
    //   width: 100%;
    //   display: block;
    //   background: #dfdfdf;
    // }

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

      animation: ${UnderLineAnimation} 0.25s linear 1;
    }
  }
`

const TextMenu = styled.span`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const Sticky = styled.div`
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

const NavBar = styled.div`
  background: #fefefe;
  box-shadow: 0px 1px 5px -1px #111;
  position: sticky;
  top: 0;
  z-index: 999;
`

const FAICON = styled.div``

const IMGICON = styled.img`
  vertical-align: bottom;
  width: 24px;
  height: 24px;
`

class LandingPage extends React.Component {
  handleMenuClick = link => {
    this.props.history.push(link)
  }

  render() {
    return (
      <Layout>
        <HeadBar>
          <NavBar>
            <Sticky>
              <Menu
                className={this.props.location.pathname === '/' && 'active'}
                onClick={() => this.handleMenuClick('/')}
              >
                <FAICON>
                  <IMGICON src={Person} />
                </FAICON>
                <TextMenu>Profile</TextMenu>
              </Menu>
              <Menu
                className={
                  this.props.location.pathname === '/experience' && 'active'
                }
                onClick={() => this.handleMenuClick('/experience')}
              >
                <FAICON>
                  <IMGICON src={Work} />
                </FAICON>
                <TextMenu>Experience</TextMenu>
              </Menu>
              <Menu
                className={
                  this.props.location.pathname === '/project' && 'active'
                }
                onClick={() => this.handleMenuClick('/project')}
              >
                <FAICON>
                  <IMGICON src={Assignment} />
                </FAICON>
                <TextMenu>Projects</TextMenu>
              </Menu>
              <Menu
                className={
                  this.props.location.pathname === '/achievement' && 'active'
                }
                onClick={() => this.handleMenuClick('/achievement')}
              >
                <FAICON>
                  <IMGICON src={Star} />
                </FAICON>
                <TextMenu>Achievement</TextMenu>
              </Menu>
            </Sticky>
          </NavBar>
          <Content>
            <Route exact={true} path="/" component={ProfilePage} />
            <Route path="/experience" component={Experience} />
            <Route path="/project" component={ProjectPage} />
            <Route path="/achievement" component={AcheivementPage} />
          </Content>
          <Footer />
        </HeadBar>
      </Layout>
    )
  }
}

export default withRouter(LandingPage)
