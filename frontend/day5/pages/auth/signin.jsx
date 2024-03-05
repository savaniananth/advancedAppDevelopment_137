import  { useState } from 'react'; // Import React and useState
import { useDispatch } from 'react-redux';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import loginUser from '../../assets/redux/action';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // State to store input values
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    // Prepare user data from input values
    const userData = {
      username: username,
      email: email,
    };

    // Dispatch the loginUser action with user data
    dispatch(loginUser(userData));

    // Navigate to the home page
    navigate('/home');
  };

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
              {/* Update input fields to capture user input */}
              <MDBInput wrapperClass='mb-4' label='Name' id='username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
              <MDBInput wrapperClass='mb-4' label='Email' id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password'/>
              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I Agree to Terms and Conditions' />
              </div>
              <MDBBtn className='w-100 mb-4' onClick={handleLogin} style={{ background: 'black' }}>Login</MDBBtn>
              <nav>
                <p>Dont have an account
                  <Link to="/reg">Register here</Link>
                </p>
              </nav>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
