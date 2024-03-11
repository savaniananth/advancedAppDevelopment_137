import { Link } from "react-router-dom";
import { FaLocationDot ,FaBriefcase } from "react-icons/fa6";
import { IoIosCloudDownload } from "react-icons/io";
import { FaEye,FaTrash,FaCalendar,FaClock } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RxStarFilled,RxStar } from "react-icons/rx";
import { BsClockHistory } from "react-icons/bs";
function AdminJobApplicants() {
    return ( <>
        <a class="mobNavigation" data-bs-toggle="collapse" href="#MobNav" role="button" aria-expanded="false" aria-controls="MobNav">
                   <i class="fas fa-bars me-2"></i>Dashboard Navigation
               </a>
                    <div class="collapse" id="MobNav">
                       <div class="dashboard-nav">
                       <div class="dashboard-inner">
                       
                       <ul data-submenu-title="Main Navigation">
								<li><Link to="/Dash">Dashboard</Link></li>
								<li><Link to="/BookMarkedResume">BookMarked Resumes</Link></li>
								<li className="active"><Link to="/JobApplicants">Job Applicants</Link></li>
							</ul>
							<ul data-submenu-title="Jobs Section">
								<li ><Link to="/Admin_job_add">Add Jobs</Link></li>
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
       <div class="dashboard-content">
                       <div class="dashboard-tlbar d-block mb-5">
                           <div class="row">
                               <div class="colxl-12 col-lg-12 col-md-12">
                                   <h1 class="ft-medium">Job Applicants</h1>
                                   <nav aria-label="breadcrumb">
                                       <ol class="breadcrumb">
                                           <li class="breadcrumb-item text-muted"><a href="#">Home</a></li>
                                           <li class="breadcrumb-item text-muted"><a href="#">Dashboard</a></li>
                                           <li class="breadcrumb-item"><a href="#" class="theme-cl">Job Applicants</a></li>
                                       </ol>
                                   </nav>
                               </div>
                           </div>
                       </div>
                       
                       <div class="dashboard-widg-bar d-block">
                           <div class="row">
                               <div class="col-xl-12 col-lg-12 col-md-12">
                               
                                   <div class="px-3 py-2 br-bottom br-top bg-white rounded mb-3">
                                       <div class="flixors">
                                           <div class="row align-items-center justify-content-between">
                                               <div class="col-xl-3 col-lg-4 col-md-5 col-sm-12">
                                                   <h6 class="mb-0 ft-medium fs-sm">01 Applied Jobs</h6>
                                               </div>
                                               
                                               <div class="col-xl-9 col-lg-8 col-md-7 col-sm-12">
                                                   <div class="filter_wraps elspo_wrap d-flex align-items-center justify-content-end">
                                                       <div class="single_fitres me-2">
                                                           <select class="form-select simple">
                                                             <option value="1" selected="">Default Sorting</option>
                                                             <option value="2">Sort By Name</option>
                                                             <option value="3">Sort By Rating</option>
                                                             <option value="4">Sort By Trending</option>
                                                             <option value="5">Sort By Recent</option>
                                                           </select>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           
                                       </div>
                                   </div>
                                   
                                   <div class="data-responsive">
                                       <div class="dashed-list-wrap bg-white rounded mb-3">
                                           <div class="dashed-list-full bg-white rounded p-3 mb-3">
                                               <div class="dashed-list-short d-flex align-items-center">
                                                   <div class="dashed-list-short-first">
                                                       <div class="dashed-avater"><img src="assets/img/t-3-1.png" class="img-fluid circle" width="70" alt=""/></div>
                                                   </div>
                                                   <div class="dashed-list-short-last">
                                                       <div class="cats-box-caption px-2">
                                                           <h4 class="fs-lg mb-0 ft-medium theme-cl">Shankar P</h4>
                                                           
                                                           <h2 class="fs-lg mb-0 ft-medium">Java Developer</h2>
                                                          
                                                           <div class="d-block mb-2 position-relative">
                                                               <span>
                                                               <FaLocationDot />&nbsp;
                                                                   Coimbatore</span>
                                                                   &nbsp;&nbsp;
                                                               <span class="ms-2"><FaBriefcase />&nbsp;Web Designer</span>&nbsp;
                                                               <span class="ms-2"><BsClockHistory />&nbsp;Work Experiences</span>
                                                           </div>
                                                           
                                                           <div class="ico-content">
                                                               <ul>
                                                                   <li><a href="#" class="px-2 py-1 medium bg-light-success rounded text-success"><IoIosCloudDownload />&nbsp;&nbsp;Download CV</a></li>
                                                                   <li><a href="#" data-bs-toggle="modal" data-bs-target="#message" class="px-2 py-1 medium bg-light-info rounded text-info"><FiMessageCircle /> &nbsp;Message</a></li>
                                                               </ul>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div class="dashed-list-last">
                                                   <div class="dash-action">
                                                       <a href="" class="p-2 circle text-info bg-light-info d-inline-flex align-items-center justify-content-center me-1"><FaEye /></a> &nbsp;
                                                       <a href="" class="p-2 circle text-success bg-light-success d-inline-flex align-items-center justify-content-center"><IoMdCheckmarkCircleOutline /></a>&nbsp;&nbsp;
                                                       <a href="" class="p-2 circle text-danger bg-light-danger d-inline-flex align-items-center justify-content-center ms-1"><FaTrash /></a>&nbsp;
                                                   </div>
                                               </div>
                                           </div>
                                           <div class="dashed-list-footer p-3 br-top">
                                               <div class="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
                                               <RxStarFilled size={20}/>
                                               <RxStarFilled size={20}/>
                                               <RxStarFilled size={20}/>
                                               <RxStar size={20}/>
                                               <RxStar size={20}/>
                                               
                                               </div>
                                               <div class="ico-content">
                                                   <ul>
                                                       <li><span><FaCalendar />&nbsp;07 July 2017</span></li>
                                                       &nbsp;
                                                       <li><span><FaClock />&nbsp;Recent</span></li>
                                                   </ul>
                                               </div>
                                           </div>
                                       </div>
                                   
                                   </div>
                               </div>
                           </div>	
                       </div>
                   </div>
       </>  );
}

export default AdminJobApplicants;