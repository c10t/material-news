import * as React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'

import BeachAccessIcon from '@material-ui/icons/BeachAccess'

import { Story } from '../interfaces/item'

export interface Props {
  stories: Story[]
}

const NewsList: React.FC<Props> = ({ stories }) => {
  return (
    <List>
      {stories.map(story => <NewsItem story={story} />)}
    </List>
  )
}

const NewsItem: React.FC<{ story: Story }> = ({ story }) => {
  return (
    <React.Fragment>
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={story.title} secondary={subheader(story)} />
      </ListItem>
      <Divider />
    </React.Fragment>
  )
}

const subheader = (story: Story): string => {
  const storyDate = new Date(story.time * 1000)
  const dateFormed = storyDate.toLocaleDateString() + ' ' + storyDate.toLocaleTimeString()
  return `${story.score} points by ${story.by} | ${dateFormed} | ${story.descendants} comments`
}

export default NewsList
