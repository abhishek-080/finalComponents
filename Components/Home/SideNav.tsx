import Link from 'next/link'
import React from 'react';

const SideNav = () => {
	const [modalShow, setModalShow] = React.useState(false);


	return (
		<div>
			<div id="kt_aside" className="aside aside-light aside-hoverable" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_mobile_toggle" >
				{/* <!--begin::Brand--> */}
				<div className="aside-logo flex-column-auto" id="kt_aside_logo">
					{/* <!--begin::Logo--> */}
					<a href="../../demo1/dist/index.html">
						<img alt="Logo" src="../gg_logo.png" className="h-50px" />
						{/* <img alt="Logo" src="assets/media/logos/logo-1-dark.svg" className="h-25px logo" /> */}
					</a>
					{/* <!--end::Logo-->
						<!--begin::Aside toggler--> */}
					<div id="kt_aside_toggle" className="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle" data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="aside-minimize">
						{/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr079.svg-->f */}
						<span className="svg-icon svg-icon-1 rotate-180">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path opacity="0.5" d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z" fill="black"></path>
								<path d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z" fill="black"></path>
							</svg>
						</span>
						{/* <!--end::Svg Icon--> */}
					</div>
					{/* <!--end::Aside toggler--> */}
				</div>
				{/* <!--end::Brand-->
					<!--begin::Aside menu--> */}
				<div className="aside-menu flex-column-fluid" >
					{/* <!--begin::Aside Menu--> */}
					<div className="hover-scroll-overlay-y my-5 my-lg-5" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside_menu" data-kt-scroll-offset="0" style={{ height: "450px" }}>
						{/* <!--begin::Menu--> */}



						<div className="menu menu-column menu-title-gray-900 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500" id="#kt_aside_menu" data-kt-menu="true" data-kt-menu-expand="false">

							<div className="menu-item">
								<Link href="/Profile">
									<div className="menu-link" >
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
										<div className="menu-title text-gray-400 ms-n5  fs-2 fw-bolder me-1 d-flex flex-wrap">
											<div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative ">
												<img src="/assets/media/avatars/300-1.jpg" alt="image" style={{ borderRadius: "100px" }} />
											</div>
											<div className="user-name text-dark text-hover-primary p-6">
												Nikhil Upreti
											</div>
										</div>
									</div>
								</Link>
							</div>
							{/* begin profile section */}

							{/* end profile section */}
							<div className="menu-item bg-success ">
								<a className="menu-link" href="../../demo1/dist/documentation/getting-started/changelog.html">
									<span className="menu-icon">
										{/* <!--begin::Svg Icon | path: icons/duotune/coding/cod003.svg--> */}
										<span className="svg-icon svg-icon-2">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<rect x="2" y="2" width="9" height="9" rx="2" fill="black"></rect>
												<rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="black"></rect>
												<rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="black"></rect>
												<rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="black"></rect>
											</svg>
										</span>
										{/* <!--end::Svg Icon--> */}
									</span>
									<span className="menu-title fs-5 text text-hover-light">Try Premium For Free</span>
								</a>
							</div>
							<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
								<span className="menu-link">
									<span className="menu-icon">
										{/* <!--begin::Svg Icon | path: icons/duotune/general/gen025.svg--> */}
										<span className="svg-icon svg-icon-2">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<rect x="2" y="2" width="9" height="9" rx="2" fill="black"></rect>
												<rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="black"></rect>
												<rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="black"></rect>
												<rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="black"></rect>
											</svg>
										</span>
										{/* <!--end::Svg Icon--> */}
									</span>
									<span className="menu-title fs-4">Profile</span>
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

							<div className="menu-item">
								<div className="menu-content">
									<div className="separator mx-1 my-4"></div>
								</div>
							</div>

							<div className="menu-item">
								<a className="menu-link" href="../../demo1/dist/documentation/getting-started/changelog.html">
									<span className="menu-icon">
										{/* <!--begin::Svg Icon | path: icons/duotune/coding/cod003.svg--> */}
										<span className="svg-icon svg-icon-2">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<rect x="2" y="2" width="9" height="9" rx="2" fill="black"></rect>
												<rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="black"></rect>
												<rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="black"></rect>
												<rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="black"></rect>
											</svg>
										</span>
										{/* <!--end::Svg Icon--> */}
									</span>
									<span className="menu-title fs-4">People</span>
								</a>
							</div>

							<div className="menu-item">
								<a className="menu-link" href="../../demo1/dist/documentation/getting-started/changelog.html">
									<span className="menu-icon">
										{/* <!--begin::Svg Icon | path: icons/duotune/coding/cod003.svg--> */}
										<span className="svg-icon svg-icon-2">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<rect x="2" y="2" width="9" height="9" rx="2" fill="black"></rect>
												<rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="black"></rect>
												<rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="black"></rect>
												<rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="black"></rect>
											</svg>
										</span>
										{/* <!--end::Svg Icon--> */}
									</span>
									<span className="menu-title fs-4">Events</span>
								</a>
							</div>

							<div className="menu-item">
								<a className="menu-link" href="../../demo1/dist/documentation/getting-started/changelog.html">
									<span className="menu-icon">
										{/* <!--begin::Svg Icon | path: icons/duotune/coding/cod003.svg--> */}
										<span className="svg-icon svg-icon-2">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<rect x="2" y="2" width="9" height="9" rx="2" fill="black"></rect>
												<rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="black"></rect>
												<rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="black"></rect>
												<rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="black"></rect>
											</svg>
										</span>
										{/* <!--end::Svg Icon--> */}
									</span>
									<span className="menu-title fs-4">Saved</span>
								</a>
							</div>
						</div>
						{/* <!--end::Menu--> */}
					</div>
					{/* <!--end::Aside Menu--> */}
				</div>
				{/* <!--end::Aside menu-->
					<!--begin::Footer--> */}
				<div className="aside-footer flex-column-auto pt-5 pb-7 px-5" id="kt_aside_footer">
					<div className="btn btn-custom btn-primary w-100 form-control" data-bs-toggle="modal" data-bs-target="#createModal"
					>
						<span className="btn-label">Post</span>
						{/* <!--begin::Svg Icon | path: icons/duotune/general/gen005.svg--> */}
						<span className="svg-icon btn-icon svg-icon-2">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12.5 18C12.5 17.4 12.6 17.5 12 17.5H8.5C7.9 17.5 8 17.4 8 18C8 18.6 7.9 18.5 8.5 18.5L12 18C12.6 18 12.5 18.6 12.5 18ZM16.5 13C16.5 12.4 16.6 12.5 16 12.5H8.5C7.9 12.5 8 12.4 8 13C8 13.6 7.9 13.5 8.5 13.5H15.5C16.1 13.5 16.5 13.6 16.5 13ZM12.5 8C12.5 7.4 12.6 7.5 12 7.5H8C7.4 7.5 7.5 7.4 7.5 8C7.5 8.6 7.4 8.5 8 8.5H12C12.6 8.5 12.5 8.6 12.5 8Z" fill="black"></path>
								<rect x="7" y="17" width="6" height="2" rx="1" fill="black"></rect>
								<rect x="7" y="12" width="10" height="2" rx="1" fill="black"></rect>
								<rect x="7" y="7" width="6" height="2" rx="1" fill="black"></rect>
								<path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="black"></path>
							</svg>
						</span>



						{/* 
							
							*/}
						{/* <!-- create modal --> */}
						<div
							className="modal fade"
							id="createModal"
							tabindex="-1"
							aria-labelledby="createModalLabel"
							aria-hidden="true"
							data-bs-backdrop="false"
						>
							<div className="modal-dialog modal-dialog-centered">
								<div className="modal-content">
									{/* <!-- head --> */}
									<div className="modal-header align-items-center">
										<h5
											className="text-dark text-center w-100 m-0"
											id="exampleModalLabel"
										>
											Create Post
										</h5>
										<button
											type="button"
											className="btn-close"
											data-bs-dismiss="modal"
											aria-label="Close"
										></button>
									</div>
									{/* <!-- body --> */}



									<div className="modal-body">
										<div className="my-1 p-1">

											{/* Form start */}
											<form action="" id="kt_forms_widget_1_form" className="ql-quil ql-quil-plain pb-3">
												<div className="d-flex flex-column">
													{/* <!-- name --> */}
													<div className="d-flex align-items-center">
														<div className="col-lg-2">
															<img
																src="https://source.unsplash.com/collection/happy-people"
																alt="from fb"
																className="rounded-circle"
																style={{ width: "38px", height: "38px", objectFit: "cover", marginTop: "-70px" }}
															/>
														</div>

														<div className="col-lg-10">
															<textarea
																cols="30"
																rows="5"
																className="form-control border-0 "
																placeholder="What's new?"
															></textarea>

														</div>
													</div>
													{/* <!-- text --> */}

													{/* <!-- emoji  --> */}
													<div
														className=" d-flex    justify-content-betweenalign-items-center p-5">

													</div>
													{/* <!-- options --> */}
													<div
														className=" d-flex justify-content-between border border-1 border-light rounded p-3 mt-3">
														{/* <p className="m-0">Add Photo</p> */}
														<div>
															<i
																className="
                        fas
                        fa-images
                        fs-1
                        text-success
                        pointer
                        mx-2
                      "
															></i>

															<i
																className="
                        fas
                        fa-map-marker-alt
                        fs-1
                        text-info
                        mx-2
                      "
															></i>
															<i
																className="
                        fas
                        fa-ellipsis-h
                        fs-1
                        text-muted
                        pointer
                        mx-2
                      "
															></i>
														</div>
													</div>
												</div>
											</form>
										</div>



										{/* <!-- end --> */}

									</div>
									{/* <!-- footer --> */}
									<div className="modal-footer">
										<div className="bg-light rounded border border-primary">
											<select
												className="form-select border-0 bg-gray w-100 fs-4 bg-light"
												aria-label="Default select example"
											>
												<option selected value="1">Public</option>
												<option value="2">Profile</option>
												<option value="3">Thread</option>
											</select>
										</div>


										<button type="button" className="custom-btn btn-6 w-25">
											Post
										</button>
									</div>
								</div>
							</div>
						</div>


	
						{/* <!--end::Svg Icon--> */}
					</div>
				</div>
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