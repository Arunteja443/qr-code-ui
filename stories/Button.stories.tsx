import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Button from '../components/Button'
import { FaLink } from 'react-icons/fa'
import { BsDownload } from "react-icons/bs";


export default {
  title: 'Components/Button',
  component: Button,
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Click Me',
  className: 'bg-blue-500 text-white hover:bg-blue-700',
  isLoading: false,
}

export const Loading = Template.bind({})
Loading.args = {
  text: 'Loading...',
  className: 'bg-blue-500 text-white hover:bg-blue-700',
  showLoadingIcon: true,
  isLoading: true,
}

export const LeftIcon = Template.bind({})
LeftIcon.args = {
  text: 'Click Me',
  leftIcon: BsDownload,
  className: 'bg-blue-500 text-white hover:bg-blue-700',
  isLoading: false,
}

export const RightIcon = Template.bind({})
RightIcon.args = {
  text: 'Click Me',
  rightIcon: FaLink,
  className: 'bg-blue-500 text-white hover:bg-blue-700',
  isLoading: false,
}
