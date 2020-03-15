import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrap = styled.nav``
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`
const Item = styled.li``
const ItemLink = styled(Link)``

const PostNavLink = ({
  item: {
    fields: { slug },
    frontmatter: { title },
  },
  rel,
}) => (
  <ItemLink to={slug} rel="rel">
    {rel === 'prev' && '← '}
    {title}
    {rel === 'next' && ' →'}
  </ItemLink>
)

const PostBottomNav = ({ previous, next }) => (
  <Wrap>
    <List>
      <Item>{previous && <PostNavLink item={previous} rel="prev" />}</Item>
      <Item>{next && <PostNavLink item={next} rel="next" />}</Item>
    </List>
  </Wrap>
)

export default PostBottomNav
