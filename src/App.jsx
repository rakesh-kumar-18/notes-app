import { useState } from 'react';
import './App.css';
import LeftColumn from './components/LeftColumn';
import { NoteContextProvider } from './context/NoteContext';
// import NoteArea from './components/NoteArea';
// import RightColumn from './components/RightColumn';

function App() {
  const [noteTitle, setNoteTitle] = useState();

  return (
    <div style={{ display: "flex" }}>
      <NoteContextProvider value={{ noteTitle, setNoteTitle }}>
        <LeftColumn />
        {/* <RightColumn /> */}
        {/* <NoteArea /> */}
      </NoteContextProvider>
    </div>
  );
}

export default App;