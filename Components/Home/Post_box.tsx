
const Post_box = () => {
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
              <div className="d-flex flex-column">
                {/* <!-- name --> */}
                <div className="d-flex align-items-center">
                  <div className="p-2">
                    <img
                      src="https://source.unsplash.com/collection/happy-people"
                      alt="from fb"
                      className="rounded-circle"
                      style= {{width: "38px", height: "38px", objectFit: "cover"}}
                    />
                  </div>
                  <div>
                    <p className="m-0 fw-bold">John</p>
                    <select
                      className="form-select border-0 bg-gray w-75 fs-7"
                      aria-label="Default select example"
                    >
                      {/* <option selected value="1">Public</option> */}
                      {/* <option value="2">Pin To Top</option> */}
                      {/* <option value="3">Hide</option> */}
                    </select>
                  </div>
                </div>
                {/* <!-- text --> */}
                <div>
                  <textarea
                    cols="30"
                    rows="5"
                    className="form-control border-0 "
                  ></textarea>
                  
                </div>
                {/* <!-- emoji  --> */}
                {/* <div
                  className="
                    d-flex
                    justify-content-between
                    align-items-center
                  "
                > */}
                  {/* <img
                    src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"
                    className="pointer"
                    alt="fb text"  style= {{width: "38px", height: "38px", objectFit: "cover"}}/>
                  <i
                    className="far fa-laugh-wink fs-5 text-muted pointer"
                  ></i>
                </div> */}
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
                  <p className="m-0">Add Photo</p>
                  {/* <div>
                    <i
                      className="
                        fas
                        fa-images
                        fs-5
                        text-success
                        pointer
                        mx-1
                      "
                    ></i>
                    <i
                      className="
                        fas
                        fa-user-check
                        fs-5
                        text-primary
                        pointer
                        mx-1
                      "
                    ></i>
                    <i
                      className="
                        far
                        fa-smile
                        fs-5
                        text-warning
                        pointer
                        mx-1
                      "
                    ></i>
                    <i
                      className="
                        fas
                        fa-map-marker-alt
                        fs-5
                        text-info
                        pointer
                        mx-1
                      "
                    ></i>
                    <i className="
                    fas
                    fa-microphone
                    fs-5
                    text-danger
                    pointer
                    mx-1
                  "
                >
                      </i>
                    <i
                      className="
                        fas
                        fa-ellipsis-h
                        fs-5
                        text-muted
                        pointer
                        mx-1
                      "
                    ></i>
                  </div>*/}
                </div> 
              </div>
            </div>

            

            {/* <!-- end --> */}
 
        </div>
        {/* <!-- footer --> */}
        <div className="modal-footer">
          <button type="button" className="btn btn-primary w-100">
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
    >
      <i className="fas fa-photo-video me-2 text-success"></i>
      <p className="m-0 text-muted">Photo/Video</p>
    </div>
    {/* <!-- a 3 --> */}
    {/* <div
      className="
        dropdown-item
        rounded
        d-flex
        align-items-center
        justify-content-center
      "  role="button"
    >
      <i className="fas fa-smile me-2 text-warning"></i>
      <p className="m-0 text-muted">Feeling/Activity</p>
    </div> */}
  </div>
</div>

         
								{/* <!--end::Details--> */}					
            {/* <!--begin::Body--> */}
            
        </div>

   
  )
}

export default Post_box