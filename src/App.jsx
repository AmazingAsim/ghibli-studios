import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Navbar from './pages/Navbar';
import {useSum} from './hooks/Sum'
function App() {
  console.log(useSum(4,4,4,4))
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

