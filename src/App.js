import './App.css';
import CategorySelection from "./pages/CategorySelection";
import CityGuessGame from "./pages/CityGuessGame";
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/categories" element={<CategorySelection />} />
          <Route path="/top" element={<CityGuessGame />} />
          <Route path="/" element={<Navigate to="/categories" replace />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
