import React , { useState } from "react";
import { Button } from "react-bootstrap";
import PreviewImage from "../../pages/previewImage";
import VerifyPhone from "../Registermodules/verifyphone"

const Post_box = () => {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>

			{/* <!-- create post --> */}

 <div className="bg-white p-3 mt-3 rounded border shadow">
    {/* <!-- avatar --> */}
    <div className="d-flex" role="button">
      <div className="p-1">
        <img
          src="https://source.unsplash.com/collection/happy-people"
          alt="avatar"
          className="rounded-circle me-2"
          style= {{width: "38px", height: "38px", objectFit: "cover"}}
         />
      </div>
        <input
          type="text"
          className="form-control rounded-pill border-0 bg-gray pointer"
          disabled
          placeholder="What's on your mind, genius?"
          data-bs-toggle="modal"
          data-bs-target="#createModal"
        />
    </div>
    {/* <!-- create modal --> */}
    <div
      className="modal fade"
      id="createModal"
      tabindex="-1"
      aria-labelledby="createModalLabel"
      aria-hidden="true"
      data-bs-backdrop="false"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {/* <!-- head --> */}
          <div className="modal-header align-items-center">
            <h5
              className="text-dark text-center w-100 m-0"
              id="exampleModalLabel"
            >
              Create Post
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          {/* <!-- body --> */}
          
            

        <div className="modal-body">
          <div className="my-1 p-1">

              {/* Form start */}
            <form action="" id="kt_forms_widget_1_form" className="ql-quil ql-quil-plain pb-3">
              <div className="d-flex flex-column">
                {/* <!-- name --> */}
                <div className="d-flex align-items-center">
                  <div className="col-lg-2">
                    <img
                      src="https://source.unsplash.com/collection/happy-people"
                      alt="from fb"
                      className="rounded-circle"
                      style= {{width: "38px", height: "38px", objectFit: "cover" , marginTop:"-70px" }}
                    />
                  </div>
                  
                  <div className="col-lg-10">
                  <textarea
                    cols="30"
                    rows="5"
                    className="form-control border-0 "
                    placeholder="What's new?"
                  ></textarea>
                  
                </div>
                </div>
                {/* <!-- text --> */}
                
                {/* <!-- emoji  --> */}
                <div
                  className="
                    d-flex
                    justify-content-between
                    align-items-center
                    p-5
                  "
                >
                  {/* <img
                    src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"
                    className="pointer"
                    alt="fb text"  style= {{width: "38px", height: "38px", objectFit: "cover"}}/>
                  <i
                    className="far fa-laugh-wink fs-5 text-muted pointer"
                  ></i> */}
                </div>
                {/* <!-- options --> */}
                <div
                  className="
                    d-flex
                    justify-content-between
                    border border-1 border-light
                    rounded
                    p-3
                    mt-3
                  "
                >
                  {/* <p className="m-0">Add Photo</p> */}
                  <div>
                    <i
                      className="
                        fas
                        fa-images
                        fs-1
                        text-success
                        pointer
                        mx-2
                      "
                    ></i> 
                    
                   <i
                      className="
                        fas
                        fa-map-marker-alt
                        fs-1
                        text-info
                        mx-2
                      "
                    ></i> 
                    <i
                      className="
                        fas
                        fa-ellipsis-h
                        fs-1
                        text-muted
                        pointer
                        mx-2
                      "
                    ></i>
                  </div>
                </div> 
              </div>
            </form>
          </div>

            

            {/* <!-- end --> */}
 
        </div>
        {/* <!-- footer --> */}
        <div className="modal-footer">
        <div className="bg-light rounded border border-primary">
                    <select
                      className="form-select border-0 bg-gray w-100 fs-4 bg-light"
                      aria-label="Default select example"
                    > 
                      <option selected value="1">Public</option> 
                      <option value="2">Profile</option>
                      <option value="3">Thread</option>
                   </select>
                  </div>
                

          <button type="button" className="custom-btn btn-6 w-25">
            Post
          </button>
        </div>
        <div className="subform">
        <form id="kt_forms_widget_1_form" className="ql-quil ql-quil-plain pb-3">
													{/* <!--begin::Editor--> */}
													<div id="kt_forms_widget_1_editor" className="py-6 ql-container ql-snow"><div className="ql-editor ql-blank" data-gramm="false" contenteditable="true" data-placeholder="What is on your mind ?"><p></p></div><div className="ql-clipboard" contenteditable="true" tabindex="-1"></div><div className="ql-tooltip ql-hidden"><a className="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL" /><a className="ql-action"></a><a className="ql-remove"></a></div></div>
													{/* <!--end::Editor--> */}
													<div className="separator"></div>
													{/* <!--begin::Toolbar--> */}
													<div id="kt_forms_widget_1_editor_toolbar" className="ql-toolbar d-flex flex-stack py-2 ql-snow">
														<div className="me-2">
														
															<span className="ql-formats">
																<button className="ql-bold" type="button"><svg viewBox="0 0 18 18"> <path className="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"></path> <path className="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"></path> </svg></button>
																<button className="ql-italic" type="button"><svg viewBox="0 0 18 18"> <line className="ql-stroke" x1="7" x2="13" y1="4" y2="4"></line> <line className="ql-stroke" x1="5" x2="11" y1="14" y2="14"></line> <line className="ql-stroke" x1="8" x2="10" y1="14" y2="4"></line> </svg></button>
																<button className="ql-underline" type="button"><svg viewBox="0 0 18 18"> <path className="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"></path> <rect className="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"></rect> </svg></button>
																<button className="ql-strike" type="button"><svg viewBox="0 0 18 18"> <line className="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5"></line> <path className="ql-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"></path> <path className="ql-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"></path> </svg></button>
																<button className="ql-image" type="button"><svg viewBox="0 0 18 18"> <rect className="ql-stroke" height="10" width="12" x="3" y="4"></rect> <circle className="ql-fill" cx="6" cy="7" r="1"></circle> <polyline className="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg></button>
																<button className="ql-link" type="button"><svg viewBox="0 0 18 18"> <line className="ql-stroke" x1="7" x2="11" y1="7" y2="11"></line> <path className="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"></path> <path className="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"></path> </svg></button>
																<button className="ql-clean" type="button"><svg className="" viewBox="0 0 18 18"> <line className="ql-stroke" x1="5" x2="13" y1="3" y2="3"></line> <line className="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"></line> <line className="ql-stroke" x1="11" x2="15" y1="11" y2="15"></line> <line className="ql-stroke" x1="15" x2="11" y1="11" y2="15"></line> <rect className="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"></rect> </svg></button>
															</span>
														</div>
														<div className="me-n3">
															<span className="btn btn-icon btn-sm btn-active-color-primary">
																<i className="flaticon2-clip-symbol icon-ms"></i>
															</span>
															<span className="btn btn-icon btn-sm btn-active-color-primary">
																<i className="flaticon2-pin icon-ms"></i>
															</span>
														</div>
													</div>
													{/* <!--end::Toolbar--> */}
												</form>
        </div>
      </div>
    </div>
  </div>
  <hr />
  {/* <!-- actions --> */}
  <div className="d-flex flex-column flex-lg-row mt-3">
    {/* <!-- a 1 --> */}
    {/* <div
      className="
        dropdown-item
        rounded
        d-flex
        align-items-center
        justify-content-center
      "
      role="button"
    >
      <i className="fas fa-video me-2 text-danger"></i>
      <p className="m-0 text-muted">Live Video</p>
    </div> */}
    {/* <!-- a 2 --> */}
    <div
      className="
        dropdown-item
        rounded
        d-flex
        align-items-center
        justify-content-center
      "
      role="button"
       onClick={() => setModalShow(true)}
      
    >
      
      <i className="fas fa-photo-video me-2 text-success"></i>
      <p className="m-0 text-muted">Photo/Video</p>
      
      {/* <Button  id="kt_sign_in_submit" className="btn btn-lg btn-success w-100 mb-5" onClick={() => setModalShow(true)} style={{backgroundColor:"#180A0A", color:"white"}}>
                <span className="indicator-label">Continue</span>         
                <span className="indicator-progress">Please wait...
                <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>  
              </Button>
              <VerifyPhone
          show={modalShow}
          onHide={() => setModalShow(false)}
        /> */}
        
    </div>
    <PreviewImage
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

    {/* <!-- a 3 --> */}
    <div
      className="
        dropdown-item
        rounded
        d-flex
        align-items-center
        justify-content-center
      "  role="button"
    >
      <i className="fas fa-photo-video me-2 text-warning"></i>
      <p className="m-0 text-muted">New Thread</p>
    </div>
  </div>
</div>

         
								{/* <!--end::Details--> */}					
            {/* <!--begin::Body--> */}
            
        </div>

   
  )
}

export default Post_box