import React from 'react'

const Trendingtags = () => {
    return (
        <div className='mt-3 trendings rounded border bg-white p-2' >


            <div className="card-header border-0 p-7">
                <h3 className="card-title fw-bolder text-dark">Trending Threads</h3>

            </div>
            <div className="card card-xl-stretch mt-2">
                <hr className='mt-n4 ' />
                {/* 
        <!--begin::Body--> */}
                <div className=" card-body p-0 mt-2">
                    {/* <!--begin::Item--> */}
                    <div className="d-flex align-items-center mb-7 trends  ps-5 pe-5 p1-2 pb-2" >
                        {/* <!--begin::Text--> */}
                        <div className="flex-grow-1 hover-primary">

                            <a href="#" className="text-dark fw-bolder">
                                <p className=' fs-3 fst-bold'># Going Genius</p>
                                {/* <span className="text-muted d-block fw-bold mt-n2">Sports</span> */}
                                <figcaption className="blockquote-footer">
                                    <cite title="Source Title">National</cite>
                                </figcaption>
                            </a>
                        </div>
                        {/* <!--end::Text--> */}
                        <div className="follow-btn">
                            <button className='btn btn-sm'>
                                <i className='bi bi-three-dots fs-3'></i>
                            </button>
                        </div>
                    </div>
                    {/* <!--end::Item-->
            <!--begin::Item--> */}
                    <div className="d-flex align-items-center mb-7 trends  ps-5 pe-5 p1-2 pb-2">
                        {/* <!--begin::Avatar--> */}
                        {/* <!--end::Avatar-->
                <!--begin::Text--> */}
                        <div className="flex-grow-1">

                            <a href="#" className="text-dark fw-bolder">
                                <p className=' fs-3 fw-bold '># Going Genius</p>
                                {/* <span className="text-muted d-block fw-bold mt-n2">Sports</span> */}
                                <figcaption className="blockquote-footer">
                                    <cite title="Source Title">National</cite>
                                </figcaption>
                            </a>
                        </div>
                        {/* <!--end::Text--> */}
                        <div className="follow-btn">
                            <button className='btn btn-sm'>
                                <i className='bi bi-three-dots fs-3'></i>
                            </button>
                        </div>
                    </div>
                    {/* <!--end::Item-->
            <!--begin::Item--> */}
                    <div className="d-flex align-items-center mb-7 trends  ps-5 pe-5 p1-2 pb-2">
                        {/* <!--begin::Avatar--> */}
                        {/* <!--end::Avatar-->
                <!--begin::Text--> */}
                        <div className="flex-grow-1">

                            <a href="#" className="text-dark fw-bolder">
                                <p className=' fs-3'># Going Genius</p>
                                {/* <span className="text-muted d-block fw-bold mt-n2">Sports</span> */}
                                <figcaption className="blockquote-footer">
                                    <cite title="Source Title">National</cite>
                                </figcaption>
                            </a>
                        </div>
                        {/* <!--end::Text--> */}
                        <div className="follow-btn">
                            <button className='btn btn-sm'>
                                <i className='bi bi-three-dots fs-3'></i>
                            </button>
                        </div>
                    </div>
                    {/* <!--end::Item-->
            <!--begin::Item--> */}
                    <div className="d-flex align-items-center mb-7 trends  ps-5 pe-5 p1-2 pb-2">
                        {/* <!--begin::Avatar--> */}
                        {/* <!--end::Avatar-->
                <!--begin::Text--> */}
                        <div className="flex-grow-1">

                            <a href="#" className="text-dark fw-bolder">
                                <p className=' fs-3 '># Going Genius</p>
                                {/* <span className="text-muted d-block fw-bold mt-n2">Sports</span> */}
                                <figcaption className="blockquote-footer">
                                    <cite title="Source Title">National</cite>
                                </figcaption>
                            </a>
                        </div>
                        {/* <!--end::Text--> */}
                        <div className="follow-btn">
                            <button className='btn btn-sm'>
                                <i className='bi bi-three-dots fs-3'></i>
                            </button>
                        </div>
                    </div>
                    <div className=" trends p-2 d-flex justify-content-center">
                        <button className="btn btn-sm t text-hover-default fw-ligh fs-5">Show More</button>
                    </div>
                    {/* <!--end::Item--> */}
                </div>

                {/* <!--end::Body--> */}
            </div>

            {/* <!--end::List Widget 2--> */}
        </div>
    )
}

export default Trendingtags