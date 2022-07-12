import Link from 'next/link'
import React from 'react';
import ProfileCard from './ProfileCard';

const SideNav = () => {
	// const [modalShow, setModalShow] = React.useState(false);


	return (
		<div>
			<div id="kt_aside" className="aside bg-light aside-hoverable ms-7" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false	}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_mobile_toggle" >
				{/* <!--begin::Brand--> */}
				{/* <div className="aside-logo flex-column-auto" id="kt_aside_logo"> */}
					{/* <!--begin::Logo--> */}
					{/* <a href="../../demo1/dist/index.html">
						<img alt="Logo" src="../gg_logo.png" className="h-50px" />
					</a> */}
					{/* <!--end::Logo-->
						<!--begin::Aside toggler--> */}
					{/* <div id="kt_aside_toggle" className="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle" data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="aside-minimize"> */}
						{/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr079.svg-->f */}
						{/* <!--end::Svg Icon--> */}
					{/* </div> */}
					{/* <!--end::Aside toggler--> */}
				{/* </div> */}
				{/* <!--end::Brand-->
					<!--begin::Aside menu--> */}
				<div className="aside-menu flex-column-fluid" >
					{/* <!--begin::Aside Menu--> */}
					<div className="hover-scroll-overlay-y  my-5 my-lg-5" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside_menu" data-kt-scroll-offset="0">
						{/* <!--begin::Menu--> */}



						<div className="menu menu-column menu-title-gray-900 menu-state-bg-light-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500" id="#kt_aside_menu" data-kt-menu="true" data-kt-menu-expand="false">

							<div className="menu-item border rounded bg-dark p-0">
								<Link href="/Profile">
									<div className="menu-link bg-white mb-0 "  style={{height:"120px", marginTop:"100px",marginBottom:"-50px"}} >
										<span className="menu-icon">
											{/* <!--begin::Svg Icon | path: icons/duotune/communication/com013.svg--> */}
											{/* <span className="svg-icon svg-icon-2">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
													<path d="M6.28548 15.0861C7.34369 13.1814 9.35142 12 11.5304 12H12.4696C14.6486 12 16.6563 13.1814 17.7145 15.0861L19.3493 18.0287C20.0899 19.3618 19.1259 21 17.601 21H6.39903C4.87406 21 3.91012 19.3618 4.65071 18.0287L6.28548 15.0861Z" fill="black"></path>
													<rect opacity="0.3" x="8" y="3" width="8" height="8" rx="4" fill="black"></rect>
												</svg>
											</span> */}
											{/* <!--end::Svg Icon--> */}
										</span>
											<div className=" d-flex justify-content-center menu-title text-gray-400 ms-n3  fs-2 fw-bolder me-1 d-flex flex-wrap" >
												<div className="symbol symbol-100px symbol-lg-140px symbol-fixed position-relative ms-n7" data-aos="fade-up" data-aos-delay="300" >
													<img src="/assets/media/avatars/300-1.jpg" alt="image" style={{ borderRadius: "100px" ,marginTop:"-50px"}} />
												</div>
												<div className="user-name text-dark text-hover-primary ms-3 p-6">
													Nikhil Upreti
													
												<span className='btn btn-sm btn-success fs-6 p-1 ms-6 mb-2 ms-3' style={{height:"25px", width:"auto"}}>General</span>
												</div>
											</div>

									</div>
								</Link>
							</div>
							{/* begin profile section */}

							{/* end profile section */}
							<div className="border mt-4 rounded bg-white">

							
							<div className="menu-item bg-success mt-7">
								<a className="menu-link " href="../../demo1/dist/documentation/getting-started/changelog.html">
									<span className="menu-icon">
										{/* <!--begin::Svg Icon | path: icons/duotune/coding/cod003.svg--> */}
										{/* <span className="svg-icon svg-icon-2">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<rect x="2" y="2" width="9" height="9" rx="2" fill="black"></rect>
												<rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="black"></rect>
												<rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="black"></rect>
												<rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="black"></rect>
											</svg>
										</span> */}
										{/* <!--end::Svg Icon--> */}
									</span>
									<span className="menu-title fs-5 menu-state-bg-light-primary text text-hover-dark">Try Premium For Free</span>
								</a>
							</div>
							<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
								<span className="menu-link">
									<span className="menu-icon">
										{/* <!--begin::Svg Icon | path: icons/duotune/general/gen025.svg--> */}
											<img src="../user.png" alt="" height="30" width="auto" />
										{/* <!--end::Svg Icon--> */}
									</span>
									<span className="menu-title fs-4 ms-2">Profile</span>
									<span className="menu-arrow"></span>
								</span>
								<div className="menu-sub menu-sub-accordion menu-active-bg" kt-hidden-height="546" style={{ display: " none", overflow: "hidden" }}>
									<div className="menu-item">
										<a className="menu-link" href="../../demo1/dist/index.html">
											<span className="menu-bullet">
												<span className="bullet bullet-dot"></span>
											</span>
											<span className="menu-title">Payments</span>
										</a>
									</div>
									<div className="menu-item">
										<a className="menu-link" href="../../demo1/dist/dashboards/ecommerce.html">
											<span className="menu-bullet">
												<span className="bullet bullet-dot"></span>
											</span>
											<span className="menu-title">Setting</span>
										</a>
									</div>
									<div className="menu-item">
										<a className="menu-link" href="../../demo1/dist/dashboards/marketing.html">
											<span className="menu-bullet">
												<span className="bullet bullet-dot"></span>
											</span>
											<span className="menu-title">Logout</span>
										</a>
									</div>

								</div>
							</div>
							</div>

							{/* <div className="menu-item">
								<div className="menu-content">
									<div className="separator mx-1 my-4"></div>
								</div>
							</div> */}

							<div className="border rounded bg-white mt-5">

							
							<div className="menu-item">
								<a className="menu-link" href="../../demo1/dist/documentation/getting-started/changelog.html">
									<span className="menu-icon">
										{/* <!--begin::Svg Icon | path: icons/duotune/coding/cod003.svg--> */}
										<span className="svg-icon svg-icon-2">
										<img src="../threads.png" alt="" height="30" width="auto" />
										</span>
										{/* <!--end::Svg Icon--> */}
									</span>
									<span className="menu-title fs-4 ms-2">Threads</span>
								</a>
							</div>

							<div className="menu-item">
								<a className="menu-link" href="../../demo1/dist/documentation/getting-started/changelog.html">
									<span className="menu-icon">
										{/* <!--begin::Svg Icon | path: icons/duotune/coding/cod003.svg--> */}
										<span className="svg-icon svg-icon-2">
										<img src="../follows.png" alt="" height="30" width="auto" />
										</span>
										{/* <!--end::Svg Icon--> */}
									</span>
									<span className="menu-title fs-4 ms-2">Following</span>
								</a>
							</div>

							<div className="menu-item">
								<a className="menu-link" href="../../demo1/dist/documentation/getting-started/changelog.html">
									<span className="menu-icon">
										{/* <!--begin::Svg Icon | path: icons/duotune/coding/cod003.svg--> */}
										<span className="svg-icon svg-icon-2">
											<img src="../notification.png" alt="" height="30" width="auto" />
										</span>
										{/* <!--end::Svg Icon--> */}
									</span>
									<span className="menu-title fs-4 ms-2">Notifications</span>
								</a>
							</div>

							<div className="menu-item">
								<a className="menu-link" href="../../demo1/dist/documentation/getting-started/changelog.html">
									<span className="menu-icon">
										{/* <!--begin::Svg Icon | path: icons/duotune/coding/cod003.svg--> */}
										<span className="svg-icon svg-icon-2">
											<img src="../messages.png" alt="" height="30" width="auto" />
										</span>
										{/* <!--end::Svg Icon--> */}
									</span>
									<span className="menu-title fs-4 ms-2">Messages</span>
								</a>
							</div>
							<div className="menu-item">
								<a className="menu-link" href="../../demo1/dist/documentation/getting-started/changelog.html">
									<span className="menu-icon">
										{/* <!--begin::Svg Icon | path: icons/duotune/coding/cod003.svg--> */}
										<span className="svg-icon svg-icon-2">
											<img src="../saved.png" alt="" height="30" width="auto" />
										</span>
										{/* <!--end::Svg Icon--> */}
									</span>
									<span className="menu-title fs-4 ms-2">Saved</span>
								</a>
							</div>
							</div>
							
						</div>
						{/* <!--end::Menu--> */}
					</div>
					{/* <!--end::Aside Menu--> */}
				</div>
				{/* <!--end::Aside menu-->
					<!--begin::Footer--> */}
				
				{/* <!--end::Footer--> */}
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

export default SideNav