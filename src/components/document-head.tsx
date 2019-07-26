import * as React from 'react'
import { Helmet } from 'react-helmet'

const DocumentHead: React.FC = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>Material News</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
  </Helmet>
)

export default DocumentHead
