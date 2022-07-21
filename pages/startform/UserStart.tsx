import Link from "next/link"
import { useState } from "react"

const UserStart = () => {

	const [imageHover, setImageHover] = useState('hom1.gif')

	const changeImageStudent=()=> {
		const newImageHover1= 'formEducation.gif';
		setImageHover(newImageHover1);
	}

	const changeImageWorker=()=> {
		const newImageHover2='formWorker.gif';
		setImageHover(newImageHover2);
	}

  return (
    <div>
      <div className="d-flex flex-column bg-white flex-root">
			<div className="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column" id="kt_create_account_stepper">
				{/* <!--begin::Aside--> */}
			
				{/* <!--begin::Aside-->
				<!--begin::Body--> */}
				<div className="d-flex flex-column flex-lg-row-fluid py-10">
					{/* <!--begin::Content--> */}
					<div className="d-flex flex-center flex-column flex-column-fluid">
						{/* <!--begin::Wrapper--> */}
						<div className="w-lg-700px p-10 p-lg-15 mx-auto">
							{/* <!--begin::Form--> */}
							<form className="my-auto pb-5"  id="kt_create_account_form">
								{/* <!--begin::Step 1--> */}
								<div className="current" data-kt-stepper-element="content">
									{/* <!--begin::Wrapper--> */}
									<div className="w-100">
										{/* <!--begin::Heading--> */}
										<div className="pb-10 pb-lg-15">
											{/* <!--begin::Title--> */}
											<h1 className="fw-bolder d-flex align-items-center text-dark">How Would You Like To Start
											<i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Billing is issued based on your selected account type"></i></h1>
											{/* <!--end::Title-->
											<!--begin::Notice--> */}
											<div className="text-muted fw-bold fs-6">If you need more info, please check out
											<a href="#" className="link-primary fw-bolder">Help Page</a>.</div>
											{/* <!--end::Notice--> */}
										</div>
										{/* <!--end::Heading-->
										<!--begin::Input group--> */}
										<div className="fv-row">
											{/* <!--begin::Row--> */}
											<div className="row">
												{/* <!--begin::Col--> */}	
												<Link href={"/startform/Workxp"}>
													<div className="col-lg-12">
														{/* <!--begin::Option--> */}
														<input type="radio" className="btn-check" name="account_type" value="personal" checked="checked" id="kt_create_account_form_account_type_personal" />
														<label className="btn border border-default btn-outline btn-outline-light btn-outline-default p-7 d-flex align-items-center mb-10" htmlFor="kt_create_account_form_account_type_personal " onMouseOver={changeImageWorker}>
															{/* <!--begin::Svg Icon | path: icons/duotune/communication/com005.svg--> */}
															<span className="svg-icon svg-icon-3x me-5">
																<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																	<path d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z" fill="black" />
																	<path opacity="0.3" d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z" fill="black" />
																</svg>
															</span>
															{/* <!--end::Svg Icon-->
															<!--begin::Info--> */}

																<span className="d-block fw-bold text-start">
																	<span className="text-dark fw-bolder d-block fs-4 mb-2">As a Worker</span>
																	<span className="text-muted fw-bold fs-6">Start as a worker</span>
																</span>
															{/* <!--end::Info--> */}
														</label>
														{/* <!--end::Option--> */}
													</div>
												</Link>
												{/* <!--end::Col-->
												<!--begin::Col--> */}
												<Link href={"/startform/StudentED"}>
													<div className="col-lg-12 mt-n4">
														{/* <!--begin::Option--> */}
														<input type="radio" className="btn-check" name="account_type" value="corporate" id="kt_create_account_form_account_type_corporate" />
														<label className="btn btn-outline btn-outline-light btn-outline-default p-7 d-flex align-items-center" htmlFor="kt_create_account_form_account_type_corporate" onMouseOver={changeImageStudent}>
															{/* <!--begin::Svg Icon | path: icons/duotune/finance/fin006.svg--> */}
															<span className="svg-icon svg-icon-3x me-5">
																<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																	<path opacity="0.3" d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z" fill="black" />
																	<path d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z" fill="black" />
																</svg>
															</span>
															{/* <!--end::Svg Icon-->
															<!--begin::Info--> */}

																<span className="d-block fw-bold text-start">
																	<span className="text-dark fw-bolder d-block fs-4 mb-2">As a Student</span>
																	<span className="text-muted fw-bold fs-6">Create workers account</span>
																</span>
															{/* <!--end::Info--> */}
														</label>
														{/* <!--end::Option--> */}
													</div>
												</Link>
												{/* <!--end::Col--> */}
												{/* begin col */}
												<Link href={"../GGuserHome"}>
													<div className="col-lg-12 mt-7">
														{/* <!--begin::Option--> */}
														<input type="radio" className="btn-check" name="account_type" value="corporate" id="kt_create_account_form_account_type_corporate" />
														<label className="btn btn-outline btn-outline-light btn-outline-default p-7 d-flex align-items-center" htmlFor="kt_create_account_form_account_type_corporate" onMouseOver={changeImageStudent}>
															{/* <!--begin::Svg Icon | path: icons/duotune/finance/fin006.svg--> */}
															<span className="svg-icon svg-icon-3x me-5">
																<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																	<path opacity="0.3" d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z" fill="black" />
																	<path d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z" fill="black" />
																</svg>
															</span>
															{/* <!--end::Svg Icon-->
															<!--begin::Info--> */}

																<span className="d-block fw-bold text-start">
																	<span className="text-dark fw-bolder d-block fs-4 mb-2">As a General User</span>
																	<span className="text-muted fw-bold fs-6">Create Genearl Account</span>
																</span>
															{/* <!--end::Info--> */}
														</label>
														{/* <!--end::Option--> */}
													</div>
												</Link>
											</div>
											{/* <!--end::Row--> */}
										</div>
										{/* <!--end::Input group--> */}
									</div>
									{/* <!--end::Wrapper--> */}
								</div>
							</form>
								{/* <!--end::Step 1-->
							 <!--end::Form--> */}
						</div>
						
						
						{/* <!--end::Wrapper--> */}
					</div>
					

				</div>
				
				{/* starting of hover image section second column */}
				<div className="d-flex flex-column flex-lg-row-auto w-xl-500px bg-lighten m-10">					
					<img src={imageHover} alt="card" id="imgHover"  className="rounded w-100" />
				</div>
				{/* ending of hover image section second column */}

				
			</div>
			{/* <!--end::Authentication - Multi-steps--> */}
		</div>
    </div>
  )
}

export default UserStart