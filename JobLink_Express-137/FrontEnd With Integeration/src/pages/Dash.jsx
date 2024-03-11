import React from 'react';
import { useSelector } from 'react-redux';
import AdminDash from './AdminDash'; 
import UserDash from './UserDash'; 
import NotFound from './NotFound';


const Dash = () => {
  

  const Checkrole = useSelector(state => state.allroles.roles[0]?.Checkrole); 

  if (Checkrole === 'admin') {
    return <AdminDash />;
  } else if (Checkrole === 'user') {
    return <UserDash />;
  } else {
    
    return <NotFound />;
  }
};

export default Dash;
