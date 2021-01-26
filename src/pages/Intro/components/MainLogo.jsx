import React from 'react'
import PropTypes from 'prop-types'
import { Text,  TextOutlined } from './MainLogo.styled'

const MainLogo = ({ fontSize }) =>
  (
    <svg height={fontSize} width={fontSize - 25}>
      <TextOutlined
        fontFamily="Quicksand, sans-serif"
        fontSize={fontSize}
        strokeOpacity="null"
        strokeWidth="0"
        textAnchor="start"
        x="0"
        y={fontSize}
        xmlSpace="preserve"
      >
        M
      </TextOutlined>
      <Text
        id="svg_3"
        fill="#000000"
        fillOpacity="null"
        fontFamily="Quicksand, sans-serif"
        fontSize={fontSize}
        stroke="#000"
        strokeOpacity="null"
        strokeWidth="0"
        textAnchor="start"
        x="0"
        y={fontSize}
        xmlSpace="preserve"
      >
        M
      </Text>
    </svg>
  )


MainLogo.propTypes = {
  fontSize: PropTypes.number.isRequired
}

export default MainLogo