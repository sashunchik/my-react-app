import './App.css';
import Header from './Header';
import Nav from './Nav';
import Aside from './Aside';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <div className="app-container">
        <Aside />
        <Main />
      </div>
    </div>
  );
}

export default App;
