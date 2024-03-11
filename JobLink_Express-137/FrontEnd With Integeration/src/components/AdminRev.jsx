import bg from "../assets/images/bn-1.png"
import { MdDone } from "react-icons/md";
import { FaArrowRight} from "react-icons/fa";
function AdminRev() {
    return ( <>
     <section class="pt-0">
				<div class="container">
					
					<div class="row align-items-center justify-content-between">
					
						<div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
							<div class="position-relative">
								<img src={bg} class="img-fluid" alt=""/>
							</div>
						</div>
						
						<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">	
							<div class="m-spaced">
								<div class="position-relative">
									<div class="mb-1"><span class="theme-bg-light theme-cl px-2 py-1 rounded">About Us</span></div>
									<h2 class="ft-bold mb-3">Get All The Jobs Details<br/>You're Looking For</h2>
									<p class="mb-3">About Us: Your Gateway to Comprehensive Job Details

Welcome to "Get All The Jobs Details"! We're your go-to source for all things related to job opportunities, career insights, and professional growth.

Our mission is to provide you with a seamless and enriching experience in your job search journey. We understand the importance of finding the right job that aligns with your skills, interests, and ambitions, and we are here to assist you every step of the way.


</p>
								</div>
								<div class="position-relative row">
									<div class="col-lg-12 col-md-12 col-12">
										<div class="mb-3 me-4 ml-lg-0 mr-lg-4">
											<div class="d-flex align-items-center">
											  <div class="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
												 &nbsp;<MdDone /> &nbsp;
											  </div>
											  <h6 class="mb-0 ms-3">Full lifetime access</h6>
											</div>
										</div>
										<div class="mb-3 me-4 ml-lg-0 mr-lg-4">
											<div class="d-flex align-items-center">
											  <div class="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
												 &nbsp;<MdDone /> &nbsp;
											  </div>
											  <h6 class="mb-0 ms-3">20+ downloadable resources</h6>
											</div>
										</div>
										<div class="mb-3 me-4 ml-lg-0 mr-lg-4">
											<div class="d-flex align-items-center">
											  <div class="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
												 &nbsp;<MdDone /> &nbsp;
											  </div>
											  <h6 class="mb-0 ms-3">Certificate of completion</h6>
											</div>
										</div>
										<div class="mb-3 me-4 ml-lg-0 mr-lg-4">
											<div class="d-flex align-items-center">
											  <div class="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
												 &nbsp;<MdDone /> &nbsp;
											  </div>
											  <h6 class="mb-0 ms-3">Free Trial 7 Days</h6>
											</div>
										</div>
									</div>
									<div class="col-lg-12 col-md-12 col-12 mt-4">
										<a to="/JobList" class="btn btn-md theme-bg-light rounded theme-cl hover-theme">Get Started&nbsp;
                  <FaArrowRight />
                  &nbsp;</a>
									</div>
								</div>
							</div>
						</div>
						
					</div>
					
				</div>
			</section>

    </> );
}

export default AdminRev;