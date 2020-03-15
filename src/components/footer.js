import React from "react"
import styled from "styled-components"

const Wrap = styled.footer``
const Copy = styled.small`
  font-size: 0.5rem;
`

const Footer = () => (
  <Wrap>
    <Copy>©</Copy> {new Date().getFullYear()} — Built with{" "}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </Wrap>
)

export default Footer
