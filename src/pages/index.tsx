import * as React from 'react'
import { graphql } from 'gatsby'

import { Story } from '../interfaces/item'
import IndexPageTemplate from '../templates/index-page'

const IndexPage: React.FC<{ data: any }> = ({ data }) => {
  const title: string = data.site.siteMetadata.title
  const stories: Story[] = data.allTopStories.edges.map((x: any) => x.node)
  console.log(title)
  console.log(stories)
  return <IndexPageTemplate title={title} stories={stories} />
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allTopStories {
      edges {
        node {
          id
          time
          type
          by
          time
          kids
          url
          score
          title
          descendants
        }
      }
    }
  }
`
