import React from 'react'

const ProfNav = () => {
  return (
    <div>
        <div id="kt_aside" className="aside bg-light aside-hoverable ms-7" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false	}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_mobile_toggle" >
				
				<div className="aside-menu flex-column-fluid" >
					{/* <!--begin::Aside Menu--> */}
					<div className="hover-scroll-overlay-y  my-5 my-lg-5" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside_menu" data-kt-scroll-offset="0">
						{/* <!--begin::Menu--> */}



						<div className="menu menu-column menu-title-gray-900 menu-state-bg-light-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500" id="#kt_aside_menu" data-kt-menu="true" data-kt-menu-expand="false">

							

							<div className="border rounded bg-white mt-5">

							
							<div className="menu-item">
								<a className="menu-link" href="../../demo1/dist/documentation/getting-started/changelog.html">
									<span className="menu-icon">
										{/* <!--begin::Svg Icon | path: icons/duotune/coding/cod003.svg--> */}
										<span className="svg-icon svg-icon-2">
										{/* <img src="../threads.png" alt="" height="30" width="auto" /> */}
										</span>
										{/* <!--end::Svg Icon--> */}
									</span>
									<span className="menu-title fs-4 ms-2">Identity</span>
								</a>
							</div>

							<div className="menu-item">
								<a className="menu-link" href="../../demo1/dist/documentation/getting-started/changelog.html">
									<span className="menu-icon">
										{/* <!--begin::Svg Icon | path: icons/duotune/coding/cod003.svg--> */}
										<span className="svg-icon svg-icon-2">
										{/* <img src="../follows.png" alt="" height="30" width="auto" /> */}
										</span>
										{/* <!--end::Svg Icon--> */}
									</span>
									<span className="menu-title fs-4 ms-2">Education</span>
								</a>
							</div>

							<div className="menu-item">
								<a className="menu-link" href="../../demo1/dist/documentation/getting-started/changelog.html">
									<span className="menu-icon">
										{/* <!--begin::Svg Icon | path: icons/duotune/coding/cod003.svg--> */}
										<span className="svg-icon svg-icon-2">
											{/* <img src="../notification.png" alt="" height="30" width="auto" /> */}
										</span>
										{/* <!--end::Svg Icon--> */}
									</span>
									<span className="menu-title fs-4 ms-2">Portfolio</span>
								</a>
							</div>

							<div className="menu-item">
								<a className="menu-link" href="../../demo1/dist/documentation/getting-started/changelog.html">
									<span className="menu-icon">
										{/* <!--begin::Svg Icon | path: icons/duotune/coding/cod003.svg--> */}
										<span className="svg-icon svg-icon-2">
											{/* <img src="../messages.png" alt="" height="30" width="auto" /> */}
										</span>
										{/* <!--end::Svg Icon--> */}
									</span>
									<span className="menu-title fs-4 ms-2">Payments</span>
								</a>
							</div>
							<div className="menu-item">
								<a className="menu-link" href="../../demo1/dist/documentation/getting-started/changelog.html">
									<span className="menu-icon">
										{/* <!--begin::Svg Icon | path: icons/duotune/coding/cod003.svg--> */}
										<span className="svg-icon svg-icon-2">
											{/* <img src="../saved.png" alt="" height="30" width="auto" /> */}
										</span>
										{/* <!--end::Svg Icon--> */}
									</span>
									<span className="menu-title fs-4 ms-2">Experience</span>
								</a>
							</div>
							</div>
							
						</div>
						{/* <!--end::Menu--> */}
					</div>
					{/* <!--end::Aside Menu--> */}
				</div>

			</div>
			<div className="d-flex align-items-center d-lg-none ms-n2 me-2" title="Show aside menu">
				<div className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px" id="kt_aside_mobile_toggle">
					{/* <!--begin::Svg Icon | path: icons/duotune/abstract/abs015.svg--> */}
					<span className="svg-icon svg-icon-1">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
							<path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="black"></path>
							<path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="black"></path>
						</svg>
					</span>
					{/* <!--end::Svg Icon--> */}
				</div>
			</div>

    </div>
  )
}

export default ProfNav