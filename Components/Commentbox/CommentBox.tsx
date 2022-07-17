import React from 'react'

const CommentBox = () => {
  return (
    <div>
        <form className="position-relative mb-6 pb-4   p-3 rounded">
            <div className="d-flex flex-nowrap">

            <div className="symbol symbol-40px me-2 ">
				<img src="/assets/media/avatars/300-1.jpg" alt="" style={{borderRadius:"100px"}}  />
                
			</div>

            <div className="">

                <textarea className="form-control bg-light border-0 p-1 resize-none min-h-25px p-3" data-kt-autosize="true" rows="1" placeholder="Comment.." style={{overflow: "hidden", overflowWrap: "break-word", height:"44px", width:"480px", borderRadius:"30px"}}></textarea>
            </div>

            <div className="position-absolute top-1 end-0 me-n2">
                <span className="btn btn-icon mt-1 btn-sm btn-active-color-primary">
                    {/* <!--begin::Svg Icon | path: icons/duotune/general/gen018.svg--> */}
                    <img src="../emoji.png" width="20" height="20" alt="" />
                </span>
                <span className="btn btn-icon ms-2 mt-1 btn-sm btn-active-color-primary">
                    {/* <!--begin::Svg Icon | path: icons/duotune/general/gen018.svg--> */}
                    <img src="../send2.png" alt=""  width="25" height="25"/>
                </span>
                <span className="btn btn-icon btn-sm btn-active-color-primary">
                    {/* <!--begin::Svg Icon | path: icons/duotune/general/gen018.svg--> */}
                    {/* <span className="svg-icon svg-icon-1  me-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="currentColor"></path>
                            <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="currentColor"></path>
                        </svg>
                    </span> */}
                    {/* <!--end::Svg Icon--> */}
                </span>
            </div>
            
    
            </div>
        </form>
    </div>
  )
}

export default CommentBox