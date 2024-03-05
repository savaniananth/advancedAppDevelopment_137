import { MDBFooter,
  //  MDBContainer,
    // MDBRow,
    //  MDBCol, 
    //  MDBIcon 
    } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='black' className='text-center text-lg-start text-muted' style={{ backgroundColor: 'white    ' }}>
      <div className='text-center p-4' style={{ backgroundColor: 'black' }}>
        © {new Date().getFullYear()} JobLink Express. All rights reserved.
      </div>
    </MDBFooter>
  );
}
