import classNames from 'classnames';
import React from 'react'
import { IconType } from 'react-icons'
import { FaSpinner } from 'react-icons/fa'
import { IoMdSync } from "react-icons/io";

interface ButtonProps {
  text: string
  leftIcon?: IconType
  rightIcon?: IconType
  className?: string
  showLoadingIcon?: boolean
  isLoading?: boolean
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  text,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className = '',
  showLoadingIcon = false,
  isLoading = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center space-x-2 px-8 py-6 drop-shadow-md bg-primary-blue rounded-full ${className} ${isLoading && 'cursor-not-allowed'}`}
      disabled={isLoading}
    >
      {showLoadingIcon && <IoMdSync className={classNames("mr-2", {'animate-spin': isLoading})} />}
      {LeftIcon  && <LeftIcon className="mr-2" />}
      <span>{text}</span>
      {RightIcon && <RightIcon className="ml-2" />}
    </button>
  )
}

export default Button
