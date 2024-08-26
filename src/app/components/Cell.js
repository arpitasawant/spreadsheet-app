"use client";
import { useState } from 'react';

const Cell = ({ value, onChange }) => {
  const [alignment, setAlignment] = useState('left');
  const [fontSize, setFontSize] = useState('text-sm');

  return (
    <div className="flex flex-col">
      <select onChange={(e) => setAlignment(e.target.value)}>
        <option value="left">Left</option>
        <option value="center">Center</option>
        <option value="right">Right</option>
      </select>
      <select onChange={(e) => setFontSize(e.target.value)}>
        <option value="text-sm">Small</option>
        <option value="text-base">Medium</option>
        <option value="text-lg">Large</option>
      </select>
      <input
        value={value}
        onChange={onChange}
        className={`border border-gray-300 p-2 ${alignment} ${fontSize}`}
      />
    </div>
  );
};

export default Cell;
