import React, { useState } from 'react';
import { Levels } from '../types/elements';
import { Button, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';

import Element from './ElementPill'

type Props = {
  level: string
  type: string
}

const SelectMoves = ({ level, type }: Props) => {
  const [selectedMoves, setSelectedMoves] = useState<string[]>([]);

  const methods = useFormContext();
  const { setValue } = methods;

  const handleSelect = (move: string) => {
    setSelectedMoves((prev) => {
      if (prev.includes(move)) {
        setValue(`${move}`, false);
        return prev.filter((m) => m !== move);
      } else {
        setValue(`${move}`, true);
        return [...prev, move];
      }
    });
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-2">
      {Object.keys(Levels[level][type]).map((key) => (
        <div key={key}>
          <Element element={Levels[level][type][key]} />
        </div>
      ))}
    </div>
  );
};

export default SelectMoves;