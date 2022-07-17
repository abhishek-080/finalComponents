import React from 'react'

export const Replies = () => {
  return (
    <div>
         <div className="d-flex p-2 mt-n3 m-1 mb-5">
                    {/* <!--begin::Avatar--> */}
                    <div className="symbol symbol-40px me-5">
                        <img src="/assets/media/avatars/300-14.jpg" alt="" style={{ borderRadius: "100px" }} />
                    </div>
                    {/* <!--end::Avatar-->
															<!--begin::Info--> */}
                    <div className="d-flex flex-column flex-row-fluid bg-light p-3" style={{ borderRadius: "15px" }}>
                        {/* <!--begin::Info--> */}
                        <div className="d-flex align-items-center flex-wrap mb-1">
                            <a href="#" className="text-gray-800 text-hover-primary fw-bold me-2">Emma Watson</a>
                            <span className="text-gray-400 fw-semibold fs-7">1 hr</span>
                        </div>
                        {/* <!--end::Info-->
																<!--begin::Post--> */}
                        <span className="text-gray-800 fs-6 fw-normal pt-1">Long before you sit dow to put digital pen to paper you need to make sure you have to sit down and write.</span>
                        
                        <div className="p-2">
                        <a href="#" className="ms-auto me-3 rounded-circle    text-gray-400 text-hover-primary fw-semibold fs-6">Like</a>

                        <a href="#" className="ms-auto rounded-circle    text-gray-400 text-hover-primary fw-semibold fs-6">Reply</a>
                        
                        <a href="#" className="rounded-circle d-flex justify-content-end mt-n7  text-gray-400 text-hover-primary fw-semibold fs-5">5 Reply</a>


                        </div>
                        {/* <!--end::Post--> */}
                    </div>
                    {/* <!--end::Info--> */}
                </div>
    </div>
  )
}
