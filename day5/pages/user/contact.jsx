import ResponsiveAppBar from '../../components/ui/navbar';
import { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn, MDBCollapse, MDBCardHeader, MDBIcon } from 'mdb-react-ui-kit';


const ContactUs = () => {
    const [faqOpen, setFaqOpen] = useState(false);

    const toggleFaq = () => {
        setFaqOpen(!faqOpen);
    };

    return (
        <>
            <ResponsiveAppBar />
            <MDBContainer className="my-4">
                {/* FAQ Section */}
                <MDBCard className="mt-4">
                    <MDBCardHeader onClick={toggleFaq} className="text-primary" style={{ cursor: 'pointer' }}>
                        <h5 className="mb-0">
                            <MDBIcon icon={faqOpen ? 'angle-up' : 'angle-down'} className="me-2" />
                            FAQ
                        </h5>
                    </MDBCardHeader>
                    <MDBCollapse show={faqOpen}>
                        <MDBCardBody>
                            <h6>How can I search for jobs on this website?</h6>
                            <p>To search for jobs on our website, you can use the search bar at the top of the page. Enter keywords related to the job youre looking for and press Enter. You can also browse through job categories to find relevant listings.</p>

                            <h6>Can I apply for jobs directly through this website?</h6>
                            <p>Yes, you can apply for jobs directly through our website. Once you find a job listing youre interested in, click on the Apply Nowbutton to submit your application. Make sure to fill out all required fields in the application form.</p>

                            {/* Add more FAQ items as needed */}
                        </MDBCardBody>
                    </MDBCollapse>
                </MDBCard>

                {/* Contact Form */}
                <MDBCard>
                    <MDBCardBody>
                        <h5>Contact Us</h5>
                        <form>
                            <MDBRow className="mb-3">
                                <MDBCol>
                                    <div className="form-outline">
                                        <input type="text" id="form4Example1" className="form-control" />
                                        <label className="form-label" htmlFor="form4Example1">Your Name</label>
                                    </div>
                                </MDBCol>
                                <MDBCol>
                                    <div className="form-outline">
                                        <input type="email" id="form4Example2" className="form-control" />
                                        <label className="form-label" htmlFor="form4Example2">Your Email</label>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mb-3">
                                <MDBCol>
                                    <div className="form-outline">
                                        <input type="text" id="form4Example3" className="form-control" />
                                        <label className="form-label" htmlFor="form4Example3">Subject</label>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mb-3">
                                <MDBCol>
                                    <div className="form-outline">
                                        <textarea className="form-control" id="form4Example4" rows="4"></textarea>
                                        <label className="form-label" htmlFor="form4Example4">Message</label>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBBtn color="primary" type="submit">Submit</MDBBtn>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </>
    );
};

export default ContactUs;
