import * as React from 'react'

import Appbar from '../components/appbar'
import DocumentHead from '../components/document-head'
import withRoot from '../with-root'

const IndexPageTemplate: React.FC = () => (
  <>
    <DocumentHead />
    <Appbar />
  </>
)

export default withRoot(IndexPageTemplate)
