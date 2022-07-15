import React from 'react'

const ProfUserTop = () => {
    return (
        <div>
            <div className="card mb-5 mb-lg-8">
                <div className="card-body pt-9 mt-n3 bg-dark rounded p-0">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex flex-wrap flex-sm-nowrap bg-white p-5" style={{ marginTop: "200px", marginBottom: "-50px" }}>
                       
                         {/* <!--begin: Pic--> */}

                        
                        <div className="me-7 mb-4 p-0">
                            <div className="symbol symbol-100px symbol-lg-200px symbol-fixed position-relative ms-6 mt-2 " >
                                <img src="/assets/media/avatars/300-1.jpg" alt="image" style={{ borderRadius: "100px", marginTop: "-70px", border:"5px solid white" }} />
                            </div>
                        </div>
                        {/* <!--end::Pic-->
				<!--begin::Info--> */}
                        <div className="flex-grow-1 rounded">
                            {/* <!--begin::Title--> */}
                            <div className="d-flex justify-content-between flex-wrap mb-2">
                                {/* <!--begin::User--> */}
                                <div className="d-flex flex-column p-3">
                                    {/* <!--begin::Name--> */}
                                    <div className="d-flex align-items-center mb-2">
                                        <a href="#" className="text-gray-900 text-hover-primary fs-1 fw-bold me-1">Nikhil Upreti</a>
                                        <a href="#">
                                            {/* <!--begin::Svg Icon | path: icons/duotune/general/gen026.svg--> */}
                                            <span className="svg-icon svg-icon-1 svg-icon-primary">
                                            </span>
                                            {/* <!--end::Svg Icon--> */}
                                        </a>
                                        <a href="#" className="btn btn-sm btn-light-success fw-bold ms-2 fs-8 py-1 px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Upgrade to Pro</a>
                                    </div>
                                    {/* <!--end::Name-->
							<!--begin::Info--> */}
                                    <div className="d-flex flex-column fw-bold fs-6 mb-4 pe-2">
                                        <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2" >
                                            <span className="svg-icon svg-icon-4 me-1 bg-light p-2 rounded">
                                                Web Developer
                                            </span>
                                        </a>
                                        <span className="text-gray-900 ms-2">
                                            Rock n Roll
                                        </span>

                                    </div>
                                    
                                    {/* <!--end::Info--> */}

                                 

                                </div>

                                {/* follow annd followers */}
                                <div className="d-flex flex-wrap justify-content-end  flex-stack">
                                {/* <!--begin::Wrapper--> */}
                                <div className="d-flex mt-4 ms-2">
                                    {/* <!--begin::Stats--> */}
                                    <div className="d-flex flex-nowrap mt-7 ">
                                        {/* <!--begin::Stat--> */}
                                        <div className="btn border border-gray-300 btn-active-light-success min-w-125px py-3 px-4 me-6 mb-3">
                                            {/* <!--begin::Number--> */}
                                            <div className="d-flex align-items-center mt-2 p-1">
                                                {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg--> */}

                                                {/* <!--end::Svg Icon--> */}
                                                <div className="fs-2 fw-bolder counted" data-kt-countup="true" data-kt-countup-value="4500" data-kt-countup-prefix="$">100</div>
                                            <div className="fw-bold fs-4 ms-3 text-gray-400">Followers</div>
                                            </div>
                                            {/* <!--end::Number-->
											<!--begin::Label--> */}
                                            {/* <!--end::Label--> */}
                                        </div>
                                        {/* <!--end::Stat-->
										<!--begin::Stat--> */}
                                        <div className="btn border border-gray-300 btn-active-light-success min-w-125px py-3 px-4 me-6 mb-3">
                                            {/* <!--begin::Number--> */}
                                            <div className="d-flex align-items-center mt-2 p-1">
                                                <div className="fs-2 fw-bolder counted" data-kt-countup="true" data-kt-countup-value="80">80</div>
                                            <div className="fw-bold fs-4 ms-3 text-gray-400">Following</div>
                                            </div>
                                            {/* <!--end::Number-->
												<!--begin::Label--> */}
                                            {/* <!--end::Label--> */}
                                        </div>
                                        
                                    </div>
                                    <div>
                                        
                                    </div>
                                </div>

                                
                                
                        {/* edit cover */}
                        <div className="edit-prof  " >
                                        <label className="btn  btn-icon btn-circle btn-active-light-primary w-50px h-50px bg-light" data-kt-image-input-action="change" data-bs-toggle="tooltip" data-kt-initialized="1" style={{marginTop:"30px" }}>
									    	<i className="bi bi-pencil-fill fs-3" />
									    	{/* <!--begin::Inputs--> */}
									    	{/* <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
									    	<input type="hidden" name="avatar_remove" /> */}
									    	{/* <!--end::Inputs--> */}
									    </label>
                                </div>
                        {/* end */}

                               
                                </div>
                                
                                {/* <!--end::User */}
                            </div>
                            {/* <!--end::Title-->
							<!--begin::Stats--> */}
                           

                            {/* <!--end::Stats--> */}
                        </div>
                        {/* <!--end::Info--> */}
                    </div>
                    

                    {/* <!--end::Details--> */}
                </div>
                {/* <div className="d-flex align-items-center w-100%  flex-column  mt-n6 p-5" style={{backgroundColor:"#FFF8E1"}}>
								<div className="d-flex justify-content-between w-100 mt-auto mb-2">
									<span className="fw-bold fs-6 text-400">Profile Completion status</span>
									<span className="fw-bolder fs-6">60%</span>
								</div> */}
                {/* <div className="h-10px mx-3 w-100 mb-n3 rounded" style={{backgroundColor: "#DCDCDC"}}>
									<div className="bg-success rounded h-10px" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
								</div> */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default ProfUserTop