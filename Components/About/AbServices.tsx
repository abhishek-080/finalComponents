import React from 'react'

const AbServices = () => {
    return (
        <div>
            <div className="aboutform border rounded p-7">
                <div className="card-header d-flex flex-wrap justify-content-between">
                    <h3 className="card-title fw-bold fs-2 mt-1  text-gray-900 mb-n5">Services</h3>
                    <div className="edit-prof  mb-4" >
                        <label className="btn  btn-icon btn-circle mb-n5 btn-active-light-primary w-40px h-40px bg-light" data-kt-image-input-action="change" data-bs-toggle="tooltip" data-kt-initialized="1">
                            <i className="bi bi-pencil-fill fs-4" />
                        </label>
                    </div>
                </div>


                <div className=" skill-lists d-flex flex-wrap mt-7 gap-2 mt-2">

                    <div className="">

                        <label className="btn border btn-active-light-primary  d-flex text-start p-2" data-kt-button="true">
                            <span className="svg-icon svg-icon-2">
                                <img src="../about/web-design.png" alt="" height="35" width="auto" />
                            </span>
                            <span className="fw-bold fs-4 text-gray-800 ms-2 mt-2">Web development</span>
                        </label>
                    </div>

                    <div className="">

                        <label className="btn border btn-active-light-primary  d-flex text-start p-2" data-kt-button="true">
                            <span className="svg-icon svg-icon-2">
                                <img src="../about/photoshop.png" alt="" height="35" width="auto" />
                            </span>
                            <span className="fw-bold fs-4 text-gray-800 ms-2 mt-2">Photoshop</span>
                        </label>
                    </div>

                    <div className="">

                        <label className="btn border btn-active-light-primary  d-flex text-start p-2" data-kt-button="true">
                            <span className="svg-icon svg-icon-2">
                                <img src="../about/creativity.png" alt="" height="35" width="auto" />
                            </span>
                            <span className="fw-bold fs-4 text-gray-800 ms-2 mt-2">Designing</span>
                        </label>
                    </div>

                    <div className="">

                        <label className="btn border btn-active-light-primary  d-flex text-start p-2" data-kt-button="true">
                            <span className="svg-icon svg-icon-2">
                                <img src="../about/globe.png" alt="" height="35" width="auto" />
                            </span>
                            <span className="fw-bold fs-4 text-gray-800 ms-2 mt-2">Web Hosting</span>
                        </label>
                    </div>





                </div>
                {/* <!--end::Notice--> */}


            </div>
        </div>
    )
}

export default AbServices