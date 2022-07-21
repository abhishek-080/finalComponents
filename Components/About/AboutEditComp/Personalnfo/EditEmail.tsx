import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineGlobal, AiOutlineLock } from 'react-icons/ai'
import { BsArrowBarRight, BsPeople } from 'react-icons/bs'

const EditEmail = (props) => {

    const [selectedImage, setSelectedImage] = useState();


    const onSubmit = (e) => {
        e.preventDefault()


    }


    return (

        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Personal Information
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div className="container" >
                        {/* <h1> Upload your photo or video  </h1> */}
                        <div className="row ">
                            <form onSubmit={onSubmit} className="form-inline">
                                <span className="fs-4 fw-bolder">Update Your Email</span>
                                <input type="text" name="fullname" className="form-control form-control-lg form-control-solid mt-4 mb-4" placeholder="Full Name" value="nikhil@gmail.com" />


                                <div className="d-flex felx-nowrap m-3 p-4">
                                    <div className=' p-2 ms-n7' data-toggle="tooltip" data-placement="top" title="Only Me" >
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label fs-1 mt-n7 ms-3 " htmlFor="flexRadioDefault1">
                                            <AiOutlineLock />
                                        </label> 
                                    </div>

                                    <div className='p-2' data-toggle="tooltip" data-placement="top" title="Public" >
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label className="form-check-label fs-1 mt-n7 ms-3 " htmlFor="flexRadioDefault2">
                                            <AiOutlineGlobal />
                                        </label>
                                    </div>


                                    <div className='p-2' data-toggle="tooltip" data-placement="top" title="Followers" >
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label className="form-check-label fs-1 mt-n7 ms-3 " htmlFor="flexRadioDefault2">
                                            <BsPeople />
                                        </label>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary mt-2" id="">Save Changes</button>
                            </form>

                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>

    )
};

export default EditEmail;

