import Link from 'next/link'
import React from 'react'
import { AiOutlineGlobal, AiOutlineLock } from 'react-icons/ai'
import { BsArrowBarRight, BsPeople } from 'react-icons/bs'
import EditEmail from './AboutEditComp/Personalnfo/EditEmail'
import FullName from './AboutEditComp/Personalnfo/FullName'

const Ababout = () => {

    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow1, setModalShow1] = React.useState(false);

    return (
        <div>
            <div className="aboutform border rounded mt-3 p-7">
                <div className="card-header mb-2">
                    <h3 className="card-title fw-bold fs-2 text-gray-900">Personal Information</h3>
                    {/* <div className="edit-prof  mb-4" >
                        <label className="btn  btn-icon mb-n5 btn-circle btn-active-light-primary w-40px h-40px bg-light" data-kt-image-input-action="change" data-bs-toggle="tooltip" data-kt-initialized="1">
                            <i className="bi bi-pencil-fill fs-4" />
                        </label>
                    </div> */}
                </div>

                <div className="card-body mt-6">
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
                        <div className=" cursor-pointer col-lg-10 border-bottom d-flex flex-wrap justify-content-between grayHover p-3 rounded"
                            role="button"
                            onClick={() => setModalShow(true)}>
                            <div className=''>
                                <span className="fw-bold fs-4 text-gray-800 ms-2 ">Nikhil Upreti</span>
                            </div>
                            <div>
                                <span className='fs-2'>

                                    <BsArrowBarRight />
                                </span>

                            </div>
                        </div>
                        <FullName
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />


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
                            <div className=" cursor-pointer col-lg-10 border-bottom d-flex flex-wrap justify-content-between grayHover p-3 rounded" role="button"
                            onClick={() => setModalShow1(true)}>
                                <div className=''>
                                    <span className="fw-bold fs-4 text-gray-800 ms-2 ">nikhil@gmail.com</span>
                                </div>
                                <div>
                                    <span className='d-flex'>
                                        <div className='me-5 fs-2' data-toggle="tooltip" data-placement="top" title="Only Me" >
                                            <AiOutlineLock />
                                        </div>
                                        {/* <div className='me-5 fs-2' data-toggle="tooltip" data-placement="top" title="Public" >
                                            <AiOutlineGlobal />
                                        </div> */}
                                        {/* <div className='me-5 fs-2' data-toggle="tooltip" data-placement="top" title="visible to friends" >
                                            <BsPeople />
                                        </div> */}
                                        <div className='fs-2'>
                                            <BsArrowBarRight />
                                        </div>

                                    </span>

                                </div>
                            </div>
                            <EditEmail
                            show={modalShow1}
                            onHide={() => setModalShow1(false)}
                        />
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
                        <Link href={''}>
                            <div className=" cursor-pointer col-lg-10 border-bottom d-flex flex-wrap justify-content-between grayHover p-3 rounded">
                                <div className=''>
                                    <span className="fw-bold fs-4 text-gray-800 ms-2 ">Jan 1, 1996</span>
                                </div>
                                <div>
                                    <span className='d-flex'>
                                        <div className='me-5 fs-2' data-toggle="tooltip" data-placement="top" title="Only Me" >
                                            <AiOutlineLock />
                                        </div>
                                        {/* <div className='me-5 fs-2' data-toggle="tooltip" data-placement="top" title="Public" >
                                            <AiOutlineGlobal />
                                        </div> */}
                                        {/* <div className='me-5 fs-2' data-toggle="tooltip" data-placement="top" title="visible to friends" >
                                            <BsPeople />
                                        </div> */}
                                        <div className='fs-2'>
                                            <BsArrowBarRight />
                                        </div>

                                    </span>

                                </div>
                            </div>
                        </Link>
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
                        <Link href={''}>
                            <div className=" cursor-pointer col-lg-10 border-bottom d-flex flex-wrap justify-content-between grayHover p-3 rounded">
                                <div className=''>
                                    <span className="fw-bold fs-4 text-gray-800 ms-2 ">Web Developer</span>
                                </div>
                                <div>
                                    <span className='d-flex'>
                                        <div className='me-5 fs-2' data-toggle="tooltip" data-placement="top" title="Only Me" >
                                            {/* <AiOutlineLock /> */}
                                        </div>
                                        <div className='me-5 fs-2' data-toggle="tooltip" data-placement="top" title="Public" >
                                            <AiOutlineGlobal />
                                        </div>
                                        {/* <div className='me-5 fs-2' data-toggle="tooltip" data-placement="top" title="visible to friends" >
                                            <BsPeople />
                                        </div> */}
                                        <div className='fs-2'>
                                            <BsArrowBarRight />
                                        </div>

                                    </span>

                                </div>
                            </div>
                        </Link>
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
                        <Link href={''}>
                            <div className=" cursor-pointer col-lg-10 border-bottom d-flex flex-wrap justify-content-between grayHover p-3 rounded">
                                <div className=''>
                                    <span className="fw-bold fs-4 text-gray-800 ms-2 ">+977 989989898</span>
                                </div>
                                <div>
                                    <span className='d-flex'>
                                        {/* <div className='me-5 fs-2' data-toggle="tooltip" data-placement="top" title="Only Me" >
                                            <AiOutlineLock />
                                        </div> */}
                                        {/* <div className='me-5 fs-2' data-toggle="tooltip" data-placement="top" title="Public" >
                                            <AiOutlineGlobal />
                                        </div> */}
                                        <div className='me-5 fs-2' data-toggle="tooltip" data-placement="top" title="visible to followers" >
                                            <BsPeople />
                                        </div>
                                        <div className='fs-2'>
                                            <BsArrowBarRight />
                                        </div>

                                    </span>

                                </div>
                            </div>
                        </Link>
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

function setModalShow(arg0: boolean): void {
    throw new Error('Function not implemented.')
}
