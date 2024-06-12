import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Select from '../components/Select'

export default {
  title: 'Components/Select',
  component: Select,
} as Meta<typeof Select>

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
  onChange:console.log,
  optionList: [
    { text: 'Option 1', value: '1' },
    { text: 'Option 2', value: '2' },
    { text: 'Option 3', value: '3' },
  ],
  placeholder: 'Select an option',
  className: 'mb-4',
  optionClassName: 'text-gray-700',
}
