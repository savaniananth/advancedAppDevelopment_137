import { lazy } from 'react';
import '/app.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import LazyLayout from './components/ui/LazyLayout';
// import applyjob from './pages/user/applyjob.jsx';
const LazySignUpPage=lazy(()=>import('./pages/auth/signin.jsx'));
const LazyRegistrationPage=lazy(()=>import('./pages/auth/register.jsx'));
const LazyHome=lazy(()=>import('./pages/user/homepage.jsx'));
const LazyProfile=lazy(()=>import('./pages/user/profile.jsx'));
const LazyJobListings=lazy(()=>import('./pages/user/joblisitings.jsx'));
const LazyJob1=lazy(()=>import('./pages/user/jobdetails1.jsx'));
const LazyJob2=lazy(()=>import('./pages/user/jobdetail2.jsx'));
const LazyAdmin=lazy(()=>import('./pages/admin/admin.jsx'));
const LazyLogout=lazy(()=>import('./pages/auth/signin.jsx'));
const LazyApply=lazy(()=>import ('./pages/user/applyjob.jsx'))
const LazyContact=lazy(()=>import ('./pages/user/contact.jsx'))

const App = () => {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<LazyLayout component={LazySignUpPage}/>}/>
      {/* <Route  path='/' element={<LazyLayout component={LazySignUpPage}/>}/> */}
      <Route  path='/reg' element={<LazyLayout component={LazyRegistrationPage}/>}/>
      <Route  path='/home' element={<LazyLayout component={LazyHome}/>}/>
      <Route  path='/profile' element={<LazyLayout component={LazyProfile}/>}/>
      <Route path='/joblisting' element={<LazyLayout component={LazyJobListings}/>}/>
      <Route path='/job/1' element={<LazyLayout component={LazyJob1}/>}></Route>
      <Route path='/job/2' element={<LazyLayout component={LazyJob2}/>}></Route>
      <Route path='/admin' element={<LazyLayout component={LazyAdmin}/>}></Route>
      <Route path='/logout' element={<LazyLayout component={LazyLogout}/>}></Route>
      <Route path='/apply' element={<LazyLayout component={LazyApply}/>}></Route>
      <Route path='/contact' element={<LazyLayout component={LazyContact}/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
