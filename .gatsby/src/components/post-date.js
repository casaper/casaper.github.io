import React from 'react'
import styled from 'styled-components'

const Wrap = styled.p`
  margin: 0.7rem 0;
  font-size: 0.8rem;
  line-height: 1.1;
`

const PostDate = ({ date }) => <Wrap>{date}</Wrap>

export default PostDate
