import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

import PostDate from './post-date'

const Wrap = styled.article`
  margin: 0 0 3rem 0;
`

const Heading = styled.h3`
  margin: 0;
`

const HeadingLink = styled(Link)`
  box-shadow: none;
  color: #555;
`

const Description = styled.p`
  color: #222;
  font-size: 1rem;
  line-height: 1.8;
`

const IndexArticle = ({
  node: {
    excerpt,
    fields: { slug },
    frontmatter: { date, description, title },
  },
}) => (
  <Wrap>
    <header>
      <Heading>
        <HeadingLink to={slug}>{title || slug}</HeadingLink>
      </Heading>
      <PostDate date={date} />
    </header>
    <section>
      <Description
        dangerouslySetInnerHTML={{
          __html: description || excerpt,
        }}
      />
    </section>
  </Wrap>
)

IndexArticle.propTypes = {
  node: PropTypes.object.isRequired,
}

export default IndexArticle
