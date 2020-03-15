import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

import Footer from "./footer"

const MainHeading = styled.h1`
  margin-top: 0;
  ${props =>
    props.root
      ? css`
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 2.6rem;
        `
      : css`
          font-size: 2rem;
          font-family: Montserrat, sans-serif;
        `}
`

const HeadingLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 42rem;
  padding: 2.6rem 1.3rem;
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  return (
    <Container>
      <header>
        <MainHeading root={location.pathname === rootPath}>
          <HeadingLink to={"/"}>{title}</HeadingLink>
        </MainHeading>
      </header>
      <main>{children}</main>
      <Footer />
    </Container>
  )
}

export default Layout
