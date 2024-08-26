const [currentPage, setCurrentPage] = useState(1);
const rowsPerPage = 10;

const paginatedData = gridData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

return (
  <div className="p-4 overflow-auto">
    <div
      className="grid gap-0.5"
      style={{
        gridTemplateColumns: `repeat(${gridData[0].length}, minmax(50px, 1fr))`,
        borderCollapse: 'collapse',
      }}
    >
      {paginatedData.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <input
            key={`${rowIndex}-${colIndex}`}
            className={`p-2 text-center outline-none border ${
              selectedCell === `${rowIndex}-${colIndex}`
                ? 'border-blue-500'
                : 'border-black'
            }`}
            value={cell}
            onChange={(e) => handleCellChange(e, rowIndex, colIndex)}
            onClick={() => handleCellClick(rowIndex, colIndex)}
            style={{
              width: '100%',
              height: '30px',
              borderWidth: '1px',
              boxSizing: 'border-box',
              textAlign: cellFormat.alignment,
              fontSize: cellFormat.fontSize,
            }}
          />
        ))
      )}
    </div>
    <div className="mt-4">
      <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>Previous</button>
      <button onClick={() => setCurrentPage(prev => prev + 1)}>Next</button>
    </div>
  </div>
);
