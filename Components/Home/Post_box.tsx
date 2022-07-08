import React , { useState } from "react";
import PreviewImage from "../../pages/PreviewImage";

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