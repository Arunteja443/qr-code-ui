import React, { useState, useEffect, useRef, useMemo } from 'react'
import { FaChevronDown } from 'react-icons/fa'

interface Option {
  text: string
  value: string
}

interface SelectProps {
  optionList: Option[]
  placeholder?: string
  className?: string
  optionClassName?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement> | React.MouseEvent<HTMLLIElement, MouseEvent>) => void
  value?: string
}

const Select: React.FC<SelectProps> = ({
  optionList,
  placeholder = 'Select an option',
  className = '',
  optionClassName = '',
  onChange,
  value='',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedValue, setSelectedValue] = useState<string | null>(value);
  const selectedOption = useMemo(() => optionList.find(option => option.value === selectedValue), [selectedValue, optionList]);
  const filteredOptions  = useMemo(()=>{
    if(selectedOption || !searchTerm){
        return optionList;
    }
    return optionList.filter(option => option.text.toLowerCase().includes(searchTerm.toLowerCase()))
  },[optionList, searchTerm, selectedOption])
  const selectRef = useRef<HTMLDivElement>(null)

  const handleSelect = (option: Option) => {
    if (onChange) {
      onChange({ target: { value: option.value } } as React.ChangeEvent<HTMLSelectElement>)
    }
    setSelectedValue(option.value);
    setIsOpen(false)
  }
  return (
    <div ref={selectRef} className={`relative ${className}`}>
      <div
        className="flex items-center justify-between p-2 border border-gray-300 rounded cursor-pointer"
      >
        <input
          type="text"
          placeholder={placeholder}
          className="outline-none w-full bg-transparent text-black"
          value={selectedValue ? selectedOption?.text || '' : searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick={(e) => e.stopPropagation()}
          onFocus={()=>setIsOpen(true)}
          onBlur={()=>setIsOpen(false)}
        />
        <FaChevronDown color="#d7d7d7" className="ml-2" />
      </div>
      {isOpen && (
        <ul className="absolute left-0 w-full mt-2 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto z-10">
          {filteredOptions.length > 0 ? (
            filteredOptions.map(option => (
              <li
                key={option.value}
                className={`p-2 cursor-pointer hover:bg-gray-200 ${optionClassName}`}
                onClick={() => handleSelect(option)}
              >
                {option.text}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No options found</li>
          )}
        </ul>
      )}
    </div>
  )
}

export default Select
