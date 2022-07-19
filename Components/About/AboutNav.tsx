import Link from 'next/link'
import React from 'react'

const AboutNav = () => {
  return (
    <div>
         <div className="card-body pb-0 ">
            {/* <!--begin::Header--> */}

            <div className="row border  rounded ms-n4 me-n4">


                <ul className="d-flex justify-content-center nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder bg-white p-3 rounded">
                    {/* <!--begin::Nav item--> */}
                    <li className="nav-item mt-2">
                        <Link href={'/Profile'}>
                            <a className="nav-link text-active-primary ms-0 me-10 py-5" href="#">Posts</a>
                        </Link>
                    </li>
                    {/* <!--end::Nav item-->
										<!--begin::Nav item--> */}
                   <li className="nav-item mt-2">
                        <Link href={'/About'}>
                            <a className="nav-link text-active-primary ms-0 me-10 py-5 active" href="#">About</a>
                        </Link>
                    </li>
                    {/* <!--end::Nav item-->
										<!--begin::Nav item--> */}
                    <li className="nav-item mt-2">
                        <a className="nav-link text-active-primary ms-0 me-10 py-5" href="/metronic8/demo1/../demo1/pages/user-profile/campaigns.html">Following</a>
                    </li>
                    {/* <!--end::Nav item-->
										<!--begin::Nav item--> */}
                    <li className="nav-item mt-2">
                        <a className="nav-link text-active-primary ms-0 me-10 py-5" href="/metronic8/demo1/../demo1/pages/user-profile/documents.html">Photos</a>
                    </li>
                    {/* <!--end::Nav item-->
										<!--begin::Nav item--> */}
                    <li className="nav-item mt-2">
                        <a className="nav-link text-active-primary ms-0 me-10 py-5" href="/metronic8/demo1/../demo1/pages/user-profile/campaigns.html">Threads</a>
                    </li>
                    {/* <!--end::Nav item-->
										<!--begin::Nav item--> */}
                    <li className="nav-item mt-2 align-item-right">
                        <a className="nav-link text-active-primary ms-0 me-10 py-5" href="/metronic8/demo1/../demo1/pages/user-profile/campaigns.html">My Projects</a>
                    </li>

                    {/* more button */}
                    <li className='d-flex justify-content-end'>
                        <button type="button" className="btn btn-md float-end bg-light btn-icon btn-color-primary btn-active-light-primary mt-5" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" >
                            {/* <!--begin::Svg Icon | path: icons/duotune/general/gen024.svg--> */}

                            <i className='bi bi-three-dots fs-3'></i>

                            {/* <!--end::Svg Icon--> */}
                        </button>
                        {/* <!--begin::Menu 2--> */}
                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px" data-kt-menu="true">

                            {/* <!--end::Menu item-->
                    <!--begin::Menu separator--> */}
                            <div className="separator mb-3 opacity-75"></div>
                            {/* <!--end::Menu separator-->
                    <!--begin::Menu item--> */}
                            <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">Public View</a>
                            </div>
                            {/* <!--end::Menu item-->
                    <!--begin::Menu item--> */}
                            <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">Activity Log</a>
                            </div>
                            {/* <!--end::Menu item--> */}
                            <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">Profile Settings</a>
                            </div>
                        </div>
                        {/* <!--end::Menu 2--> */}

                    </li>
                    {/* <!--end::Nav item--> */}
                </ul>
                <div className=" d-flex justify-content-center">
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutNav