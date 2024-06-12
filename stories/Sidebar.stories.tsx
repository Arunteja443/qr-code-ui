import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Sidebar from '../components/Sidebar/index'
import { FaLink, FaTextHeight, FaEnvelope, FaWifi } from 'react-icons/fa'

export default {
    title: 'Components/Sidebar',
    component: Sidebar,
} as Meta

const Template: StoryFn<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Default = Template.bind({})
Default.args = {
  items: [
    { key: 'url', name: 'URL', icon: <FaLink color="#010847" /> },
    { key: 'text', name: 'Text', icon: <FaTextHeight color="#010847" /> },
    { key: 'email', name: 'Email', icon: <FaEnvelope color="#010847" /> },
    { key: 'wifi', name: 'WiFi', icon: <FaWifi color="#010847" /> },
  ],
  onItemClick: (key: string) => {
    console.log('Item clicked:', key)
  },
}
