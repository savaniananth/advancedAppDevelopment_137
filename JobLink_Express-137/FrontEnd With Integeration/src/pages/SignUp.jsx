
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

function SignU() {


  const[name,setUsername]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[role,setRole]=useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
      e.preventDefault();
      try{
          
         if(email.trim().includes('@admin.com')){
          setRole('admin');
         }    
         else{
          setRole('user');
         }    

         const response= await axios.post(`http://localhost:8081/api/v1/auth/register`,{name:name,email: email, password: password ,role:role})
            const token = response.data.token;
            const id = response.data.id;
            console.log(email);
            console.log(token);
            localStorage.setItem('jwtToken', token);
            if(response.status==200 && email.trim().includes('@admin.com'))
            navigate('/admindash');
          else
          navigate('/userdash');
      
          toast.success("Registered Successfully");
          }
      // }
      catch(error) {
    console.error('Error sending data:', error);
  }
  }

  
  return (
    <MDBContainer fluid className='p-4'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            The best offer <br />
            <span className="text-primary">for your business</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
           
Welcome back! Please log in to your account to access your personalized job search experience. Whether you're looking for your next career move or exploring new opportunities, our platform offers a seamless and tailored experience to help you achieve your professional goals.
          </p>

        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' value={name} onChange={(e)=>{setUsername(e.target.value)}}/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text' />
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>
              <Link to="/">
              
              <button type="submit" className='w-100 mb-4' onClick={handleSubmit} >Sign Up</button>
              </Link>
              

              <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default SignU;