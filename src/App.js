import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addproduct from './Components/Addproduct';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Mpesapayment from './Components/Mpesapayment';
import Getproducts from './Components/Getproducts';
import"bootstrap/dist/js/bootstrap.min.js";
import Aboutus from './Components/Aboutus';
function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <h1>Geegee Fitness</h1>
      </header>
      {/* <nav>
        <Link to={'/'} className='links'>Get products</Link>
        <Link to={'/addproducts'}className='links' >Add products</Link>
        <Link to={'/signin'}className='links' >Signin</Link>
        <Link to={'/signup'}className='links' >Signup</Link>
      </nav> */}
      <Routes>
      <Route path='/' element={<Getproducts/>}/>
      <Route path='/addproducts' element={<Addproduct/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/mpesapayment' element={<Mpesapayment/>}/>
      </Routes>
    </div>

    </Router>
  );
}

export default App;

