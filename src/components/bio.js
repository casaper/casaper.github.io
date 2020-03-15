/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import styled from "styled-components"

const Wrap = styled.div`
  display: flex;
  margin-bottom: 4.3rem;
`

const BioImage = styled(Image)`
  margin-bottom: 0;
  margin-right: 0.875rem;
  min-width: ${p => p.size}px;
  bordder-radius: 100%;
`

const Bio = () => {
  const {
    avatar: {
      childImageSharp: { fixed },
    },
    site: {
      siteMetadata: {
        author: { name, summary },
      },
    },
  } = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/me.jpg/" }) {
        childImageSharp {
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  return (
    <Wrap>
      <BioImage
        fixed={fixed}
        alt={name}
        size={70}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        <em>
          Written by <strong>{name}</strong>
        </em>
        <br />
        <small>
          <em>{summary}</em>
        </small>
      </p>
    </Wrap>
  )
}

export default Bio
