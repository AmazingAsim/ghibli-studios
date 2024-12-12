import './App.css';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Navbar from './pages/Navbar';
import {useSum} from './hooks/Sum'
function App() {
  console.log(useSum(4,4,4,4))
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

