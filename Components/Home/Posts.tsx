import Link from "next/link"

const Posts = () => {
  return (
    <div>
        
    <div className="card-body pb-0 bg-white mt-4 rounded border">
        {/* <!--begin::Header--> */}
        <div className="d-flex align-items-center mb-5">
            {/* <!--begin::User--> */}
            <div className="d-flex align-items-center flex-grow-1">
                {/* <!--begin::Avatar--> */}
                <div className="symbol symbol-45px me-5">
                    <img src="/assets/media/avatars/300-1.jpg" alt="" style={{borderRadius:"100px"}} />
                </div>
                {/* <!--end::Avatar-->
                <!--begin::Info--> */}
                
                <div className="d-flex flex-column">
                    <a href="#" className="text-gray-900 text-hover-primary fs-6 fw-bolder">shirish Dali</a>
                    
                    <div className="postTime"> 
                            <Link href={"/#"}>
                                <span className="text-gray-400 fw-bold">#genius</span>
                            
                            </Link>
                        {/* <span className="text-gray-400 fw-bold">#genius </span>     */}
                        <span className="text-gray-400 fw-bold">. 2h</span>
                    </div>
                </div>
                {/* <!--end::Info--> */}
            </div>
            {/* <!--end::User-->
            <!--begin::Menu--> */}
            <div className="my-0">
                <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
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
                        <a href="#" className="menu-link px-3">View Thread</a>
                    </div>
                    {/* <!--end::Menu item-->
                    <!--begin::Menu item--> */}
                    <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">Save</a>
                    </div>
                    {/* <!--end::Menu item--> */}
                </div>
                {/* <!--end::Menu 2--> */}
            </div>
            {/* <!--end::Menu--> */}
        </div>
        {/* <!--end::Header-->
        <!--begin::Post--> */}
        <div className="mb-5">
            {/* <!--begin::Text--> */}
            <div className="post-content">
                <p className="text-gray-800 fs-5 fw-normal mb-5">Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post</p>
                {/* <div className="posted-img ">
                    <img src="/assets/media/avatars/300-1.jpg" alt="" className="w-100 " style={{height:"450px"}}/>
                </div> */}
            </div>

            {/* {/* <!--end::Text--> 
            begin like counts*/}
            <div className="d-flex flex-row justify-content-between mb-n1 ms-2 me-2">
                <div className="likes p-1 fs-4">
                <a href="#" className="text-muted w-100 text-primary">
                    {/* <!--begin::Svg Icon | path: icons/duotune/communication/com012.svg--> */}
                    <span className="svg-icon svg-icon-1">
                    <img src="../lik2.png" alt="" width="auto" height="25" />

                    </span>
                    
                    {/* <!--end::Svg Icon--> */}
                    {/* comments and likes */}
                    120
                    </a>
                </div>
                <div className="comments p-1 fs-4 d-flex flex-row gap-2">
                    <div>

                <a href="#" className="text-muted w-100 text-active-primary">
                    {/* comments and likes */}
                    120 Comments
                    </a> 
                    </div>
                    <div>

                    <a href="#" className=" text-muted w-100">
                    {/* comments and likes */}
                     1 Share
                    </a>             
                    </div>
                </div>
            </div>
            {/* <!--begin::Toolbar--> */}
            
            
            <div className="d-flex align-items-center mb-5 mt-5 border-top border-bottom p-1">
                <div className="col-lg-3 ">
                    <a href="#" className="btn btn-color-muted btn-active-light-primary w-100">
                    {/* <!--begin::Svg Icon | path: icons/duotune/communication/com012.svg--> */}
                    <span className="svg-icon svg-icon-1">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z" fill="currentColor"></path>
                          </svg> */}
                          <img src="../like.png" alt="" width="auto" height="25" />
                    </span>
                    
                    {/* <!--end::Svg Icon--> */}
                    {/* comments and likes */}
                    Like
                    </a>
                </div>
                <div className="col-lg-3 ">
                    <a href="#" className="btn btn-color-muted btn-active-light-success w-100">
                    {/* <!--begin::Svg Icon | path: icons/duotune/communication/com012.svg--> */}
                    <span className="svg-icon svg-icon-1 ms-n1">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor"></path>
                            <rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor"></rect>
                            <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor"></rect>
                        </svg> */}
                        <img src="../comment.png" alt="" width="auto" height="25" />
                    </span>
                    {/* <!--end::Svg Icon--> */}
                    {/* comments and likes */}
                    Comment
                    </a>
                </div>
                <div className="col-lg-3">
                    <a href="#" className="btn btn-color-muted btn-active-light-success w-100">
                    {/* <!--begin::Svg Icon | path: icons/duotune/communication/com012.svg--> */}
                    <span className="svg-icon svg-icon-1">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor"></path>
                            <rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor"></rect>
                            <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor"></rect>
                        </svg> */}
                        <img src="../share.png" alt="" width="auto" height="25" />
                    </span>
                    {/* <!--end::Svg Icon--> */}
                    {/* comments and likes */}
                    Share
                    </a>
                </div>
                <div className="col-lg-3">
                    <a href="#" className="btn btn-color-muted btn-active-light-success w-100">
                    {/* <!--begin::Svg Icon | path: icons/duotune/communication/com012.svg--> */}
                    <span className="svg-icon svg-icon-1">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor"></path>
                            <rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor"></rect>
                            <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor"></rect>
                        </svg> */}
                        <img src="../send.png" alt="" width="auto" height="25" />
                    </span>
                    {/* <!--end::Svg Icon--> */}
                    {/* comments and likes */}

                    Send
                    </a>
                </div>
            </div>
            
            
            {/* <!--end::Toolbar--> */}
        </div>
        {/* <!--end::Post-->
        <!--begin::Separator--> */}
        {/* <div className="separator mb-4"></div> */}
        {/* <!--end::Separator-->
        <!--begin::Reply input--> */}
        <form className="position-relative mb-6 pb-4">
            <textarea className="form-control border-0 p-1 resize-none min-h-25px" data-kt-autosize="true" rows="1" placeholder="Comment.." style={{overflow: "hidden", overflowWrap: "break-word", height:"25px"}}></textarea>
            <div className="position-absolute top-0 end-0 me-n5">
                <span className="btn btn-icon btn-sm btn-active-color-primary">
                    {/* <!--begin::Svg Icon | path: icons/duotune/general/gen018.svg--> */}
                    <img src="../emoji.png" alt="" />
                </span>
                <span className="btn btn-icon btn-sm btn-active-color-primary">
                    {/* <!--begin::Svg Icon | path: icons/duotune/general/gen018.svg--> */}
                    <span className="svg-icon svg-icon-1  me-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="currentColor"></path>
                            <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="currentColor"></path>
                        </svg>
                    </span>
                    {/* <!--end::Svg Icon--> */}
                </span>
            </div>
        </form>
        {/* <!--edit::Reply input--> */}
    </div>
</div>
  )
}

export default Posts