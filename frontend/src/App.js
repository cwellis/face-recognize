import './App.css';
import Navigation from './components/Navigation/Navigation';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';

window.process = {
  env: {
    NODE_ENV: 'development'
  }
}


const App = () => {

  return (
    <>
      <Router>

        <div className="App">
          <ParticlesBackground />
          <Navigation />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>

      </Router>
    </>
  );
}

export default App;
