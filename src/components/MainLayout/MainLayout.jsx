import React from 'react'
import { useHistory, useLocation } from 'react-router'
import WorkSvg from '../../assets/outline-work_outline-24px.svg'
import AssignmentSvg from '../../assets/outline-assignment-24px.svg'
import PersonSvg from '../../assets/outline-person-24px.svg'
import StarSvg from '../../assets/outline-star_border-24px.svg'
import Footer from '../Footer'
import { Content, FaIcon, HeadBar, ImgIcon, Menu, NavBar, Sticky, TextMenu, Wrapper } from './MainLayout.styled'

const MENUS = [
  {
    name: 'Profile',
    path: '/profile',
    imgSrc: PersonSvg,
  },
  {
    name: 'Experience',
    path: '/experience',
    imgSrc: WorkSvg,
  },
  {
    name: 'Projects',
    path: '/project',
    imgSrc: AssignmentSvg,
  },
  {
    name: 'Achievement',
    path: '/achievement',
    imgSrc: StarSvg,
  },
]

const renderMenuItem = ({ path, imgSrc, cb, name, location }) => (
  <Menu className={location.pathname === path && 'active'} onTouchStart={() => cb(path)} onClick={() => cb(path)}>
    <FaIcon>
      <ImgIcon src={imgSrc} />
    </FaIcon>
    <TextMenu>{name}</TextMenu>
  </Menu>
)

const MainLayout = ({ children }) => {
  const history = useHistory()
  const location = useLocation()

  const navigateTo = (link) => {
    history.push(link)
  }

  return (
    <Wrapper>
      <HeadBar>
        <NavBar>
          <Sticky>{MENUS.map((menu) => renderMenuItem({ ...menu, cb: navigateTo, location }))}</Sticky>
        </NavBar>
        <Content>{children}</Content>
        <Footer />
      </HeadBar>
    </Wrapper>
  )
}

export default MainLayout
