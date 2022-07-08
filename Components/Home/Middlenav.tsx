import React from 'react'

const Middlenav = () => {
  return (
    <div>
        <div className="card-body pb-0 middleNav" style={{ position: "sticky", top:"20px"}} >
                {/* <!--begin::Header--> */} 
                
                    <div className="row border rounded">
						
						
                    <ul className="d-flex justify-content-center nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder bg-white p-3 rounded">
										{/* <!--begin::Nav item--> */}
										<li className="nav-item mt-2">
											<a className="nav-link text-active-primary ms-0 me-10 py-5 active" href="/metronic8/demo1/../demo1/pages/user-profile/overview.html">Overview</a>
										</li>
										{/* <!--end::Nav item-->
										<!--begin::Nav item--> */}
										<li className="nav-item mt-2">
											<a className="nav-link text-active-primary ms-0 me-10 py-5" href="/metronic8/demo1/../demo1/pages/user-profile/projects.html">Following</a>
										</li>
										{/* <!--end::Nav item-->
										<!--begin::Nav item--> */}
										<li className="nav-item mt-2">
											<a className="nav-link text-active-primary ms-0 me-10 py-5" href="/metronic8/demo1/../demo1/pages/user-profile/campaigns.html">All Threads</a>
										</li>
										{/* <!--end::Nav item-->
										<!--begin::Nav item--> */}
										<li className="nav-item mt-2">
											<a className="nav-link text-active-primary ms-0 me-10 py-5" href="/metronic8/demo1/../demo1/pages/user-profile/documents.html">Discover</a>
										</li>
										{/* <!--end::Nav item-->
										<!--begin::Nav item--> */}
										{/* <!--end::Nav item--> */}
									</ul>
                    <div className=" d-flex justify-content-center">
            </div>
            </div>
     </div>
    </div>
  )
}

export default Middlenav