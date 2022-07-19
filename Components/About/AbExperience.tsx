import React from 'react'

const AbExperience = () => {
    return (
        <div>
            <div className="aboutform border rounded mt-3 p-7">
                <div className="card-header d-flex flex-wrap justify-content-between  px-4 mt-2">
                    <h3 className="card-title fw-bold fs-2 text-gray-900 mb-n5">Experience And Achievements</h3>
                    <div className="edit-prof  mb-4" >
                        <label className="btn  btn-icon mb-n5 btn-circle btn-active-light-primary w-40px h-40px bg-light" data-kt-image-input-action="change" data-bs-toggle="tooltip" data-kt-initialized="1">
                            <i className="bi bi-pencil-fill fs-4" />
                            {/* <!--begin::Inputs--> */}
                            {/* <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
									    	<input type="hidden" name="avatar_remove" /> */}
                            {/* <!--end::Inputs--> */}
                        </label>
                    </div>
                </div>

                <div className="card-body ms-2 mt-6">
                    {/* <!--begin::Row--> */}
                    <div className="row mb-7">
                        {/* <!--begin::Label--> */}
                        <label className="col-lg-2">
                            <span className="svg-icon svg-icon-2  " >
                                <img src="../about/work.png" alt="" height="45" width="auto" />
                            </span>
                        </label>
                        {/* <!--end::Label-->
												<!--begin::Col--> */}
                        <div className="col-lg-8 d-flex flex-column">
                            <div>

                                <span className="fw-bold fs-3 text-gray-800 ms-2">Going Genius</span>
                            </div>
                            <div>

                                <span className="fw-bold fs-5 text-gray-400 ms-2">Web Developer - Full Time</span>
                            </div>
                            <div>

                                <span className="fw-normal fs-5 text-gray-400 ms-2">2021-present</span>
                            </div>
                            {/* <hr /> */}
                        </div>
                        {/* <!--end::Col--> */}
                    </div>
                    <div className="row mb-7">
                        {/* <!--begin::Label--> */}
                        <label className="col-lg-2">
                            <span className="svg-icon svg-icon-2  " >
                                <img src="../about/work.png" alt="" height="45" width="auto" />
                            </span>
                        </label>
                        {/* <!--end::Label-->
												<!--begin::Col--> */}
                        <div className="col-lg-8 d-flex flex-column">
                            <div>

                                <span className="fw-bold fs-3 text-gray-800 ms-2">Going Genius</span>
                            </div>
                            <div>

                                <span className="fw-bold fs-5 text-gray-400 ms-2">Web Developer -Intern</span>
                            </div>
                            <div>

                                <span className="fw-normal fs-5 text-gray-400 ms-2">May 2021- June 2021</span>
                            </div>
                            <hr />
                        </div>
                        {/* <!--end::Col--> */}
                    </div>

                    <div className="row mb-7">
                        {/* <!--begin::Label--> */}
                        <label className="col-lg-2">
                            <span className="svg-icon svg-icon-2">
                                <img src="../about/badge.png" alt="" height="45" width="auto" />
                            </span>
                        </label>
                        {/* <!--end::Label-->
												<!--begin::Col--> */}
                        <div className="col-lg-8">
                            <span className="fw-bold fs-3 text-gray-800 ms-2">GENIUS</span>
                            <hr />
                        </div>
                        {/* <!--end::Col--> */}
                    </div>

                    {/* <!--end::Row-->
											
					<!--end::Wrapper--> */}
                </div>
                {/* <!--end::Notice--> */}


            </div>
        </div>
    )
}

export default AbExperience