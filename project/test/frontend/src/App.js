import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Navbar from './components/NavBar';
import Read from './components/Read';
import Update from './components/Update';
import Delete from './components/Delete';

function App() {
  const leftDrawerWidth = 210;
  return (
    <div className="App">

        <Navbar
          drawerWidth={leftDrawerWidth}
          content={
            <Routes>
              <Route path="" element={<Home/>} />
              <Route path="/create" element={<Create/>} />
              <Route path="/read" element={<Read/>} />
              <Route path="/update" element={<Update/>} />
              <Route path="/delete" element={<Delete/>} />
            </Routes>}
          />

    </div>
  );
}

export default App;
