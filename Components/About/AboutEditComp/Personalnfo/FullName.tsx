import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineGlobal, AiOutlineLock } from 'react-icons/ai'
import { BsArrowBarRight, BsPeople } from 'react-icons/bs'

const FullName = (props) => {

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
                                <span className="fs-4 fw-bolder">Update Full Name</span>
                                <input type="text" name="fullname" className="form-control form-control-lg form-control-solid mt-4 mb-4" placeholder="Full Name" value="Nikhil Upreti" />

                                <button type="submit" className="btn btn-primary mt-2" id="">Save Changes</button>
                            </form>

                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>

    )
};

export default FullName;
