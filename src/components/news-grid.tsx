import * as React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import NewsCard from './news-card'
import { Story } from '../interfaces/item'
import { divide } from '../services/small-utils'

export interface Props {
  stories: Story[]
}

const NewsGrid: React.FC<Props> = (props) => {
  const { stories } = props
  return (
    <React.Fragment>
      {divide(stories, 3).map(row => (
        <Grid container spacing={2}>
          {row.map(story => <Grid item xs={4}><NewsCard story={story} /></Grid>)}
        </Grid>
      ))}
    </React.Fragment>
  )
}

export default NewsGrid
