import React, { useState } from 'react';
import { Levels } from '../types/elements';
import { Button, Typography } from '@mui/material';

type Props = {
  level: string
}

const SelectMoves = ({ level }: Props) => {
  const [selectedMoves, setSelectedMoves] = useState<string[]>([]);

  const handleSelect = (move: string) => {
    setSelectedMoves((prev) =>
      prev.includes(move)
        ? prev.filter((m) => m !== move)
        : [...prev, move]
    );
  };

  return (
    <div className="flex flex-wrap gap-2">
      {Object.keys(Levels[level]).map((key) => (
      <Button
        variant="outlined"
        size="small"
        key={key}
        onClick={() => handleSelect(key)}
      >
        <Typography align="center" variant="body2">
          {Levels[level][key].label}
        </Typography>
      </Button>
      ))}
    </div>
  );
};

export default SelectMoves;