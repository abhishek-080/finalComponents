import Link from 'next/link'
import router, { useRouter } from 'next/router'


const GraduateForm = () => {
  return (
    <div>
         <div className="d-flex flex-column flex-root">
			<div className="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column" id="kt_create_account_stepper">
				{/* <!--begin::Aside--> */}
				{/* <div className="d-flex flex-column flex-lg-row-auto w-xl-500px bg-lighten shadow-sm">
					{/* <!--begin::Wrapper--> */}
					
					{/* <!--end::Wrapper--> 
				</div> */}
				{/* <!--begin::Aside-->
				<!--begin::Body--> */}
				<div className="d-flex flex-column flex-lg-row-fluid py-10">
					{/* <!--begin::Content--> */}
					<div className="d-flex flex-center flex-column flex-column-fluid">
						{/* <!--begin::Wrapper--> */}
						<div className="col-sm-10 w-lg-500px  p-10 p-lg-15	 mx-auto">
							{/* <!--begin::Form--> */}
							<form className="my-auto pb-5"  id="kt_create_account_form">
								{/* <!--begin::Step 1--> */}
								<div className="current" data-kt-stepper-element="content">
									{/* <!--begin::Wrapper--> */}   
									<div className="w-100">
										{/* <!--begin::Heading--> */}
										<div className="pb-10 pb-lg-15">
											{/* <!--begin::Title--> */}
											<h2 className="fw-bolder d-flex align-items-center text-dark">When did you graduate?
											{/* <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Billing is issued based on your selected account type"></i> */}
                                            </h2>
											{/* <!--end::Title-->*/}
										</div>
										{/* <!--end::Heading-->
										<!--begin::Input group--> */}
										<div className="fv-row">
											{/* <!--begin::Row--> */}
											<div className="row d-flex flex-wrap">
												{/* <!--begin::Col--> */}
                                                
                                                <div className="d-flex flex-column mb-7 fv-row fv-plugins-icon-container">
											        {/* <!--begin::Label--> */}
											        <label className="d-flex align-items-center fs-6 fw-bold form-label mb-2">
											        	<span className="required">Institute Name</span>
											        </label>
											        {/* <!--end::Label--> */}
											        <input type="text" className="form-control form-control-solid" placeholder="institute name" name="card_name" />
										            <div className="fv-plugins-message-container invalid-feedback"></div></div>													
												</div>
												{/* <!--end::Col-->
												<!--begin::Col--> */}

                                            <div className="col-md-8 fv-row" >
								            	{/* <!--begin::Label--> */}
								            	<label className="required fs-6 fw-bold form-label mb-2">Expiration Date</label>
								            	{/* <!--end::Label-->
								            	<!--begin::Row--> */}
								            	<div className="row fv-row fv-plugins-icon-container">
								            		{/* <!--begin::Col--> */}
								            		<div className="col-6">
								            			<select name="graduate_month" className="form-select form-select-solid select2-hidden-accessible" data-control="" data-hide-search="true" data-placeholder="Month" data-select2-id="select2-data-16-1sa5" tabindex="-1" aria-hidden="true">
								            				<option data-select2-id="select2-data-18-6efv"></option>
								            				<option value="1" data-select2-id="select2-data-130-jy3r">1</option>
								            				<option value="2" data-select2-id="select2-data-131-mu64">2</option>
								            				<option value="3" data-select2-id="select2-data-132-5k99">3</option>
								            				<option value="4" data-select2-id="select2-data-133-ipyc">4</option>
								            				<option value="5" data-select2-id="select2-data-134-mphx">5</option>
								            				<option value="6" data-select2-id="select2-data-135-ljok">6</option>
								            				<option value="7" data-select2-id="select2-data-136-puxe">7</option>
								            				<option value="8" data-select2-id="select2-data-137-d91i">8</option>
								            				<option value="9" data-select2-id="select2-data-138-pyvx">9</option>
								            				<option value="10" data-select2-id="select2-data-139-5vgr">10</option>
								            				<option value="11" data-select2-id="select2-data-140-0j2c">11</option>
								            				<option value="12" data-select2-id="select2-data-141-qeth">12</option>
								            			</select><span className="select2 select2-container select2-container--bootstrap5 select2-container--below select2-container--focus" dir="ltr" data-select2-id="select2-data-17-7ptx" style={{width:" 100%"}} ><span className="selection"><span className="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-card_expiry_month-re-container" aria-controls="select2-card_expiry_month-re-container"><span className="select2-selection__rendered" id="select2-card_expiry_month-re-container" role="textbox" aria-readonly="true" title="Month"><span className="select2-selection__placeholder">Month</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
								            		<div className="fv-plugins-message-container invalid-feedback"></div></div>
								            		{/* <!--end::Col-->
								            		<!--begin::Col--> */}
								            		<div className="col-6">
								            			<select name="graduate_year" className="form-select form-select-solid select2-hidden-accessible" data-control="select2" data-hide-search="true" data-placeholder="Year" data-select2-id="select2-data-19-3d2a" tabindex="-1" aria-hidden="true">
								            				<option data-select2-id="select2-data-21-88rr"></option>
								            				<option value="2022">2022</option>
								            				<option value="2023">2023</option>
								            				<option value="2024">2024</option>
								            				<option value="2025">2025</option>
								            				<option value="2026">2026</option>
								            				<option value="2027">2027</option>
								            				<option value="2028">2028</option>
								            				<option value="2029">2029</option>
								            				<option value="2030">2030</option>
								            				<option value="2031">2031</option>
								            				<option value="2032">2032</option>
								            			</select><span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-20-apft" style={{width: "100%"}} ><span className="selection"><span className="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-card_expiry_year-dn-container" aria-controls="select2-card_expiry_year-dn-container"><span className="select2-selection__rendered" id="select2-card_expiry_year-dn-container" role="textbox" aria-readonly="true" title="Year"><span className="select2-selection__placeholder">Year</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
								            		<div className="fv-plugins-message-container invalid-feedback"></div></div>
								            		{/* <!--end::Col--> */}
								            	</div>
								            	{/* <!--end::Row--> */}
								            </div>
                                            
                                                
                                                
                                               
											</div>
												{/* <!--end::Col--> */}
											</div>
											{/* <!--end::Row--> */}
										</div>
                                        <div className="d-flex flex-stack pt-15">
									{/* <div className="mr-2">
										{/* <button type="button" className="btn btn-lg btn-light-primary me-3" data-kt-stepper-action="previous"> */}
										{/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr063.svg--> */}
										{/* <span className="svg-icon svg-icon-4 me-1">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1" fill="currentColor"></rect>
												<path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z" fill="currentColor"></path>
											</svg>
										</span>
                                         
										<!--end::Svg Icon--> 
                                         Previous</button> 
									</div> */}
									<div>
										<button type="button" className="btn btn-lg btn-primary d-inline-block" data-kt-stepper-action="submit">
											<span className="indicator-label">Get Started 
											{/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr064.svg--> */}
											 <span className="svg-icon svg-icon-4 ms-2">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
													<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor"></rect>
													<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor"></path>
												</svg>
											</span> 
											{/* {/* <!--end::Svg Icon-->  */}
                                            </span>
											<span className="indicator-progress">Please wait... 
											<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
										</button>
									</div>
								</div>
										{/* <!--end::Input group--> */}
									{/* <!--end::Wrapper--> */}
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
				<div className="col-sm-8 col-md-10 d-flex flex-column flex-lg-row-auto w-xl-500px bg-lighten m-10">
					<img src="../graduate2.gif" alt="card" id="imgHover"  className="rounded w-100 mb-4" />

				</div>
				{/* side image end */}
				
			</div>
		</div>
    </div>
  )
}

export default GraduateForm