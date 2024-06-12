import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import TextInput from '../components/TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput,
} as Meta<typeof TextInput>

const Template: StoryFn<typeof TextInput> = (args) => <TextInput {...args} />

export const Outlined = Template.bind({})
Outlined.args = {
  label: 'Outlined Input',
  variant: 'outlined',
  placeholder: 'Enter text',
}

export const Standard = Template.bind({})
Standard.args = {
  label: 'Standard Input',
  variant: 'standard',
  placeholder: 'Enter text',
  className:'[&>input]:!bg-transparent'
}
