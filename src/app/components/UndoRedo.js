"use client";

const [history, setHistory] = useState([]);
const [redoStack, setRedoStack] = useState([]);

const addToHistory = (state) => {
  setHistory([...history, state]);
  setRedoStack([]);
};

const undo = () => {
  if (history.length > 0) {
    const previousState = history.pop();
    setRedoStack([gridData, ...redoStack]);
    setGridData(previousState);
  }
};

const redo = () => {
  if (redoStack.length > 0) {
    const nextState = redoStack.shift();
    setHistory([...history, gridData]);
    setGridData(nextState);
  }
};


