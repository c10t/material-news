import React from 'react'

import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'

import { Story } from '../interfaces/item'
import Typography from '@material-ui/core/Typography';

export interface Props {
  story: Story
}

const NewsCard: React.FC<Props> = (props) => {
  const { story } = props
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>{story.title.slice(0, 1).toUpperCase()}</Avatar>}
        title={story.title}
        subheader={` by ${story.by} | ${(new Date(story.time * 1000)).toISOString()}`} />
      <CardActions></CardActions>
    </Card>
  )
}

export default NewsCard
