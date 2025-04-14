import { ProgramElement } from '../types/elements'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form' 

type Props = {
  element: ProgramElement
}

export default function ElementPill({ element }: Props) {
  const methods = useFormContext()
  const { getValues, setValue } = methods
  const [active, setActive] = useState(getValues(`${element.id}`) || false)

  const baseStyle = 'rounded-3xl border-[2px] border-solid p-2 m-0.5 text-gray-600'
  const activeStyle = 'bg-[#227C9D] text-white'

  const onSelect = (e) => {
    e.preventDefault()
    setActive(!active)
    setValue(`${element.id}`, !active)
  }

  return (
    <div 
      className={`${baseStyle} ${active ? activeStyle : ''}`} 
      style={active ? 
        {borderColor: element.color, backgroundColor: element.color} : 
        {borderColor: element.color}}>
      <button
        type="button"
        onClick={onSelect}
      >
        <span>
          {element.label}
        </span>
      </button>
    </div>
  )
}