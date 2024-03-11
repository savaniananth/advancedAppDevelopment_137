import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function AddPremiumJob() {
    const handleSubmit = (event) => {
        event.preventDefault(); 

        
        const formData = {
            industry,
            jobId,
            carrerLevel,
            city,
            deadLine,
            email,
            experience,
            jobDescription,
            jobTitle,
            jobType,
            qualification,
            salary,
            specialisms,
            userName,
            country,
            fullAddress,
            zipCode,
            latitude,
            longitude
        };

        console.log(formData)
        const requiredFields = ['jobTitle', 'jobDescription', 'email', 'userName'];
    const emptyRequiredFields = requiredFields.filter(field => !formData[field]);

    if (emptyRequiredFields.length > 0) {
        toast.error('Some required fields are empty.');
        console.error('Some required fields are empty:', emptyRequiredFields);
        return;
    }

        axios.post('http://localhost:8081/admin/premium/postJob', formData)
            .then(response => {
                toast.success('Successfully Applied!');
                console.log('Form data sent successfully:', response.data);
            })
            .catch(error => {
                
                console.error('Error sending form data:', error);
            });
            console.log(formData);
    };

    const [industry, setIndustry] = useState('');
    const handleIndustryChange = (event) => {
        setIndustry(event.target.value);
    };

    const [jobId, setJobId] = useState('');
    const handleJobId = (event) => {
        setJobId(event.target.value);
    };

    const [carrerLevel, setCareerLevel] = useState('');
    const handleCareerLevel = (event) => {
        setCareerLevel(event.target.value);
    };

    const [city, setCity] = useState('');
    const handleCity = (event) => {
        setCity(event.target.value);
    };

    const [deadLine, setDeadline] = useState('');
    const handleDeadline = (event) => {
        setDeadline(event.target.value);
    };

    const [email, setEmail] = useState('');
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const [experience, setExperience] = useState('');
    const handleExperience = (event) => {
        setExperience(event.target.value);
    };

    const [jobDescription, setJobDescription] = useState('');
    const handleJobDescription = (event) => {
        setJobDescription(event.target.value);
    };

    const [jobTitle, setJobTitle] = useState('');
    const handleJobTitleChange = (event) => {
        setJobTitle(event.target.value);
    };

    const [jobType, setJobType] = useState('');
    const handleJobType = (event) => {
        setJobType(event.target.value);
    };

    const [qualification, setQualification] = useState('');
    const handleQualification = (event) => {
        setQualification(event.target.value);
    };

    const [salary, setSalary] = useState('');
    const handleSalary = (event) => {
        setSalary(event.target.value);
    };

    const [specialisms, setSpecialisms] = useState('');
    const handleSpecialisms = (event) => {
        setSpecialisms(event.target.value);
    };

    const [userName, setUserName] = useState('');
    const handleUserName = (event) => {
        setUserName(event.target.value);
    };

    const [country, setCountry] = useState('');
    const [fullAddress, setFullAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleFullAddressChange = (event) => {
        setFullAddress(event.target.value);
    };

    const handleZipCodeChange = (event) => {
        setZipCode(event.target.value);
    };

    const handleLatitudeChange = (event) => {
        setLatitude(event.target.value);
    };

    const handleLongitudeChange = (event) => {
        setLongitude(event.target.value);
    };
  console.log("Desc",jobDescription);
  console.log("City",city);
  
    return ( <>
 <ToastContainer
		  position="top-center"
		  reverseOrder={false}/>
<a class="mobNavigation" data-bs-toggle="collapse" href="#MobNav" role="button" aria-expanded="false" aria-controls="MobNav">
                   <i class="fas fa-bars me-2"></i>Dashboard Navigation
               </a>
                    <div class="collapse" id="MobNav">
                       <div class="dashboard-nav">
                       <div class="dashboard-inner">
                       <ul data-submenu-title="Main Navigation">
								<li><Link to="/Dash">Dashboard</Link></li>
								<li><Link to="/BookMarkedResume">BookMarked Resumes</Link></li>
								<li><Link to="/JobApplicants">Job Applicants</Link></li>
							</ul>
							<ul data-submenu-title="Jobs Section">
								<li><Link to="/Admin_job_add">Add Free Jobs</Link></li>
								<li class="active"><Link to="/Add_Premium_Jobs">Add Premium Jobs</Link></li>
								<li><Link to="/View_Added_Jobs">View Free Jobs</Link></li>
								<li><a href="dashboard-add-resume.html">Edit Jobs</a></li>
								<li><Link to="/View_Premium_Jobs">View Premium Jobs</Link></li>
								
								
							</ul>
                        <ul data-submenu-title="My Accounts">
                          
                            <li><a href="dashboard-change-password.html">Change Password</a></li>
                            <li><a href="javascript:void(0);">Delete Account</a></li>
                            <li><a href="login.html">Log Out</a></li>
                        </ul>
                       </div>						
                       </div>
                   </div>
                   
                   <div className="dashboard-content" >
                <div className="dashboard-tlbar d-block mb-5">
                    <div className="row">
                        <div className="colxl-12 col-lg-12 col-md-12">
                            <h1 className="ft-medium">Post A New Premium Job</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item text-muted"><a href="">Home</a></li>
                                    <li className="breadcrumb-item text-muted"><a href="Dash">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="#" className="theme-cl">Post Premium Job</a></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                
                <div className="dashboard-widg-bar d-block">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="_dashboard_content bg-white rounded mb-4">
                                <div className="_dashboard_content_header br-bottom py-3 px-3">
                                    <div className="dashboard_header_flex">
                                        <h4 className="mb-0 ft-medium fs-md"><i className="fa fa-file mr-1 theme-cl fs-sm"></i>Post Job</h4>	
                                    </div>
                                </div>
                                
                                <div className="_dashboard_content_body py-3 px-3">
                                    <form className="row" onSubmit={handleSubmit}>
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="row">
                                            
                                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                                        <div className="form-group">
                                                            <label className="text-dark ft-medium">Job Title</label>
                                                            <input type="text"
                                                        value={jobTitle}
                                                        onChange={handleJobTitleChange}
                                                            name='Job Title'className="form-control rounded" placeholder="Title"/>
                                                        </div>
                                                    </div>
                                                
                                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <label className="text-dark ft-medium">Job Description</label>
                                                    <textarea 
                                                        value={jobDescription} 
                                                        onChange={handleJobDescription} 
                                                        name='Job Description' 
                                                        className="form-control rounded" 
                                                        placeholder="Job Description"
                                                    ></textarea>
                                                </div>
                                            </div>
                                                
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label className="text-dark ft-medium">Email Address</label>
                                                <input 
                                                    name='Email Address' 
                                                    type="text" 
                                                    className="form-control rounded" 
                                                    placeholder="Email"
                                                    value={email} 
                                                    onChange={handleEmail} 
                                                />
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label className="text-dark ft-medium">Username</label>
                                                <input 
                                                    name='Username' 
                                                    type="text" 
                                                    className="form-control rounded" 
                                                    placeholder="User"
                                                    value={userName} 
                                                    onChange={handleUserName}
                                                />
                                            </div>
                                        </div>
                                                
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label className="text-dark ft-medium">Specialisms</label>
                                            <select 
                                                name='Specialisms' 
                                                className="form-control rounded"
                                                value={specialisms} 
                                                onChange={handleSpecialisms} 
                                            >
                                                <option>Accounting</option>
                                                <option>Banking</option>
                                                <option>Software</option>
                                                <option>Hardware</option>
                                                <option>Hospital</option>
                                                <option>Fashion Design</option>
                                                <option>BPO Services</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label className="text-dark ft-medium">Industry</label>
                                            <select
                                                name='Industry'
                                                className="form-control rounded"
                                                value={industry}
                                                onChange={handleIndustryChange}
                                            >
                                                <option value="">Select an industry</option>
                                                <option value="IT & Software">IT & Software</option>
                                                <option value="Bank Services">Bank Services</option>
                                                <option value="Power Corporation">Power Corporation</option>
                                                <option value="Water Supply">Water Supply</option>
                                                <option value="Chemical Plant">Chemical Plant</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label className="text-dark ft-medium">Job Type</label>
                                            <select
                                                name='Job Type'
                                                className="form-control rounded"
                                                value={jobType}
                                                onChange={handleJobType}
                                            >
                                                <option>Full Time</option>
                                                <option>Part Time</option>
                                                <option>Internship</option>
                                                <option>Contract</option>
                                                <option>Freelancing</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label className="text-dark ft-medium">Career Level</label>
                                            <select
                                                name='CareerLevel'
                                                className="form-control rounded"
                                                value={carrerLevel}
                                                onChange={handleCareerLevel}
                                            >
                                                <option>Begginer</option>
                                                <option>Junior</option>
                                                <option>Manager</option>
                                                <option>Team leader</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Experience</label>
                                                        <select 
                                                            name='Experience' 
                                                            className="form-control rounded" 
                                                            value={experience} 
                                                            onChange={handleExperience}
                                                        >
                                                            <option>Begginer</option>
                                                            <option>0 To 6 Month</option>
                                                            <option>1 Years</option>
                                                            <option>2 Years</option>
                                                            <option>3 Years</option>
                                                            <option>4 Years</option>
                                                            <option>5+ Years</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Qualification</label>
                                                        <select 
                                                            name='Qualification' 
                                                            className="form-control rounded" 
                                                            value={qualification} 
                                                            onChange={handleQualification}
                                                        >
                                                            <option>Graduation</option>
                                                            <option>Master Degree</option>
                                                            <option>BPharma</option>
                                                            <option>P.H.D.</option>
                                                            <option>Other</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Application Deadline</label>
                                                        <input 
                                                            name='Application Deadline' 
                                                            type="date" 
                                                            className="form-control rounded" 
                                                            value={deadLine} 
                                                            onChange={handleDeadline} 
                                                            placeholder="dd-mm-yyyy"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-xl-4 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <label className="text-dark ft-medium">Expected Salary</label>
                                                    <input  
                                                        name='Expected Salary' 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="0" 
                                                        value={salary} 
                                                        onChange={handleSalary} 
                                                    />
                                                </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <label className="text-dark ft-medium">Country</label>
                                                    <input  
                                                        name='Country' 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="Country" 
                                                        value={country} 
                                                        onChange={handleCountryChange} 
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <label className="text-dark ft-medium">City</label>
                                                    <input 
                                                        name='City' 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="City" 
                                                        value={city} 
                                                        onChange={handleCityChange} 
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-xl-12 col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <label className="text-dark ft-medium">Full Address</label>
                                                    <input 
                                                        name='Full Address' 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="#10 Marke Juger, SBI Road" 
                                                        value={fullAddress} 
                                                        onChange={handleFullAddressChange} 
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-xl-4 col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <label className="text-dark ft-medium">Zip Code</label>
                                                    <input  
                                                        name='Zip Code' 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="Zip" 
                                                        value={zipCode} 
                                                        onChange={handleZipCodeChange} 
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-xl-4 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <label className="text-dark ft-medium">Latitude</label>
                                                    <input  
                                                        name='Latitude' 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="Latitude" 
                                                        value={latitude} 
                                                        onChange={handleLatitudeChange} 
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-xl-4 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <label className="text-dark ft-medium">Longitude</label>
                                                    <input  
                                                        name='Longitude' 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="Longitude" 
                                                        value={longitude} 
                                                        onChange={handleLongitudeChange} 
                                                    />
                                                </div>
                                            </div>
                          
                                                
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <button type="submit" className="btn btn-md ft-medium text-light rounded theme-bg" >Publish Job</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
           
                </div>
  
    </> );
}

export default AddPremiumJob;