const [searchTerm, setSearchTerm] = useState('');

const filteredGridData = gridData.map(row =>
  row.filter(cell => cell.includes(searchTerm))
);

return (
  <div className="p-4 overflow-auto">
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <div
      className="grid gap-0.5"
      style={{
        gridTemplateColumns: `repeat(${filteredGridData[0].length}, minmax(50px, 1fr))`,
        borderCollapse: 'collapse',
      }}
    >
      {filteredGridData.map((row, rowIndex) =>
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
  </div>
);
