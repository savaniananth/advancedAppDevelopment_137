import { useState } from 'react';
import { useSelector } from 'react-redux';
import ResponsiveAppBar from '../../components/ui/navbar';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBBtn, MDBInput } from 'mdb-react-ui-kit';

const Profile = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);

    // Dummy data for applied job (replace with actual data from your Redux store)
    const [appliedJob, setAppliedJob] = useState({
        id: 1,
        title: "Software Engineer",
        company: "Google",
        description: "Job description for software engineer position at Google.",
        location: "Mountain View, CA",
        image: "https://via.placeholder.com/150",
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAppliedJob({
            ...appliedJob,
            [name]: value,
        });
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        // Here you can dispatch an action to update the job details in your Redux store/database
    };

    // Render profile information if user is authenticated
    if (isAuthenticated) {
        return (
            <>
                <ResponsiveAppBar />
                <div className="welcome-message">
                    <h5 className='mt-3'>Welcome , {user.username} !</h5>
                </div>  
                <MDBContainer className="my-4">
                    <MDBRow>
                        {/* Left Card for Profile Picture and Name */}
                        <MDBCol md="6">
                            <MDBCard className="mb-4">
                                <MDBCardBody>
                                    {/* Placeholder for Profile Picture (Avatar) */}
                                    <MDBCardImage src="https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg" alt="Profile Picture" className="rounded-circle" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                                    {/* Display Name */}
                                    <h5 className="mt-3">{user.username}</h5>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        {/* Right Card for Email */}
                        <MDBCol md="6">
                            <MDBCard className="mb-4">
                                <MDBCardBody>
                                    {/* Display Email */}
                                    <h5>Email: {user.email}</h5>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                {/* Card for displaying applied job */}
                <MDBContainer className="my-4">
                    <MDBCard>
                        <MDBCardBody>
                            <h5>Applied Job</h5>
                            {isEditing ? (
                                <>
                                    <MDBInput label="Title" name="title" value={appliedJob.title} onChange={handleInputChange} />
                                    <MDBInput label="Company" name="company" value={appliedJob.company} onChange={handleInputChange} />
                                    <MDBInput label="Description" name="description" value={appliedJob.description} onChange={handleInputChange} />
                                    <MDBInput label="Location" name="location" value={appliedJob.location} onChange={handleInputChange} />
                                </>
                            ) : (
                                <>
                                    <p>Title: {appliedJob.title}</p>
                                    <p>Company: {appliedJob.company}</p>
                                    <p>Description: {appliedJob.description}</p>
                                    <p>Location: {appliedJob.location}</p>
                                </>
                            )}
                            {/* You can add more job details here */}

                            {/* Buttons */}
                            <div className="d-flex justify-content-end">
                                {isEditing ? (
                                    <MDBBtn className="me-2" color="success" onClick={handleSaveClick}>Save</MDBBtn>
                                ) : (
                                    <>
                                        {/* <MDBBtn className="me-2" color="danger">Unapply</MDBBtn> */}
                                        <MDBBtn color="secondary" onClick={handleEditClick}>Edit</MDBBtn>
                                    </>
                                )}
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBContainer>
            </>
        );
    } else {
        // Render a message prompting the user to log in
        return (
            <>
                <MDBContainer className="my-4">
                    <div className="message-container">
                        <h2>Please log in to view your profile.</h2>
                    </div>
                </MDBContainer>
            </>
        );
    }
};

export default Profile;
