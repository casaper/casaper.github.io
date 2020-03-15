import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styled, { createGlobalStyle } from "styled-components"

import PostBottomNav from "./post-bottom-nav"
import PostDate from "../components/post-date"

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

const PostTitle = styled.h1`
  margin-bottom: 0;
`

const Separator = styled.hr`
  margin-bottom: ${rhythm(1)};
`

const PostContent = styled.section``

const GlobalStyle = createGlobalStyle`
  .post-content ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    list-style-position: inside;
  }

  .post-content ul li {
    flex: 0 0 100%;
    margin: 0;
    padding: 0;
    line-height: 2;
  }
`

const BlogPostTemplate = ({
  data: {
    markdownRemark: {
      frontmatter: { title, date, description },
      excerpt,
      html,
    },
    site: {
      siteMetadata: { title: siteTitle },
    },
  },
  pageContext: { previous, next },
  location,
}) => (
  <Layout location={location} title={siteTitle}>
    <GlobalStyle />
    <SEO title={title} description={description || excerpt} />
    <article>
      <header>
        <PostTitle>{title}</PostTitle>
        <PostDate date={date} />
      </header>
      <PostContent
        className="post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Separator />
      <footer>
        <Bio />
      </footer>
    </article>

    <PostBottomNav {...{ previous, next }} />
  </Layout>
)

export default BlogPostTemplate
