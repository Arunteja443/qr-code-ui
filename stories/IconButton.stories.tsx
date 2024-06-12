import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import IconButton from '../components/IconButton'
import { FaLink } from 'react-icons/fa'

export default {
  title: 'Components/IconButton',
  component: IconButton,
} as Meta<typeof IconButton>

const Template: StoryFn<typeof IconButton> = (args) => <IconButton {...args} />

export const Default = Template.bind({})
Default.args = {
  icon: FaLink,
  color: 'black',
  size: 24,
}
