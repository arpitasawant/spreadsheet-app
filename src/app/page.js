
"use client";
import './styles/globals.css';
import { useState } from 'react';
import Spreadsheet from './components/Spreadsheet';
import useSpreadsheetStore from './store/useSpreadsheetStore'

export default function Home() {
  const { setGridData } = useSpreadsheetStore();
  const [numRows, setNumRows] = useState(20);
  const [numCols, setNumCols] = useState(14);

  const initializeGrid = () => {
    const initialData = Array(numRows).fill(
      Array(numCols).fill({ value: '', validation: 'text' })
    );
    setGridData(initialData);
  };

  return (
    <div>
      <h1 className="text-center text-2xl my-4">Spreadsheet</h1>
      <div className="text-center mb-4">
        <button onClick={initializeGrid} className="bg-blue-500 text-white p-2 rounded">
          Initialize Grid
        </button>
      </div>
      <Spreadsheet />
    </div>
  );
}
