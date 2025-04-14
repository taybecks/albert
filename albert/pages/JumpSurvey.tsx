import { Levels } from '../types/elements'
import { useFormContext } from 'react-hook-form'

import ElementSlider from '../components/ElementSlider'

export default function JumpSurvey() {
  const { getValues, setValue } = useFormContext()
  const level = getValues('level')
  const availableMoves = Levels[level]

  return (
    <div className="flex justify-center items-center">
      <div className="mt-12">
        {Object.keys(availableMoves.jumps).map((move) => (
          <div key={move}>
          <ElementSlider element={availableMoves.jumps[move]} />
          </div>
        ))}
      </div>
    </div>
  );
}