import React from 'react'
import { Accordion } from 'react-bootstrap'

const FollowSuggest = () => {
  return (
    <div>
		<div className="card card-xl-stretch mt-4">
			{/* <!--begin::Header--> */}
			<div className="card-header border-0">
				<h3 className="card-title fw-bolder text-dark">Follow Suggestions</h3>
				
			</div>
			{/* <!--end::Header-->
			<!--begin::Body--> */}
			<div className="card-body pt-2">
				{/* <!--begin::Item--> */}
				<div className="d-flex align-items-center mb-7">
					{/* <!--begin::Avatar--> */}
					<div className="symbol symbol-50px me-5">
						<img src="/assets/media/avatars/300-6.jpg" className="" alt="" />
					</div>
                    
					{/* <!--end::Avatar-->
					<!--begin::Text--> */}
					<div className="flex-grow-1">
						<a href="#" className="text-dark fw-bolder text-hover-primary fs-6">Emma Smith</a>
						<span className="text-muted d-block fw-bold">3K Followers</span>
					</div>
					{/* <!--end::Text--> */}
                    <div className="follow-btn">
                        <button className='btn btn-primary btn-sm'>Follow</button>
                    </div>
				</div>
				{/* <!--end::Item-->
				<!--begin::Item--> */}
				<div className="d-flex align-items-center mb-7">
					{/* <!--begin::Avatar--> */}
					<div className="symbol symbol-50px me-5">
						<img src="/assets/media/avatars/300-5.jpg" className="" alt="" />
					</div>
					{/* <!--end::Avatar-->
					<!--begin::Text--> */}
					<div className="flex-grow-1">
						<a href="#" className="text-dark fw-bolder text-hover-primary fs-6">Sean Bean</a>
						<span className="text-muted d-block fw-bold">Web Developer</span>
					</div>
					{/* <!--end::Text--> */}
                    <div className="follow-btn">
                        <button className='btn btn-primary btn-sm'>Follow</button>
                    </div>
				</div>
				{/* <!--end::Item-->
				<!--begin::Item--> */}
				<div className="d-flex align-items-center mb-7">
					{/* <!--begin::Avatar--> */}
					<div className="symbol symbol-50px me-5">
						<img src="/assets/media/avatars/300-11.jpg" className="" alt="" />
					</div>
					{/* <!--end::Avatar-->
					<!--begin::Text--> */}
					<div className="flex-grow-1">
						<a href="#" className="text-dark fw-bolder text-hover-primary fs-6">Brian Cox</a>
						<span className="text-muted d-block fw-bold">2K Followers</span>
					</div>
					{/* <!--end::Text--> */}
                    <div className="follow-btn">
                        <button className='btn btn-primary btn-sm'>Follow</button>
                    </div>  
				</div>
				{/* <!--end::Item-->
				<!--begin::Item--> */}
				<div className="d-flex align-items-center mb-7">
					{/* <!--begin::Avatar--> */}
					<div className="symbol symbol-50px me-5">
						<img src="/assets/media/avatars/300-9.jpg" className="" alt="" />
					</div>
					{/* <!--end::Avatar-->
					<!--begin::Text--> */}
					<div className="flex-grow-1">
						<a href="#" className="text-dark fw-bolder text-hover-primary fs-6">Francis Mitcham</a>
						<span className="text-muted d-block fw-bold">1K Followers</span>
					</div>
					{/* <!--end::Text--> */}
                    <div className="follow-btn">
                        <button className='btn btn-primary btn-sm'>Follow</button>
                    </div>
				</div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-md btn-primary">View More</button>
                </div>
				{/* <!--end::Item--> */}
				
			</div>
			{/* <!--end::Body--> */}
		</div>
		<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
		{/* <!--end::List Widget 2--> */}
	</div>
  )
}

export default FollowSuggest