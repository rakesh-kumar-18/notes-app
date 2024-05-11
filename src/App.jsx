import { useEffect, useState } from 'react';
import './App.css';
import LeftColumn from './components/LeftColumn/LeftColumn';
import { NoteContextProvider } from './context/NoteContext';
import NoteArea from './components/NoteArea/NoteArea';

function App() {
  const [modal, setModal] = useState(false);
  const groups = localStorage.getItem("groups");

  const [noteTitles, setNoteTitles] = useState(
    groups ? JSON.parse(groups) : ""
  );

  const [selectedGroup, setSelectedGroup] = useState("");
  const [hide, setHide] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const toggleScreen = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth > 768) {
        setHide(false);
      }
    };

    window.addEventListener("resize", toggleScreen);

    return () => {
      window.removeEventListener("resize", toggleScreen);
    };
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <NoteContextProvider value={{ modal, setModal, noteTitles, setNoteTitles, selectedGroup, setSelectedGroup, hide, setHide, isMobile, setIsMobile }}>
        <LeftColumn />
        <NoteArea />
      </NoteContextProvider>
    </div>
  );
}

export default App;