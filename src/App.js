import { Routes, Route } from "react-router-dom";
import "./App.css";
import PageNotFound from "./components/404Page";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
