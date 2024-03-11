import { useEffect, useState } from "react";

function Pricing() {
	const [title,setTitle] = useState("Premium");
	useEffect(() => {
		const data = localStorage.getItem("title");
		if(data){
			setTitle(data);
		}
		console.log(title);
	})
    return ( <>
    	  <section>
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-xl-5 col-lg-7 col-md-9 col-sm-12">
							<div class="sec_title position-relative text-center mb-5">
								<h6 class="text-muted mb-0">Our Pricing</h6>
								<h2 class="ft-bold">Choose Your Package</h2>
							</div>
						</div>
					</div>
					
					<div class="row align-items-center  g-xl-4 g-lg-3 g-md-3 g-3">
						
						<div class="col-lg-4 col-md-4">
							<div class="pricing_wrap">
								<div class="prt_head">
									<h4 class="ft-medium">Basic</h4>
								</div>
								<div class="prt_price">
									<h2 class="ft-bold"><span>$</span>29</h2>
									<span class="fs-md">per user, per month</span>
								</div>
								<div class="prt_body">
									<ul>
										<li>99.5% Uptime Guarantee</li>
										<li>120GB CDN Bandwidth</li>
										<li>5GB Cloud Storage</li>
										<li class="none">Personal Help Support</li>
										<li class="none">Enterprise SLA</li>
									</ul>
								</div>
								<div class="prt_footer">
									<a href="#" class="btn choose_package">Start Basic</a>
								</div>
							</div>
						</div>
						
						<div class="col-lg-4 col-md-4">
							<div class="pricing_wrap">
								<div class="prt_head">
									<div class="recommended">Best Value</div>
									<h4 class="ft-medium">{title}</h4>
								</div>
								<div class="prt_price">
									<h2 class="ft-bold"><span>$</span>49</h2>
									<span class="fs-md">per user, per month</span>
								</div>
								<div class="prt_body">
									<ul>
										<li>99.5% Uptime Guarantee</li>
										<li>150GB CDN Bandwidth</li>
										<li>10GB Cloud Storage</li>
										<li>Personal Help Support</li>
										<li class="none">Enterprise SLA</li>
									</ul>
								</div>
								<div class="prt_footer">
									<a href="#" class="btn choose_package active">Start Standard</a>
								</div>
							</div>
						</div>
						
					
						<div class="col-lg-4 col-md-4">
							<div class="pricing_wrap">
								<div class="prt_head">
									<h4 class="ft-medium">Platinum</h4>
								</div>
								<div class="prt_price">
									<h2 class="ft-bold"><span>$</span>79</h2>
									<span class="fs-md">2 user, per month</span>
								</div>
								<div class="prt_body">
									<ul>
										<li>100% Uptime Guarantee</li>
										<li>200GB CDN Bandwidth</li>
										<li>20GB Cloud Storage</li>
										<li>Personal Help Support</li>
										<li>Enterprise SLA</li>
									</ul>
								</div>
								<div class="prt_footer">
									<a href="#" class="btn choose_package">Start Platinum</a>
								</div>
							</div>
						</div>
						
					</div>
					
				</div>
			</section>
    </> );
}

export default Pricing;