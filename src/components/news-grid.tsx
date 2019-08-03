import * as React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import NewsList from './news-list'
import { Story } from '../interfaces/item'

export interface Props {
  stories: Story[]
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  newsList: {
    backgroundColor: "#eeeeee"
  }
}))

const NewsGrid: React.FC<Props> = (props) => {
  const { stories } = props
  const classes = useStyles()
  return (
    <Grid container className={classes.root} justify="center" spacing={2}>
      <Grid item xs={8} className={classes.newsList}>
        <NewsList stories={stories} />
      </Grid>
    </Grid>
  )
}

export default NewsGrid
