import React from 'react'
import styled from 'styled-components'

const CopyRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 75%;
  font-weight: normal;
  margin-bottom: 0.75rem;
`

export const Footer = () => <CopyRight> © Mackie - 2018</CopyRight>

export default Footer
