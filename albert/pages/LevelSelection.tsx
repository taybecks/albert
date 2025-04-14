import { useState } from 'react';
import { MenuItem, Select } from '@mui/material';

export default function LevelSelection() {
  const [level, setLevel] = useState('preBronze');

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
          <Select
            className="bg-blue-500"
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
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}