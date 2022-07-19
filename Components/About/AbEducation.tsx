import React from 'react'

const AbEducation = () => {
  return (
    <div>
          <div className="aboutform border rounded mt-3 p-7">
                <div className="card-header d-flex flex-wrap justify-content-between  px-4 mt-2">
                    <h3 className="card-title fw-bold fs-2 text-gray-900 mb-n5">Education</h3>
                    <div className="edit-prof  mb-4" >
                        <label className="btn  btn-icon btn-circle mb-n5 btn-active-light-primary w-40px h-40px bg-light" data-kt-image-input-action="change" data-bs-toggle="tooltip" data-kt-initialized="1">
                            <i className="bi bi-pencil-fill fs-4" />
                            {/* <!--begin::Inputs--> */}
                            {/* <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
									    	<input type="hidden" name="avatar_remove" /> */}
                            {/* <!--end::Inputs--> */}
                        </label>
                    </div>
                </div>

                <div className="card-body mt-6">
                    {/* <!--begin::Row--> */}
                    <div className="row mb-7">
                        {/* <!--begin::Label--> */}
                        <label className="col-lg-2">
                            <span className="svg-icon svg-icon-2">
                                <img src="../about/school.png" alt="" height="40" width="auto" />
                            </span>
                        </label>                           {/* <!--end::Label-->
												<!--begin::Col--> */}
                        <div className="col-lg-8 d-flex flex-column">
                            <div>

                                <span className="fw-bold fs-5 text-gray-800 ms-2">NASA int'l College</span>
                            </div>
                            <div>

                                <span className="fw-bold fs-6 text-gray-500">+2, 2015</span>
                            </div>
                            <hr />
                        </div>
                        {/* <!--end::Col--> */}
                    </div>

                    <div className="row mb-7">
                        {/* <!--begin::Label--> */}
                        <label className="col-lg-2">
                            <span className="svg-icon svg-icon-2">
                                <img src="../about/bach.png" alt="" height="40" width="auto" />
                            </span>
                        </label>                           {/* <!--end::Label-->
												<!--begin::Col--> */}
                        <div className="col-lg-8 d-flex flex-column">
                            <div>

                                <span className="fw-bold fs-5 text-gray-800 ms-2">NASA int'l College</span>
                            </div>
                            <div>

                                <span className="fw-bold fs-6 text-gray-500">BSc.CSIT, 2015-2020</span>
                            </div>
                            <hr />
                        </div>
                        {/* <!--end::Col--> */}
                    </div>


                    <div className="row mb-7">
                        {/* <!--begin::Label--> */}
                        <label className="col-lg-2">
                            <span className="svg-icon svg-icon-2">
                                <img src="../about/uni.png" alt="" height="40" width="auto" />
                            </span>
                        </label>                           {/* <!--end::Label-->
												<!--begin::Col--> */}
                        <div className="col-lg-8 d-flex flex-column">
                            <div>

                                <span className="fw-bold fs-5 text-gray-800 ms-2">NASA int'l College</span>
                            </div>
                            <div>

                                <span className="fw-bold fs-6 text-gray-500">MSc, 2021</span>
                            </div>
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

export default AbEducation