import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  // MDBIcon
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function  App() {
  return (
    <MDBContainer fluid className='p-4 d-flex align-items-center justify-content-center' style={{ height: '100vh', width: '70%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', border: '1px solid #ccc', borderRadius: '10px' }}>


      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
           JobLink <br />
            <span className="text-primary">Express</span>
          </h1>

          <p className='px-3' style={{color: 'black'}}>
          Unlock Your Career Potential with JobLink Express - Where Opportunities Meet Aspirations
          Join JobLink Express Today and Discover Your Path to Professional Success!
          </p>

        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5' style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
          <MDBCardBody className='p-5' style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>


              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                {/* <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
                </MDBCol> */}
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I Agree to Terms and Conditions' />
              </div>

              <MDBBtn className='w-100 mb-4' style={{ background: 'black' }}>Login</MDBBtn>
              <nav>
              <p>Dont have an account
                  <Link to="/reg">
                Register here
                </Link>
                </p>
              </nav>
{/* 
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

              </div> */}

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App;
