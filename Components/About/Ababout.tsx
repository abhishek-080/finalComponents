import React from 'react'

const Ababout = () => {
    return (
        <div>
            <div className="aboutform border rounded mt-3 p-7">
                <div className="card-header d-flex flex-wrap justify-content-between  px-4 mt-2">
                    <h3 className="card-title fw-bold fs-2 text-gray-900 mb-n5">Personal Information</h3>
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
                                <img src="../about/account.png" alt="" height="40" width="auto" />
                            </span>
                        </label>
                        {/* <!--end::Label-->
												<!--begin::Col--> */}
                        <div className="col-lg-8">
                            <span className="fw-bold fs-5 text-gray-800 ms-2">Nikhil Upreti</span>
                            <hr />
                        </div>
                        {/* <!--end::Col--> */}
                    </div>

                    <div className="row mb-7">
                        {/* <!--begin::Label--> */}
                        <label className="col-lg-2">
                            <span className="svg-icon svg-icon-2">
                                <img src="../about/email.png" alt="" height="40" width="auto" />
                            </span>
                        </label>
                        {/* <!--end::Label-->
												<!--begin::Col--> */}
                        <div className="col-lg-8">
                            <span className="fw-bold fs-5 text-gray-800 ms-2">nikhil@gmail.com</span>
                            <hr />
                        </div>
                        {/* <!--end::Col--> */}
                    </div>

                    <div className="row mb-7">
                        {/* <!--begin::Label--> */}
                        <label className="col-lg-2">
                            <span className="svg-icon svg-icon-2">
                                <img src="../about/birthday-cake.png" alt="" height="40" width="auto" />
                            </span>
                        </label>
                        {/* <!--end::Label-->
												<!--begin::Col--> */}
                        <div className="col-lg-8">
                            <span className="fw-bold fs-5 text-gray-800 ms-2">January 1, 1996</span>
                            <hr />
                        </div>
                        {/* <!--end::Col--> */}
                    </div>

                    <div className="row mb-7">
                        {/* <!--begin::Label--> */}
                        <label className="col-lg-2">
                            <span className="svg-icon svg-icon-2">
                                <img src="../about/approved.png" alt="" height="40" width="auto" />
                            </span>
                        </label>                        {/* <!--end::Label-->
												<!--begin::Col--> */}
                        <div className="col-lg-8">
                            <span className="fw-bold ms-2 fs-5 text-gray-800">Web Developer</span>
                            <hr />
                        </div>
                        {/* <!--end::Col--> */}
                    </div>

                    <div className="row mb-7">
                        {/* <!--begin::Label--> */}
                        <label className="col-lg-2">
                            <span className="svg-icon svg-icon-2">
                                <img src="../about/calling.png" alt="" height="40" width="auto" />
                            </span>
                        </label>
                        {/* <!--end::Label-->
												<!--begin::Col--> */}
                        <div className="col-lg-8">
                            <span className="fw-bold fs-5 text-gray-800 ms-2">98088766</span>
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

export default Ababout