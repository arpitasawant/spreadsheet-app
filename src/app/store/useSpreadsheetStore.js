import create from 'zustand';

const useSpreadsheetStore = create((set) => ({
  gridData: Array(20).fill(Array(14).fill({ value: '' })),
  selectedCell: null,
  cellFormat: {
    alignment: 'center',
    fontSize: '16px', // Font size with 'px'
  },
  setGridData: (data) => set({ gridData: data }),
  setSelectedCell: (cell) => set({ selectedCell: cell }),
  setCellFormat: (format) => set({ cellFormat: format }),
}));

export default useSpreadsheetStore;




