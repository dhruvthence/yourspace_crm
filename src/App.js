import { Routes, Route, BrowserRouter } from "react-router-dom"
import ResidentList from "./pages/residents/ResidentList";
import ResidentDetails from "./pages/residents/ResidentDetails";

// CSS
import './css/bootstrap.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<ResidentList />} />
            <Route path="residents" element={<ResidentList />} />
            <Route path="residents-details/:residentId" element={<ResidentDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
