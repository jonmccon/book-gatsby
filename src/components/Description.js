import React from 'react'
import styled from 'styled-components'



const LongForm = styled.div`
  font-size: 2em;
  font-weight: 500;
  text-align: left;
  max-width: 70%;
  margin: 0 0 3rem 0;
  line-height: 1.5;
  a {
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
  p {
    margin-bottom: .4em;
  }
`

const Description = props => {
  return (
    <LongForm
      dangerouslySetInnerHTML={{ __html: props.description.childMarkdownRemark.html }}
    />
  )
}

export default Description
