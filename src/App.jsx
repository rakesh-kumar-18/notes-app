import './App.css';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';

function App() {

  return (
    <div style={{ display: "flex" }}>
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

export default App;