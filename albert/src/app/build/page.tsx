'use client';

import { Button, MenuItem, Select, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useState } from "react";
import { useForm, FormProvider, Form } from "react-hook-form";
import SelectMoves from "../../../components/SelectMoves";

export default function Build() {
  const [level, setLevel] = useState('preBronze');
  const [elementType, setElementType] = useState('spins');

  const methods = useForm({
    defaultValues: {
      // spins
      '2FtUSp': false,
      'USp': false,
      'LSp': false,
      'CSp': false,
      'SSp': false,
      'CUSp': false,
      'CLSp': false,
      'CCSp': false,
      'CSSp': false,
      'CoSp': false,
      'CCoSp': false,
      'FUSp': false,
      'FLSp': false,
      'FCSp': false,
      'FSSp': false,
      // jumps
      '1HF': false,
      '1HLz': false,
      '1Wz': false,
      '1T': false,
      '1S': false,
      '1Lo': false,
      '1Eu': false,
      '1F': false,
      '1Lz': false,
      '1A': false,
      // other
      'ChSt1': false,
    }
  });

  const { getValues } = methods;

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newElementType: string,
  ) => {
    setElementType(newElementType);
  };

  return (
    <div className="p-8 grid grid-cols-1 gap-4">
      <div className="text-black flex flex-col items-center">
        <div className="w-full flex justify-center items-center">
          <h1 className="text-3xl font-bold mr-4">Build</h1>
          <Select
            className="bg-blue-500 w-1/3"
            label='Level'
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            size="small"
          >
            <MenuItem value={'preBronze'}>Pre-Bronze</MenuItem>
            <MenuItem value={'bronze'}>Bronze</MenuItem>
            <MenuItem value={'silver'}>Silver</MenuItem>
          </Select>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <ToggleButtonGroup
          color="primary"
          value={elementType}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="spins">Spins</ToggleButton>
          <ToggleButton value="jumps">Jumps</ToggleButton>
          <ToggleButton value="other">Steps</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <FormProvider {...methods}>
        <div className="py-8">
          <SelectMoves level={level} type={elementType}/>
        </div>
        <div className="fixed bottom-0 left-0 w-full">
          <div className="flex justify-center items-center py-4">
            <Button variant="contained" color="primary">
              Save
            </Button>
          </div>
          <div className="w-full bg-gray-800 text-white text-center py-4">
            <p>&copy; 2025 ALBERT LLC. All rights reserved.</p>
          </div>
        </div>
      </FormProvider>
    </div>
  )
}