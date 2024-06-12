import React from 'react'

interface SidebarItem {
  key: string
  name: string
  icon: JSX.Element
}

interface FloatingSidebarProps {
  items: SidebarItem[]
  onItemClick: (key: string) => void
}

const FloatingSidebar: React.FC<FloatingSidebarProps> = ({ items, onItemClick }) => {
  return (
    <aside className="fixed left-5 top-1/2 -translate-y-1/2 h-fit flex flex-col items-center p-4 space-y-4 bg-white shadow-lg rounded-full drop-shadow-md bg-tertiary-blue">
      {items.map(item => (
        <button
          key={item.key}
          onClick={() => onItemClick(item.key)}
          className="flex flex-col items-center p-4 hover:bg-tertiary-blue rounded-full hover:text-white"
        >
          <div className="text-2xl">{item.icon}</div>
        </button>
      ))}
    </aside>
  )
}

export default FloatingSidebar
