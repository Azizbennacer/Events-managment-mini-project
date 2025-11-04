import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import AddEvent from './components/AddEvent';
import UpdateEvent from './components/UpdateEvent';
import { Events } from './components/Events';
import Home from './components/Home'; 
import logo from './logo.svg';

function App() {
  return (
    <Router>
      <div className="App">
        <main className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/add" element={<AddEvent />} />
            <Route path="/events/:id/updateEvent" element={<UpdateEvent />} />
          </Routes>
        </main>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NavigationBar />
        </header>

        
      </div>
    </Router>
  );
}

export default App;
