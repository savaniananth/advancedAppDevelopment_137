import ResponsiveAppBar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../assets/css/homepage.css';
import backgroundImg from '../../assets/images/bck.jpg'


const Homepage = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImg})` }}>
      <ResponsiveAppBar />
      <section className="home" id="home">
        <Container fluid>
          <Row className="home__container">
            <Col md={6}>
              <div className="home__data">
                <div className='content'>
                  <img src="" alt="" className="home__img" />
                  <h1 className="home__title">Welcome to JoblinkExpress</h1>
                </div>
                <h2 className="home__subtitle">Find your dream job with us.</h2>
                <Button className="button">Search</Button>
              </div>
            </Col>
            <Col md={6}>
              <img src="src\assets\images\joblink_express.png" alt="k" className="home__img" />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer/>
    </div>
  );
}

export default Homepage;
