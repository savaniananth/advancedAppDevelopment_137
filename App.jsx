import { lazy } from 'react';
import '/app.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import LazyLayout from './components/ui/LazyLayout';
const LazySignUpPage=lazy(()=>import('./pages/auth/signin.jsx'));
const LazyRegistrationPage=lazy(()=>import('./pages/auth/register.jsx'));
const App = () => {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<LazyLayout component={LazySignUpPage}/>}/>
      {/* <Route  path='/' element={<LazyLayout component={LazySignUpPage}/>}/> */}
      <Route  path='/reg' element={<LazyLayout component={LazyRegistrationPage}/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
