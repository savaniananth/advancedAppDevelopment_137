import axios from "axios";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function Resume_Add() {

    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[phoneNumber,setPhoneNumber]=useState(0);
    const[age,setAge]=useState(0);
    const[language,setLanguage]=useState('');
    const[middleName,setMiddleName]=useState('');
    const[preferingjob,setPreferingJob]=useState('');
    const[experience,setExperience]=useState('');
    const[aboutinfo,setTellAboutYourself]=useState('');
    const[fulladdress,setAddress]=useState('');
    const[facebook,setFacebook]=useState('');
    const[linkedin,setLinkedin]=useState('');
    const[twitter,setTwitter]=useState('');
    const[country,setCountry]=useState('');
    const[state,setState]=useState('');
    const[googleplus,setGooglePlus]=useState('');
    const[latitude,setLatitude]=useState('');
    const[longitude,setLongitude]=useState('');
   
    
    const handleSubmit = async(e)=>{
        e.preventDefault();
		if (!firstName || !middleName || !lastName || !preferingjob) {
			toast.error("Some fields are required fields.");
			return;
		}
        try{
            const response=await axios.post(`http://localhost:8081/user/resume/postresume`,{firstName,lastName,age,language,middleName,preferingjob,aboutinfo,
    fulladdress,facebook,linkedin,twitter,country,state,googleplus,latitude,longitude});
			toast.success("Resume Added SuccessFully")
            console.log('response',response.data);
            console.log(firstName,lastName);
        }
        catch(error) {
			console.error('Error sending data:', error);
			toast.error("Error in Resume Adding Resume")
		}
    }

    return ( <>
	 <ToastContainer
		  position="top-center"
		  reverseOrder={false}/>
    <div class="dashboard-wrap bg-light">
    <a class="mobNavigation" data-bs-toggle="collapse" href="#MobNav" role="button" aria-expanded="false" aria-controls="MobNav">
				<i class="fas fa-bars me-2"></i>Dashboard Navigation
			</a>
				 <div class="collapse" id="MobNav">
					<div class="dashboard-nav">
						<div class="dashboard-inner">
						<ul data-submenu-title="Main Navigation">
								<li ><Link to={"/Dash"}>Dashboard</Link></li>
								
								<li>
									<Link to={"/User_AddedJobs"}>
									Manage Resumes
									</Link>
								</li>
								<li class="active">
									<Link to={"/User_AddResume"}>
									Add Resume
									</Link>
								</li>
								<li>
									<Link to={"/User_AppliedJobs"}>
									Applied Jobs
									</Link>
								</li>
								
							</ul>
						
						</div>					
					</div>
				</div>  
				 
				
                <div class="dashboard-content">
					<div class="dashboard-tlbar d-block mb-5">
						<div class="row">
							<div class="colxl-12 col-lg-12 col-md-12">
								<h1 class="ft-medium">My Profile</h1>
								<nav aria-label="breadcrumb">
									<ol class="breadcrumb">
										<li class="breadcrumb-item text-muted"><a href="#">Home</a></li>
										<li class="breadcrumb-item text-muted"><a href="#">Dashboard</a></li>
										<li class="breadcrumb-item"><a href="#" class="theme-cl">Add Resume</a></li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
					
					<div class="dashboard-widg-bar d-block">
						<div class="row">
							<div class="col-xl-12 col-lg-12 col-md-12">
								<div class="_dashboard_content bg-white rounded mb-4">
									<div class="_dashboard_content_header br-bottom py-3 px-3">
										<div class="_dashboard__header_flex">
											<h4 class="mb-0 ft-medium fs-md">My Account</h4>	
										</div>
									</div>
									
									<div class="_dashboard_content_body py-3 px-3">
										<form class="row">
											<div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
												<div class="custom-file avater_uploads">
												  <input type="file" class="custom-file-input" id="customFile"/>
												  <label class="custom-file-label" for="customFile"><CgProfile 
                                                  size={150}
                                                   color="grey"
                                                  /></label>
												</div>
											</div>
											
											<div class="col-xl-9 col-lg-9 col-md-9 col-sm-12">
												<div class="row">
													<div class="col-xl-6 col-lg-6">
														<div class="form-group">
															<label class="text-dark ft-medium">First Name</label>
															<input type="text" class="form-control rounded" placeholder="First Name" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
														</div>
													</div>
													<div class="col-xl-6 col-lg-6">
														<div class="form-group">
															<label class="text-dark ft-medium">Middle Name</label>
															<input type="text" class="form-control rounded" placeholder="Middle Name" value={middleName} onChange={(e)=>{setMiddleName(e.target.value)}}/>
														</div>
													</div>
													<div class="col-xl-6 col-lg-6">
														<div class="form-group">
															<label class="text-dark ft-medium">Last Name</label>
															<input type="text" class="form-control rounded" placeholder="Last Name" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
														</div>
													</div>
													<div class="col-xl-6 col-lg-6">
														<div class="form-group">
															<label class="text-dark ft-medium">Prefering Job</label>
															<input type="text" class="form-control rounded" placeholder="Prefering Job" value={preferingjob} onChange={(e)=>{setPreferingJob(e.target.value)}}/>
														</div>
													</div>
													<div class="col-xl-6 col-lg-6">
														<div class="form-group">
															<label class="text-dark ft-medium">Age</label>
															<input type="Number" class="form-control rounded" placeholder="Age" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
														</div>
													</div>
													<div class="col-xl-6 col-lg-6">
														<div class="form-group">
															<label class="text-dark ft-medium">Language</label>
															<input type="email" class="form-control rounded" placeholder="e.x English, German" value={language} onChange={(e)=>{setLanguage(e.target.value)}}/>
														</div>
													</div>
													<div class="col-xl-12 col-lg-12">
														<div class="form-group">
															<label class="text-dark ft-medium">About Info</label>
															<textarea class="form-control with-light" value={aboutinfo} onChange={(e)=>{setTellAboutYourself(e.target.value)}}>Remove this Content..!!</textarea>
														</div>
													</div>
													
													
												
												</div>
											</div>
											
										</form>
									</div>
								</div>
							</div>
						</div>
						
						<div class="row">
							<div class="col-lg-12 col-md-12">
								<div class="_dashboard_content bg-white rounded mb-4">
									<div class="_dashboard_content_header br-bottom py-3 px-3">
										<div class="_dashboard__header_flex">
											<h4 class="mb-0 ft-medium fs-md">Social Accounts</h4>	
										</div>
									</div>
									
									<div class="_dashboard_content_body py-3 px-3">
										<form class="row">
											<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
												<div class="form-group">
													<label class="text-dark ft-medium">Facebook</label>
													<input type="text" class="form-control rounded" placeholder="https://www.facebook.com/" value={facebook} onChange={(e)=>{setFacebook(e.target.value)}}/>
												</div>
											</div>
											<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
												<div class="form-group">
													<label class="text-dark ft-medium">Twitter</label>
													<input type="text" class="form-control rounded" placeholder="https://www.twitter.com/"  value={twitter} onChange={(e)=>{setTwitter(e.target.value)}}/>
												</div>
											</div>
											<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
												<div class="form-group">
													<label class="text-dark ft-medium">LinkedIn</label>
													<input type="text" class="form-control rounded" placeholder="https://www.linkedin.com/" value={linkedin} onChange={(e)=>{setLinkedin(e.target.value)}}/>
												</div>
											</div>
											<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
												<div class="form-group">
													<label class="text-dark ft-medium">GooglePlus</label>
													<input type="text" class="form-control rounded" placeholder="https://www.gplus.com/"  value={googleplus} onChange={(e)=>{setGooglePlus(e.target.value)}}/>
												</div>
											</div>
											
											
										</form>
									</div>
								</div>
							</div>
							
							<div class="col-lg-12 col-md-12">
								<div class="_dashboard_content bg-white rounded mb-4">
									<div class="_dashboard_content_header br-bottom py-3 px-3">
										<div class="_dashboard__header_flex">
											<h4 class="mb-0 ft-medium fs-md">Contact Information</h4>	
										</div>
									</div>
									
									<div class="_dashboard_content_body py-3 px-3">
										<form class="row">	
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
												<div class="form-group">
													<label class="text-dark ft-medium">Country</label>
													<input type="text" class="form-control rounded" placeholder="https://www.linkedin.com/" value={country} onChange={(e)=>{setCountry(e.target.value)}}/>
												</div>
											</div>
											<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
												<div class="form-group">
													<label class="text-dark ft-medium">State</label>
													<input type="text" class="form-control rounded" placeholder="https://www.gplus.com/" value={state} onChange={(e)=>{setState(e.target.value)}}/>
												</div>
											</div>
											
										
											<div class="col-xl-12 col-lg-12 col-md-12">
												<div class="form-group">
													<label class="text-dark ft-medium">Full Address</label>
													<input type="password" class="form-control rounded" placeholder="#10 Marke Juger, SBI Road"  value={fulladdress} onChange={(e)=>{setAddress(e.target.value)}}/>
												</div>
											</div>
											<div class="col-xl-6 col-lg-6 col-md-12">
												<div class="form-group">
													<label class="text-dark ft-medium">Latitude</label>
													<input type="password" class="form-control rounded" placeholder="Optional"  value={latitude} onChange={(e)=>{setLatitude(e.target.value)}}/>
												</div>
											</div>
											<div class="col-xl-6 col-lg-6 col-md-12">
												<div class="form-group">
													<label class="text-dark ft-medium">Longitude</label>
													<input type="password" class="form-control rounded" placeholder="Optional"  value={longitude} onChange={(e)=>{setLongitude(e.target.value)}}/>
												</div>
											</div>
											<div class="col-xl-12 col-lg-12">
												<div class="form-group">
													<button type="button" class="btn btn-md ft-medium text-light rounded theme-bg" onClick={handleSubmit}>Save Changes</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>	
						</div>	
							
					</div>
					
				
				
		
				</div>
				
			</div>
    </> );
}

export default Resume_Add;