import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <MDBContainer fluid>
      <MDBCard className='text-black m-5' style={{borderRadius: '25px', boxShadow: '0 0 2px black'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='form1' type='text' className='w-100'/>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='form2' type='email'/>
              </div>
              {/* <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="calendar-alt me-3" size='lg'/>
                <MDBInput label='Date of Birth' id='dob' type='date'/>
              </div> */}
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password'/>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Confrim Password' id='form4' type='password'/>
              </div>
              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I Agree to terms and conditions' />
              </div>
              <MDBBtn className='mb-4' size='lg' style={{ backgroundColor: 'black', boxShadow: '0 0 5px black' }}>Register</MDBBtn>
              <div>
               <nav>
              <p className="text-center">Already have an account?
                <Link to='/'>
               Sign in here
               </Link>
               </p>
               </nav>

              </div>
            </MDBCol>
            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='src\assets\images\joblink express.png' fluid/>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default App;
