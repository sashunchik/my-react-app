import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Aside from './components/Aside';
import Home from './pages/Home';
import Prepared from './pages/Prepared';
import Available from './pages/Available';
import ToBelearnt from './pages/ToBelearnt';
import MoreInfo from './pages/MoreInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <div className="app-container">
          <Aside />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prepared" element={<Prepared />} />
            <Route path="/available" element={<Available />} />
            <Route path="/to-be-learnt" element={<ToBelearnt />} />
            <Route path="/more-info" element={<MoreInfo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
