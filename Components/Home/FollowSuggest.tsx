import React from 'react'
// import { Accordion } from 'react-bootstrap'

const FollowSuggest = () => {
	return (
		<div className='mt-5 rounded border ' >

			{/* 		
		<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0"> */}
			<div className="card-header border-0 p-5">
				{/* <Accordion.Header className="bg-light"> */}
				<h3 className="card-title fw-bolder text-dark">Follow Suggestions</h3>

				{/* </Accordion.Header> */}
			</div>
			{/* <Accordion.Body> */}
			<div className="card card-xl-stretch mt-n1 ">
				{/* <!--begin::Header--> */}

				{/* <!--end::Header-->
			<!--begin::Body--> */}
				<div className="card-body p-4">
					{/* <!--begin::Item--> */}
					<div className="d-flex align-items-center mb-7 ">
						{/* <!--begin::Avatar--> */}
						<div className="symbol symbol-50px me-5 ">
							<img src="/assets/media/avatars/300-6.jpg" className="rounded-circle" alt="" />
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
							<img src="/assets/media/avatars/300-5.jpg" className="rounded-circle" alt="" />
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
							<img src="/assets/media/avatars/300-11.jpg" className="rounded-circle" alt="" />
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
							<img src="/assets/media/avatars/300-9.jpg" className="rounded-circle" alt="" />
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
					<div className="d-flex trends justify-content-center">
						<button className="btn btn-md ">View More</button>
					</div>
					{/* <!--end::Item--> */}
				</div>
				{/* <!--end::Body--> */}
			</div>

			{/* </Accordion.Body>
  </Accordion.Item>
</Accordion> */}
			{/* <!--end::List Widget 2--> */}
		</div>
	)
}

export default FollowSuggest