import React, { useState } from 'react'
import Image from 'next/image'
import {BsCameraFill} from 'react-icons/bs'
import porfileImage from "/styles/assets/profileImage.png";

const GenerateCard = () => {

	const [title, setTitle] =useState('');
	const [addressCard, setAddress] =useState('');

  return (

<div className="card-body p-lg-17 rounded-3 ">
										{/* <!--begin::Row--> */}
										<div className="row mb-3 p-5   ">
											{/* <!--begin::Col--> */}
											<div className="col-md-6 pe-lg-10 " >
												{/* <!--begin::Form--> */}
												<form action="" className="form mb-15 fv-plugins-bootstrap5 fv-plugins-framework" method="post" id="kt_contact_form">
													<h1 className="fw-bolder text-dark fs-1 mb-3">Personal Information</h1>
													<p className="fw-bolder text-dark mb-9">Please provide us with your personal information for your Genius card</p>
													{/* <!--begin::Input group--> */}
													<div className="row mb-5">


	{/* <!--begin::Col Name--> */}
										<div className="d-flex flex-column mb-6 fv-row">
															{/* <!--begin::Label--> */}
															<label className="fs-5 fw-bold mb-2">Upload profile pic</label>
															{/* <!--end::Label-->
															<!--begin::Input--> */}
														
															{/* <!--end::Input--> */}
														</div>
														
														<div className="col-md-12 fv-row fv-plugins-icon-container">
														<Image src={porfileImage} alt="profile" className="rounded-circle"  width="120px" height="120px" style={{position:"relative"}}/>
														<i className="me-4 fa-2x text-dark rounded-circle" style={{position:"absolute",bottom:"1rem",left:"8rem",backgroundColor:"white"}}><BsCameraFill/></i>
															</div>
														{/* <!--end::Col-->

											
<!--begin::Col Email--> */}

														
																
														{/* <!--begin::Col Name--> */}
														<div className="col-lg-6 col-md-6 col-sm-6 fv-row fv-plugins-icon-container">
															{/* <!--begin::Label--> */}
															<label className="fs-5 fw-bold mb-2">Full Name</label>
															{/* <!--end::Label-->
															<!--begin::Input--> */}
															<input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} className="form-control form-control-solid" placeholder="" name="name"/>
															{/* <!--end::Input--> */}
														<div className="fv-plugins-message-container invalid-feedback"></div></div>
														{/* <!--end::Col-->

														<!--begin::Input group Phone number--> */}
												<div className="col-lg-6 col-md-6 col-sm-6 fv-row mb-5 fv-plugins-icon-container ">
														{/* <!--begin::Label--> */}
														<label className="fs-5 fw-bold mb-2 ">Phone Number</label>
														{/* <!--end::Label-->
														<!--begin::Input--> */}
														<input className="form-control form-control-solid" placeholder="" name="subject" autoComplete="off"/>
														{/* <!--end::Input--> */}
													</div>
													{/* <!--end::Input group-->


														<!--begin::Col Email--> */}
															<div className="d-flex flex-column fv-row">
															{/* <!--end::Label--> */}
															<label className="fs-5 fw-bold mb-2">Email</label>
															{/* <!--end::Label-->
															<!--end::Input--> */}
															<input type="text" className="form-control form-control-solid" placeholder="" name="email"/>
															{/* <!--end::Input--> */}
														<div className="fv-plugins-message-container invalid-feedback"></div></div>
														{/* <!--end::Col--> */}
													</div>
													{/* /* <!--end::Input group--> */}

													
													{/* <!--begin::Input group Address--> */ }
													<div className="d-flex flex-column mb-10 fv-row">
														<label className="fs-6 fw-bold mb-2">Address</label>
														<input type="text" onChange={(e)=>setAddress(e.target.value)} value={addressCard} className="form-control form-control-solid"  name="address" placeholder=""/>
													<div className="fv-plugins-message-container invalid-feedback"></div></div>
													{/* <!--end::Input group-->
													<!--begin::Submit--> */}
													<button type="submit" className="btn btn-primary" id="kt_contact_submit_button">
														{/* <!--begin::Indicator--> */}
														<span className="indicator-label">Generate</span>
														<span className="indicator-progress">Please wait... 
														<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
														{/* <!--end::Indicator--> */}
													</button>
													{/* <!--end::Submit--> */}
												<div></div></form>
												{/* <!--end::Form--> */}
											{/* </div>
											<!--end::Col-->
											<!--begin::Col--> */}
											
											</div>
											{/* <!--end::Col--> */}

											{/* this is gg card section  */}
								<div className="col-md-6 pe-lg-12 d-flex justify-content-center flex-wrap" >
								    <div className="row mb-5">
								        <div className="col-md-12 mb-5 fv-row  fv-plugins-icon-container">
								            {/* <img src="cardGG.png" alt="card "  className="rounded w-350px mb-4" style={ { boxShadow: "10px 6px 10px rgba(0,0,0,0.5)",position:"relative" }}/> */}
											<img src="cardHolder.png" alt="card "  className="rounded w-350px mb-4 " style={ { boxShadow: "10px 6px 10px rgba(0,0,0,0.5)",position:"relative" }}/>
								            {/* <h6 className="mt-4 p-1  text-white text-uppercase" style={{position:"absolute",top:"13rem" }}>{addressCard} </h6>
								            <h6 className="mt-4 p-1 text-white text-uppercase" style={{position:"absolute",top:"2rem"}}>{title} </h6> */}
											 <h6 className="mt-4 p-1  text-white text-uppercase fs-9" style={{position:"absolute",top:"21rem",left:"10rem" }}>{addressCard} </h6>
								            <h6 className="mt-4 p-1 text-white text-uppercase fs-9" style={{position:"absolute",top:"18rem",left:"10rem"}}>{title} </h6>
								        </div>
                                    </div>

{/* why use gg card section */}
								<div className="w-400px fv-row fv-plugins-icon-container rounded-3" style={ { boxShadow: "10px 6px 10px rgba(0,0,0,0.5)" }}>
								{/* <h6 className="mt-4 text-white text-uppercase text-dark text-center " >Why use the card </h6><hr/>
								<h6 className="mt-4 text-white text-uppercase text-dark " > It works as wallet </h6>
								<h6 className="mt-4 text-white text-uppercase text-dark " > You can earn loyality</h6>
								<h6 className="mt-4 text-white text-uppercase text-dark " > Gives profession look</h6>
								<h6 className="mt-4 text-white text-uppercase text-dark " > Helps in different operations</h6> */}
								
                                <img src="whyUseGG.jpg" alt="card "  className="rounded w-100 " />

								</div>
								</div>


								
						



										</div>
										{/* <!--end::Row-->
// end of main column of personal info
                                    {/* <!--end::Body--> */}


								</div>    
								//end of main row of personal info 
								
								

  )
}

export default GenerateCard