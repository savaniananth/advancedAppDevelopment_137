import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
// import ProfilePage from './pages/profile';
import App from './App';
// import JobListings from './pages/user/joblisitings';
// import JobDetails from './pages/jobdetails1';
// import { BrowserRouter } from 'react-router-dom';
// import JobListings from './pages/joblisitings';
// import JobDetails from './pages/jobdetails1';
// import JobDetails2 from './pages/jobdetail2';
// import RegistrationForm from './pages/auth/register'
// import SignUpPage from './pages/auth/signin'
// import HomePage from './pages/homepage';
// import AdminPage from './pages/admin/admin';
import { Provider } from 'react-redux';
import {store,persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// import Profile from './pages/profile';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <App/>
      </PersistGate>
    </Provider>
    {/* <AdminPage/> */}
    {/* <RegistrationForm/> */}
    {/* <App/> */}
     {/* <BrowserRouter> */}
    {/* <JobListings/> */}
     {/* </BrowserRouter> */}
    {/* <HomePage/> */}
  </React.StrictMode>,
)
