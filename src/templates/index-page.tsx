import * as React from 'react'

import Appbar from '../components/appbar'
import DocumentHead from '../components/document-head'
import NewsGrid from '../components/news-grid'
import withRoot from '../with-root'
import { Story } from '../interfaces/item'

interface Props {
  title: string
  stories: Story[]
}

const IndexPageTemplate: React.FC<Props> = ({ title, stories }) => (
  <>
    <DocumentHead />
    <Appbar />
    <NewsGrid stories={stories} />
  </>
)

export default withRoot(IndexPageTemplate)
