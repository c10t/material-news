import * as React from 'react'

import { Story } from '../interfaces/item'

export interface Props {
  story: Story
}

const NewsCard: React.FC<Props> = (props) => {
  return (<p>{props.story.title}</p>)
}

export default NewsCard
