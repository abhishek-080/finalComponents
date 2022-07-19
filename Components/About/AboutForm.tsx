import React from 'react'

const AboutForm = () => {
    return (
        <div>
            <div className="aboutform card-border bg-white mt-3 p-3">
                <div className="d-flex">


                    <div className="sidelist col-lg-4">

                        <div className=" menu menu-column menu-title-gray-900 menu-state-bg-light-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500" id="#kt_aside_menu" data-kt-menu="true" data-kt-menu-expand="false">

                            <div className="p-2 border-right">

                                <div className="menu-item">
                                    <a className="menu-link" href="../../demo1/dist/documentation/getting-started/changelog.html">
                                        <span className="menu-icon">
                                            {/* <!--begin::Svg Icon | path: icons/duotune/coding/cod003.svg--> */}
                                            <span className="svg-icon svg-icon-2">
                                                {/* <img src="../threads.png" alt="" height="30" width="auto" /> */}
                                            </span>
                                            {/* <!--end::Svg Icon--> */}
                                        </span>
                                        <span className="menu-title fs-4 ms-2">About</span>
                                    </a>
                                </div>

                                <div className="menu-item">
                                    <a className="menu-link" href="../../demo1/dist/documentation/getting-started/changelog.html">
                                        <span className="menu-icon">
                                            {/* <!--begin::Svg Icon | path: icons/duotune/coding/cod003.svg--> */}
                                            <span className="svg-icon svg-icon-2">
                                                {/* <img src="../follows.png" alt="" height="30" width="auto" /> */}
                                            </span>
                                            {/* <!--end::Svg Icon--> */}
                                        </span>
                                        <span className="menu-title fs-4 ms-2">Education</span>
                                    </a>
                                </div>

                                <div className="menu-item">
                                    <a className="menu-link" href="../../demo1/dist/documentation/getting-started/changelog.html">
                                        <span className="menu-icon">
                                            {/* <!--begin::Svg Icon | path: icons/duotune/coding/cod003.svg--> */}
                                            <span className="svg-icon svg-icon-2">
                                                {/* <img src="../notification.png" alt="" height="30" width="auto" /> */}
                                            </span>
                                            {/* <!--end::Svg Icon--> */}
                                        </span>
                                        <span className="menu-title fs-4 ms-2">Experinces</span>
                                    </a>
                                </div>

                                <div className="menu-item">
                                    <a className="menu-link" href="../../demo1/dist/documentation/getting-started/changelog.html">
                                        <span className="menu-icon">
                                            {/* <!--begin::Svg Icon | path: icons/duotune/coding/cod003.svg--> */}
                                            <span className="svg-icon svg-icon-2">
                                                {/* <img src="../messages.png" alt="" height="30" width="auto" /> */}
                                            </span>
                                            {/* <!--end::Svg Icon--> */}
                                        </span>
                                        <span className="menu-title fs-4 ms-2">Services</span>
                                    </a>
                                </div>
                                <div className="menu-item">
                                    <a className="menu-link" href="../../demo1/dist/documentation/getting-started/changelog.html">
                                        <span className="menu-icon">
                                            {/* <!--begin::Svg Icon | path: icons/duotune/coding/cod003.svg--> */}
                                            <span className="svg-icon svg-icon-2">
                                                {/* <img src="../saved.png" alt="" height="30" width="auto" /> */}
                                            </span>
                                            {/* <!--end::Svg Icon--> */}
                                        </span>
                                        <span className="menu-title fs-4 ms-2">Portfolio</span>
                                    </a>
                                </div>
                                <div className="menu-item">
                                    <a className="menu-link" href="../../demo1/dist/documentation/getting-started/changelog.html">
                                        <span className="menu-icon">
                                            {/* <!--begin::Svg Icon | path: icons/duotune/coding/cod003.svg--> */}
                                            <span className="svg-icon svg-icon-2">
                                                {/* <img src="../saved.png" alt="" height="30" width="auto" /> */}
                                            </span>
                                            {/* <!--end::Svg Icon--> */}
                                        </span>
                                        <span className="menu-title fs-4 ms-2">Contacts</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="aboutforms">
                        <div className="d-flex">
                            <form action="">
                            <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
									<span className="required">Address</span>
									{/* <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" aria-label="Specify a card holder's name" data-kt-initialized="1"></i> */}
								</label>
                                <input type="text" className='form-control form-control-solid' />


                                <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
									<span className="required">Designation</span>
									{/* <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" aria-label="Specify a card holder's name" data-kt-initialized="1"></i> */}
								</label>
                                <input type="text" className='form-control form-control-solid' />


                                <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
									<span className="required">Date Of Birth</span>
									{/* <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" aria-label="Specify a card holder's name" data-kt-initialized="1"></i> */}
								</label>
                                <input type="text" className='form-control form-control-solid' />

                                <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
									<span className="required">Skills</span>
									{/* <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" aria-label="Specify a card holder's name" data-kt-initialized="1"></i> */}
								</label>
                                <input type="text" className='form-control form-control-solid' />
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutForm