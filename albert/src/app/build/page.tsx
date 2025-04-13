'use client';

import { Button, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import SelectMoves from "../../../components/SelectMoves";

export default function Build() {
  const [level, setLevel] = useState('preBronze');

  return (
    <div className="p-16">
      <div className="text-black flex flex-col items-center mb-4">
        <h1 className="text-3xl font-bold">Build</h1>
        <p className="text-lg">Select your level and moves</p>
      </div>
      <div className="flex justify-center items-center mb-4">
        <Select
          className="bg-blue-500 w-1/2"
          label='Level'
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <MenuItem value={'preBronze'}>Pre-Bronze</MenuItem>
          <MenuItem value={'bronze'}>Bronze</MenuItem>
          <MenuItem value={'silver'}>Silver</MenuItem>
        </Select>
      </div>
      <SelectMoves level={level} />
      <div className="fixed bottom-0 left-0 w-full">
        <div className="flex justify-center items-center py-4">
          <Button variant="contained" color="primary">
            Save
          </Button>
        </div>
        <div className="w-full bg-gray-800 text-white text-center py-4">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
      
    </div>
  )
}