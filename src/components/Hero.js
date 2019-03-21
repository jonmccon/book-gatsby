import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  min-height: 300px;
`

const Title = styled.h1`
  font-size: 3em;
  text-transform: Uppercase;
  font-weight: 600;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
  color: white;
`
const Subtitle = styled.h1`
  font-size: 3em;
  text-transform: Uppercase;
  font-weight: 400;
  position: absolute;
  width: 100%;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
  color: white;
`

const Hero = props => (
  <Wrapper>
    {/* <BgImg
      height={props.height}
      fluid={props.image.fluid}
      backgroundColor={'#eeeeee'}
    /> */}
    <Title>{props.title}</Title>
    <Subtitle>{props.subtitle}</Subtitle>
  </Wrapper>
)

export default Hero
