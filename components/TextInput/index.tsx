import classNames from 'classnames'
import React, { useMemo } from 'react'

interface InputFieldProps {
  label: string
  variant: 'outlined' | 'standard'
  type?: string
  placeholder?: string
  className?: string
}

const TextInput: React.FC<InputFieldProps> = ({
  label,
  variant,
  type = 'text',
  placeholder = '',
  className = '',
  ...props
}) => {
const isOutlined = useMemo(() => variant === 'outlined', [variant]);
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="mb-2 text-sm font-medium text-gray-700">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          className={classNames('bg-transparent text-black',{
            "p-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-500":isOutlined, 
            "p-2 border-b border-gray-300 outline-none focus:border-blue-500": !isOutlined
            })}
            {...props}
        />
    </div>
  )
}

export default TextInput
