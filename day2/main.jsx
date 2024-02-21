import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App';
// import RegistrationForm from './pages/auth/register'
// import SignUpPage from './pages/auth/signin'
import HomePage from './pages/homepage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RegistrationForm/> */}
    {/* <App/> */}
    <HomePage/>
  </React.StrictMode>,
)
