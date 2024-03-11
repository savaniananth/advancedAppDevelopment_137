import icon2 from "../../assets/images/c-8.png"
import { Link } from "react-router-dom";
import { FaLocationDot ,FaBriefcase, FaTrash } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import ApiLoader from "../../components/Loader/ApiLoading";
import { ToastContainer, toast } from "react-toastify";
import SweetAlert2 from "react-sweetalert2";
// const Jobs=[
// 	{
// 		  title: "Fresher UI/UX Designer (3 Year Exp.)",
//     	location: "Kuniyamathur, Coimbatore",
//     	employmentType: "Full Time",
//     	imgSrc: icon2,
// 	},
// 	{
// 		title: "Fresher UI/UX Designer (3 Year Exp.)",
//     	location: "Kuniyamathur, Coimbatore",
//     	employmentType: "Full Time",
//     	imgSrc: icon2,
// 	},
// 	{
// 		title: "Fresher UI/UX Designer (3 Year Exp.)",
//     	location: "Kuniyamathur, Coimbatore",
//     	employmentType: "Full Time",
//     	imgSrc: icon2,
// 	},
// 	{
// 		title: "Fresher UI/UX Designer (3 Year Exp.)",
//     	location: "Kuniyamathur, Coimbatore",
//     	employmentType: "Full Time",
//     	imgSrc: icon2,
// 	},
// 	{
// 		title: "Fresher UI/UX Designer (3 Year Exp.)",
//     	location: "Kuniyamathur, Coimbatore",
//     	employmentType: "Full Time",
//     	imgSrc: icon2,
// 	},
// 	{
// 		title: "Fresher UI/UX Designer (3 Year Exp.)",
//     	location: "Kuniyamathur, Coimbatore",
//     	employmentType: "Full Time",
//     	imgSrc: icon2,
// 	}
// ]
function ViewAddedJob() {
  const [jobs, setJobs] = useState([]);
  const [swalProps, setSwalProps] = useState({});

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8081/updateJob/${editingJobId}`, editedJob);
      const response = await axios.get('http://localhost:8081/getJob');
      setJobs(response.data);
      setEditingJobId(null);
      setEditedJob({
        title: "",
        location: "",
        employmentType: "",
        imgSrc: "",
      });
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };

  const handleDelete = async (jobId) => {
    setSwalProps({
      show: true,
      title: 'Delete Job',
      text: 'Are you sure you want to delete this job?',
      confirmButtonText: 'Yes, delete it!',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      icon: 'warning',
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        try {
          await axios.delete(`http://localhost:8081/admin/premium/deletejob/${jobId}`);
          setJobs(prevJobs => prevJobs.filter((job) => job.jobId !== jobId));
          toast.success("Job Has Been Deleted Successfully");
          return true;
        } catch (error) {
          console.error("Error deleting job:", error);
          toast.error("Something Went Wrong");
          return false;
        }
        finally {
            
          setSwalProps({ show: false });
        }
      },
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/getJob');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };

    console.log(jobs);
    fetchData();
  }, []);
    return ( <>
    <SweetAlert2 {...swalProps} />
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
								<li class="inactive"><Link to="/Admin_job_add">Add Free Jobs</Link></li>
                <li ><Link to="/Add_Premium_Jobs">Add Premium Jobs</Link></li>
								<li  class="active"><Link to="/View_Added_Jobs">View Free Jobs</Link></li>
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
                                   <h1 class="ft-medium">Jobs Added By You</h1>
                                   <nav aria-label="breadcrumb">
                                       <ol class="breadcrumb">
                                           <li class="breadcrumb-item text-muted"><a href="#">Home</a></li>
                                           <li class="breadcrumb-item text-muted"><a href="#">Dashboard</a></li>
                                           <li class="breadcrumb-item"><a href="#" class="theme-cl">Jobs Added</a></li>
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
                                                   <h6 class="mb-0 ft-medium fs-sm">{jobs.length} Jobs were Found</h6>
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
                                   
                                   <div className="data-responsive">
       {jobs.length === 0 ? (
         <div style={{display : "flex" ,flexDirection:"row", alignItems : "center" , justifyContent : "center",height: "50vh" }}>
           <ApiLoader/>
         </div>
       ) : (
         <div className="row align-items-center g-xl-4 g-lg-3 g-md-3 g-3">
           {jobs.map((job, index) => (
             <div key={index} className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
               <div className="jbr-wrap text-left border rounded">
                 <div className="cats-box mlb-res rounded bg-white d-flex align-items-center justify-content-between px-3 py-3">
                   <div className="cats-box rounded bg-white d-flex align-items-center">
                     <div className="text-center"><img src={icon2} className="img-fluid" width="55" alt="" /></div>
                     <div className="cats-box-caption px-2">
                       <h4 className="fs-md mb-0 ft-medium">Job Id: {job.jobId}</h4>
                       <h4 className="fs-md mb-0 ft-medium">{job.jobTitle}</h4>
                       <div className="d-block mb-2 position-relative">
                         <span className="text-muted medium">
                           &nbsp;<FaLocationDot />&nbsp;{job.city}
                         </span>
                         <span className="muted medium ms-2 theme-cl">
                           &nbsp;<FaBriefcase />&nbsp;{job.jobType}
                         </span>
                       </div>
                     </div>
                   </div>
                   <div>
                     
                   <a href="#" class="p-2 circle text-info bg-light-info d-inline-flex align-items-center justify-content-center me-1" onClick={(e) => { e.preventDefault(); handleUpdate(job.jobId); }}>
                  <FaUserEdit />
                </a>&nbsp;&nbsp;

                    
                     <a href="" class="p-2 circle text-danger bg-light-danger d-inline-flex align-items-center justify-content-center ms-1"  onClick={(e) => { e.preventDefault(); handleDelete(job.jobId)}}><FaTrash /></a>&nbsp;
                  
                     
                   </div>
                 </div>
               </div>
             </div>
           ))}
         </div>
       )}
     </div>
                              </div>

                           </div>	
                       </div>
                   </div>
                   
          
    </> );
}

export default ViewAddedJob;