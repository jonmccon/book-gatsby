import React from 'react'
import styled from 'styled-components'

const Wrapper = styled(posed.div(appear))`
  margin: 1rem 0 2rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: 0 0 65%;
  }
`

const LongForm = styled.div`
  font-size: ${props => (props.small ? '2em' : '3em')};
  text-transform: capitalize;
  font-weight: 600;
  text-align: center;
  margin: 0 0 3rem 0;
  margin: ${props => (props.small ? '1rem 0 4rem 0' : '0 0 3rem 0')};
  line-height: 1.2;
  span {
    margin: 0 0 0 0.25em;
  }
  a {
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`

const Description = props => {
  return (
    <LongForm
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
    />
  )
}

export default Description
