"use client";

// import useSpreadsheetStore from '../store/useSpreadsheetStore';

// const Spreadsheet = () => {
//   const { gridData, selectedCell, cellFormat, setGridData, setSelectedCell, setCellFormat } = useSpreadsheetStore();

//   const handleCellChange = (e, rowIndex, colIndex) => {
//     const newGridData = gridData.map((row, rIdx) =>
//       row.map((cell, cIdx) =>
//         rIdx === rowIndex && cIdx === colIndex ? e.target.value : cell
//       )
//     );
//     setGridData(newGridData);
//   };

//   const handleCellClick = (rowIndex, colIndex) => {
//     setSelectedCell(`${rowIndex}-${colIndex}`);
//   };

//   const handleFormatChange = (e) => {
//     const { name, value } = e.target;
//     setCellFormat((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="p-4 overflow-auto">
//       <div>
//         <label>
//           Text Alignment:
//           <select name="alignment" value={cellFormat.alignment} onChange={handleFormatChange}>
//             <option value="left">Left</option>
//             <option value="center">Center</option>
//             <option value="right">Right</option>
//           </select>
//         </label>
//         <label>
//           Font Size:
//           <input
//             type="number"
//             name="fontSize"
//             value={parseInt(cellFormat.fontSize, 10)}
//             onChange={handleFormatChange}
//           />
//         </label>
//       </div>
//       <div
//         className="grid gap-0.5"
//         style={{
//           gridTemplateColumns: `repeat(${gridData[0].length}, minmax(50px, 1fr))`,
//           borderCollapse: 'collapse',
//         }}
//       >
//         {gridData.map((row, rowIndex) =>
//           row.map((cell, colIndex) => (
//             <input
//               key={`${rowIndex}-${colIndex}`}
//               className={`p-2 text-center outline-none border ${
//                 selectedCell === `${rowIndex}-${colIndex}`
//                   ? 'border-blue-500'
//                   : 'border-black'
//               }`}
//               value={cell}
//               onChange={(e) => handleCellChange(e, rowIndex, colIndex)}
//               onClick={() => handleCellClick(rowIndex, colIndex)}
//               style={{
//                 width: '100%',
//                 height: '30px',
//                 borderWidth: '1px',
//                 boxSizing: 'border-box',
//                 textAlign: cellFormat.alignment,
//                 fontSize: cellFormat.fontSize,
//               }}
//             />
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Spreadsheet;

// NEW ************
// import useSpreadsheetStore from '../store/useSpreadsheetStore';

// const Spreadsheet = () => {
//   const { gridData, selectedCell, cellFormat, setGridData, setSelectedCell, setCellFormat } = useSpreadsheetStore();

//   const handleCellChange = (e, rowIndex, colIndex) => {
//     const newGridData = gridData.map((row, rIdx) =>
//       row.map((cell, cIdx) =>
//         rIdx === rowIndex && cIdx === colIndex ? { ...cell, value: e.target.value } : cell
//       )
//     );
//     setGridData(newGridData);
//   };

//   const handleCellClick = (rowIndex, colIndex) => {
//     setSelectedCell(`${rowIndex}-${colIndex}`);
//   };

//   const handleFormatChange = (e) => {
//     const { name, value } = e.target;
//     setCellFormat((prev) => ({
//       ...prev,
//       [name]: name === 'fontSize' && value ? `${value}px` : value, // Add 'px' to fontSize if value is not empty
//     }));
//   };

