import { useEffect, useState } from 'react'
import { ProgramElement } from '../types/elements'
import { Slider } from '@mui/material' 
import { useFormContext } from 'react-hook-form' 

type Props = {
  element: ProgramElement
}

export default function ElementSlider({ element }: Props) {
  const changeColor = (value) => {
    if (value > 800) {
      return 'success.main'
    } else if (value > 400 && value <= 800) {
      return 'yellow'
    } else if (value > 0 && value <= 400) {
      return 'orange'
    } else {
      return 'grey.500'
    }
  }

  const methods = useFormContext()
  const { getValues, setValue } = methods
  const [confidence, setConfidence] = useState(getValues(element.id));
  const [color, setColor] = useState(changeColor(getValues(element.id)))
  
  const handleChange = (event: Event, newValue: number | number[]) => {
    setConfidence(newValue)
    setValue(element.id, newValue)
  }

  useEffect(() => {
    const color = changeColor(confidence)
    setColor(color)
  }
  , [confidence])


  return (
    <div className="flex flex-col items-left w-full">
      <label className="text-purple-500 whitespace-normal break-words">
        {element.label}
      </label>
      <Slider
        defaultValue={getValues(element.id)}
        max={1000}
        sx={{ width: 300, color: color }}
        onChange={handleChange}
      />
    </div>
    
  )
}