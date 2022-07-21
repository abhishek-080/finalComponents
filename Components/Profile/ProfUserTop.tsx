import React from 'react'
import ProfFollowers from './ProfFollowers';

const ProfUserTop = () => {
    return (
        <div>
            <div className="card mb-5 mb-lg-8 ">
                <div className="card-body bg-dark rounded p-0">
                    <div className="coverimg" style={{ maxHeight: "300px", overflow: "hidden" }}>
                        <img src="../galaxy.jpg" alt="image" style={{ width: "100%", height: "auto" }} />
                    </div>
                    {/* <!--begin::Details--> */}
                    <div className="d-flex flex-wrap flex-sm-nowrap bg-white p-5" style={{ marginTop: "00px", marginBottom: "-50px" }}>

                        {/* <!--begin: Pic--> */}


                        <div className="me-7 mb-4 p-0">
                            <div className="symbol symbol-100px symbol-lg-200px symbol-fixed position-relative ms-6 mt-2 " >
                                <img src="/assets/media/avatars/300-1.jpg" alt="image" style={{ borderRadius: "100px", marginTop: "-70px", border: "5px solid white" }} />
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
                                        {/* <a href="#" className="btn btn-sm btn-light-success fw-bold ms-2 fs-8 py-1 px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Upgrade to Pro</a> */}
                                    </div>
                                    {/* <!--end::Name-->
							<!--begin::Info--> */}
                                    <div>
                                         <div className="d-flex flex-column fw-bold fs-6 mb-4 pe-2">

                                            {/* <a href="#" className="d-flex align-items-center text-gray-400 me-5 mb-2" > */}
                                            <span className="svg-icon text-gray-400 svg-icon-4 mt-n2 me-1 p-2 ">
                                                Web Developer
                                            </span>
                                            {/* </a> */}

                                            <div className='d-flex mt-3 flex-nowrap'>
                                                <div className="text-gray-900  fs-4 ms-2">
                                                    <a href="#">

                                                        70 Followers
                                                    </a>
                                                </div>
                                                <div className="text-gray-900 fs-4 ms-4">
                                                    <a href="#">

                                                        90 Following
                                                    </a>
                                                </div>
                                            </div>

                                            <span className="text-gray-900 ms-2 mt-2">
                                                Rock n Roll
                                            </span>

                                        </div>
                                    </div>

                                    {/* <!--end::Info--> */}



                                </div>

                                {/* follow annd followers */}
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