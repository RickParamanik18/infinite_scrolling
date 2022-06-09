import { useEffect, useState } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';


function App() {
  const [isAuth,setIsAuth] = useState(false)

  const changeIsAuth = (val)=>{
    setIsAuth(val)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login setIsAuth={changeIsAuth}/>}/>
        <Route path='/home' element={<Home isAuth={isAuth} setIsAuth={changeIsAuth}/>}/>
        <Route path='/*' element={<h1 className='h1 text-center'>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
