import { useEffect, useState } from 'react';
import './App.css';
import LeftColumn from './components/LeftColumn/LeftColumn';
import { NoteContextProvider } from './context/NoteContext';
// import NoteArea from './components/NoteArea';
// import RightColumn from './components/RightColumn';

function App() {
  const [modal, setModal] = useState(false);
  const groups = localStorage.getItem("groups");

  const [noteTitles, setNoteTitles] = useState(
    groups ? JSON.parse(groups) : ""
  );

  const [selectedGroup, setSelecetedGroup] = useState("");
  const [hide, setHide] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScreen = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth > 768) {
        setHide(false);
      }
    };

    window.addEventListener("resize", handleScreen);

    return () => {
      window.removeEventListener("resize", handleScreen);
    };
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <NoteContextProvider value={{ modal, setModal, noteTitles, setNoteTitles, selectedGroup, setSelecetedGroup, hide, setHide, isMobile, setIsMobile }}>
        <LeftColumn />
        {/* <RightColumn /> */}
        {/* <NoteArea /> */}
      </NoteContextProvider>
    </div>
  );
}

export default App;