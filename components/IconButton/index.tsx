import React from 'react'
import { IconType } from 'react-icons'

interface IconButtonProps {
  icon: IconType
  color?: string
  size?: number
  onClick?: () => void
}

const IconButton: React.FC<IconButtonProps> = ({ icon: Icon, color = 'black', size = 24, onClick }) => {
  return (
    <button onClick={onClick} className="flex items-center justify-center p-2 rounded hover:bg-gray-200">
      <Icon size={size} color={color} />
    </button>
  )
}

export default IconButton