//   return (
//     <div className="p-4 overflow-auto">
//       <div className="mb-4">
//         <label className="mr-4">
//           Text Alignment:
//           <select name="alignment" value={cellFormat.alignment} onChange={handleFormatChange} className="ml-2">
//             <option value="left">Left</option>
//             <option value="center">Center</option>
//             <option value="right">Right</option>
//           </select>
//         </label>
//         <label>
//           Font Size:
//           <input
//             type="number"
//             name="fontSize"
//             value={cellFormat.fontSize ? parseInt(cellFormat.fontSize, 10) : ''}
//             onChange={handleFormatChange}
//             className="ml-2 w-20"
//           />
//         </label>
//       </div>
//       <div
//         className="grid gap-0.5"
//         style={{
//           gridTemplateColumns: `repeat(${gridData[0].length}, minmax(50px, 1fr))`,
//           borderCollapse: 'collapse',
//         }}
//       >
//         {gridData.map((row, rowIndex) =>
//           row.map((cell, colIndex) => (
//             <input
//               key={`${rowIndex}-${colIndex}`}
//               className={`p-2 text-center outline-none border ${
//                 selectedCell === `${rowIndex}-${colIndex}`
//                   ? 'border-blue-500'
//                   : 'border-black'
//               }`}
//               value={cell.value}
//               onChange={(e) => handleCellChange(e, rowIndex, colIndex)}
//               onClick={() => handleCellClick(rowIndex, colIndex)}
//               style={{
//                 width: '100%',
//                 height: '30px',
//                 borderWidth: '1px',
//                 boxSizing: 'border-box',
//                 textAlign: cellFormat.alignment,
//                 fontSize: cellFormat.fontSize || '16px', // Default to '16px' if no fontSize is set
//               }}
//             />
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Spreadsheet;



import useSpreadsheetStore from '../store/useSpreadsheetStore';
import { useState } from 'react';

const Spreadsheet = () => {
  const { gridData, selectedCell, cellFormat, setGridData, setSelectedCell, setCellFormat } = useSpreadsheetStore();
  const [inputFontSize, setInputFontSize] = useState(cellFormat.fontSize ? parseInt(cellFormat.fontSize, 10) : '');

  const handleCellChange = (e, rowIndex, colIndex) => {
    const newGridData = gridData.map((row, rIdx) =>
      row.map((cell, cIdx) =>
        rIdx === rowIndex && cIdx === colIndex ? { ...cell, value: e.target.value } : cell
      )
    );
    setGridData(newGridData);
  };

  const handleCellClick = (rowIndex, colIndex) => {
    setSelectedCell(`${rowIndex}-${colIndex}`);
  };

  const handleFontSizeChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setInputFontSize(value);
    }
  };

  const applyFontSizeChange = () => {
    setCellFormat((prev) => ({
      ...prev,
      fontSize: inputFontSize ? `${inputFontSize}px` : '16px',
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      applyFontSizeChange();
    }
  };

  return (
    <div className="p-4 overflow-auto">
      <div className="mb-4 flex items-center space-x-4">
        <label className="flex items-center space-x-2">
          <span className="text-lg font-semibold">Text Alignment:</span>
          <select
            name="alignment"
            value={cellFormat.alignment}
            onChange={(e) => setCellFormat((prev) => ({ ...prev, alignment: e.target.value }))}
            className="p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </label>
        <label className="flex items-center space-x-2">
          <span className="text-lg font-semibold">Font Size:</span>
          <input
            type="text"
            value={inputFontSize}
            onChange={handleFontSizeChange}
            onKeyPress={handleKeyPress}
            className="p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 w-24"
            placeholder="e.g., 16"
          />
          <button
            onClick={applyFontSizeChange}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
          >
            Apply
          </button>
        </label>
      </div>
      <div
        className="grid gap-0.5"
        style={{
          gridTemplateColumns: `repeat(${gridData[0].length}, minmax(50px, 1fr))`,
          borderCollapse: 'collapse',
        }}
      >
        {gridData.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <input
              key={`${rowIndex}-${colIndex}`}
              className={`p-2 text-center outline-none border ${
                selectedCell === `${rowIndex}-${colIndex}`
                  ? 'border-blue-500'
                  : 'border-black'
              }`}
              value={cell.value}
              onChange={(e) => handleCellChange(e, rowIndex, colIndex)}
              onClick={() => handleCellClick(rowIndex, colIndex)}
              style={{
                width: '100%',
                height: '30px',
                borderWidth: '1px',
                boxSizing: 'border-box',
                textAlign: cellFormat.alignment,
                fontSize: cellFormat.fontSize || '16px',
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Spreadsheet;
