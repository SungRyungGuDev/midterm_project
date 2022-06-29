import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import Students from './component/StudentList';



function App() {
  return (
    <Router>
      <div className="App">
        <div className="list">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/card">Student Cards</Link>
          </li>
        </ul>
        </div>
        <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/about' element={<About />}></Route>
                <Route exact path='/contact' element={<Contact />}></Route>
                <Route exact path='/card' element={<Students />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
