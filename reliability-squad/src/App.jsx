import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PCP03 from './pages/PCP03';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<PCP03 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
