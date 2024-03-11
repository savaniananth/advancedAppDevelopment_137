import landing from "../assets/images/landing-bg-1.png"
function Footer() {
    return ( <>

    <section className="middle"  style={{backgroundColor:"green",backgroundImage: `url(${landing})`,backgroundColor:"#212529"}} data-overlay="5">
				<div className="container py-5">
					
					<div className="row justify-content-center">
						<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
							<div className="sec_title position-relative text-center mb-5">
								<h6 className="text-light mb-0">Subscribe Now</h6>
								<h2 className="ft-bold text-light">Get All New Job Notification</h2>
							</div>
						</div>
					</div>
					
					<div className="row align-items-center justify-content-center">
						<div className="col-xl-7 col-lg-10 col-md-12 col-sm-12 col-12">
							<form className="bg-white rounded p-1">
								<div className="row gx-0">
									<div className="col-xl-9 col-lg-9 col-md-8 col-sm-8 col-8">
										<div className="form-group mb-0 position-relative">
											<input type="text" className="form-control lg left-ico" placeholder="Enter Your Email Address"/>
											{/* <i className="bnc-ico lni lni-envelope"></i> */}
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4">
										<div className="form-group mb-0 position-relative">
											<button className="btn full-width custom-height-lg theme-bg text-light fs-md" type="button">Subscribe</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
					
				</div>
			</section>
			<footer class="dark-footer skin-dark-footer style-2">
				<div class="footer-middle">
					<div class="container">
						<div class="row">
							
							<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
								<div class="footer_widget">
									{/* <img src={fimg} class="img-footer small mb-2" alt=""/> */}
									
									<div class="address mt-2">
										JobLink<br/>Coimbathore	
									</div>
									<div class="address mt-3">
										+91 9638527410<br/>support@joblink.com
									</div>
									<div class="address mt-2">
										<ul class="list-inline">
											<li class="list-inline-item"><a class="theme-cl"><i class="lni lni-facebook-filled"></i></a></li>
											<li class="list-inline-item"><a class="theme-cl"><i class="lni lni-twitter-filled"></i></a></li>
											<li class="list-inline-item"><a class="theme-cl"><i class="lni lni-youtube"></i></a></li>
											<li class="list-inline-item"><a class="theme-cl"><i class="lni lni-instagram-filled"></i></a></li>
											<li class="list-inline-item"><a class="theme-cl"><i class="lni lni-aedin-original"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
							
							<div class="col-xl-2 col-lg-2 col-md-2 col-sm-12">
								<div class="footer_widget">
									<h4 class="widget_title">For Employers</h4>
									<ul class="footer-menu">
										<li><a>Explore Candidates</a></li>
										<li><a>Job Pricing</a></li>
										<li><a>Submit Job</a></li>
										<li><a>Shortlisted</a></li>
										<li><a>Dashboard</a></li>
									</ul>
								</div>
							</div>
									
							<div class="col-xl-2 col-lg-2 col-md-2 col-sm-12">
								<div class="footer_widget">
									<h4 class="widget_title">For Candidates</h4>
									<ul class="footer-menu">
										<li><a>Explore All Jobs</a></li>
										<li><a>Browse Categories</a></li>
										<li><a>Saved Jobs</a></li>
										<li><a>Dashboard</a></li>
									</ul>
								</div>
							</div>
					
							<div class="col-xl-2 col-lg-2 col-md-2 col-sm-12">
								<div class="footer_widget">
									<h4 class="widget_title">About Company</h4>
									<ul class="footer-menu">
										<li><a>Who We'r?</a></li>
										<li><a>Our Mission</a></li>
										<li><a>Our team</a></li>
										<li><a>Packages</a></li>
										<li><a>Dashboard</a></li>
									</ul>
								</div>
							</div>
							
							<div class="col-xl-2 col-lg-2 col-md-2 col-sm-12">
								<div class="footer_widget">
									<h4 class="widget_title">Helpful Topics</h4>
									<ul class="footer-menu">
										<li><a>Site Map</a></li>
										<li><a>Security</a></li>
										<li><a>Contact</a></li>
										<li><a>FAQ's Page</a></li>
										<li><a>Privacy</a></li>
									</ul>
								</div>
							</div>
								
						</div>
					</div>
				</div>
			</footer>
    </> );
}

export default Footer;