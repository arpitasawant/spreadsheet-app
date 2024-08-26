"use client";
import { useState } from 'react';
import { useStore } from '../store/useSpreadsheetStore'

const Grid = () => {
  return (
    <div className="grid grid-cols-10 gap-0 w-full">
      {Array.from({ length: 1000 }).map((_, index) => (
        <Cell key={index} index={index} />
      ))}
    </div>
  );
};

const Cell = ({ index }) => {
  const { cells, updateCell } = useStore();
  const [editing, setEditing] = useState(false);

  const handleBlur = (event) => {
    updateCell(index, event.target.value);
    setEditing(false);
  };

  return (
    <div
      className="border border-gray-400 w-20 h-10 flex items-center justify-center hover:bg-gray-200"
      onClick={() => setEditing(true)}
    >
      {editing ? (
        <input
          type="text"
          defaultValue={cells[index] || ''}
          onBlur={handleBlur}
          className="w-full h-full text-center outline-none"
          autoFocus
        />
      ) : (
        <span>{cells[index] || ''}</span>
      )}
    </div>
  );
};

export default Grid;
