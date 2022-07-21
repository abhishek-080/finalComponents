import Link from "next/link"
import router, { useRouter } from 'next/router'


const Workxp = () => {
  return (
        <div className="d-flex bg-white flex-column flex-root">
			<div className="d-flex flex-column flex-lg-row flex-column-fluid stepper justify-content-space-evenly stepper-pills stepper-column" id="kt_create_account_stepper">
				{/* <!--begin::Body--> */}
				<div className="col-lg-8 d-flex flex-column flex-lg-row-fluid py-10">
					{/* <!--begin::Content--> */}
					<div className="d-flex flex-center flex-column flex-column-fluid">
						{/* <!--begin::Wrapper--> */}
						<div className="col-lg-4 col-sm-10 w-lg-500px p-10 p-lg-15 mx-auto">
							{/* <!--begin::Form--> */}
							<form className="my-auto pb-5"  id="kt_create_account_form">
								{/* <!--begin::Step 1--> */}
								<div className="current" data-kt-stepper-element="content">
									{/* <!--begin::Wrapper--> */}
									<div className="w-100">
										{/* <!--begin::Heading--> */}
										<div className="pb-10 pb-lg-15">
											{/* <!--begin::Title--> */}
											<h1 className="fw-bolder d-flex align-items-center text-dark">Do You have work Experience?
											{/* <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Billing is issued based on your selected account type"></i> */}
                                            </h1>
											{/* <!--end::Title-->
											<!--begin::Notice--> */}
											{/* <div className="text-muted fw-bold fs-6">Select your highest level attainded. */}
											{/* <a href="#" className="link-primary fw-bolder">Help Page</a>. */}
                                            {/* </div> */}
											{/* <!--end::Notice--> */}
										</div>
										{/* <!--end::Heading-->
										<!--begin::Input group--> */}
										<div className="fv-row">
											{/* <!--begin::Row--> */}
											<div className="row">
												{/* <!--begin::Col--> */}
												<Link href={"/startform/WorkXpDet"}>
													<div className="col-lg-5 col-md-5 col-sm-6">			
														{/* <!--begin::Option--> */}
										
                                                	    	{/* <input type="radio" className="btn-check" name="account_type" value="personal"  id="kt_create_account_form_account_type_personal" /> */}
															<label className="btn btn-outline btn-outline-light p-7 d-flex justify-content-center mb-10" htmlFor="kt_create_account_form_account_type_personal">
																<span className="d-block fw-bold text-start">
                                                            	    <span className="svg-icon svg-icon-4x me-5">
																		<img src="../icon-yes.png" width="50" height="50" />
                                                            		</span>
																	<span className="text-dark d-block fs-2 mt-2">Yes</span>
																</span>
																{/* <!--end::Info--> */}
															</label>

														{/* <!--end::Option--> */}
													</div>
                                                </Link>
												{/* <!--end::Col-->
												<!--begin::Col--> */}
												<div className="col-lg-5 col-md-5 col-sm-6">			
														{/* <!--begin::Option--> */}
										
                                                	    	{/* <input type="radio" className="btn-check" name="account_type" value="personal"  id="kt_create_account_form_account_type_personal" /> */}
															<label className="btn btn-outline btn-outline-light p-7 d-flex justify-content-center mb-10" htmlFor="kt_create_account_form_account_type_personal">
																<span className="d-block fw-bold text-start">
                                                            	    <span className="svg-icon svg-icon-4x me-5">
																		<img src="../icon-no.png" width="50" height="50" />
                                                            		</span>
																	<span className="text-dark d-block fs-2 mt-2">No</span>
																</span>
																{/* <!--end::Info--> */}
															</label>

														{/* <!--end::Option--> */}
													</div>
												{/* <!--end::Col--> */}
											</div>
											{/* <!--end::Row--> */}
										</div>
										{/* <!--end::Input group--> */}
									</div>
									{/* <!--end::Wrapper--> */}
								</div>
							</form>
							{/* <!--end::Form--> */}
							<div>
								<button onClick={() => router.back()} type="button" className="btn btn-lg btn-success d-inline-block" data-kt-stepper-action="previous">
                                    {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr064.svg--> */}
									 <span className="svg-icon svg-icon-4 ">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1" fill="currentColor"></rect>
										<path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z" fill="currentColor"></path>
									</svg>
									</span> 
									{/* {/* <!--end::Svg Icon-->  */}
									<span className="indicator-label">Previous
                                    </span>
								</button>
							</div>
						</div>
						
						{/* <!--end::Wrapper--> */}
					</div>

				</div>
				{/* <!--end::Body--> */}

				{/* sideimage start */}
				<div className="col-lg-8 col-sm-10 col-md-10 d-flex flex-column flex-lg-row-auto w-xl-500px ms-n5 m-20">
					<img src="../working-man.gif" alt="card" id="imgHover"  className="rounded w-100" />

				</div>
				{/* side image end */}
			</div>
		</div>
  )
}

export default Workxp