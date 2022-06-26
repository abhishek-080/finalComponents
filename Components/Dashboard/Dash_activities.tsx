import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai';
import {BiMessageRounded } from 'react-icons/bi';
import {FaRegUserCircle, FaGraduationCap} from 'react-icons/fa'
import {TiShoppingBag} from 'react-icons/ti'




const Dash_activities = () => {
  return (
<div >

    <div className="card mb-5 mb-lg-6 ">
	    {/* <!--begin::Header--> */}
	    <div className="card-header align-items-center border-0 mt-1 mb-n4">
	    	<h3 className="card-title align-items-start flex-column">
	    		<span className="fw-bolder text-dark">Profile Status</span>
	    	</h3>
	    </div>

		<div className="separator my-5"></div>

	    <div className="card-body pt-5">
			{/* <!--begin::Item--> */}
			
			<div className="d-flex flex-stack">
				{/* <!--begin::Wrapper--> */}
				<div className="d-flex align-items-center me-3">
					{/* <!--begin::Icon--> */}
					<i className="me-4 fa-2x text-dark" ><AiOutlineHome /></i>
					{/* <!--end::Icon--> */}
					{/* <!--begin::Section--> */}
					<div className="flex-grow-1">
						<a href="#" className="text-gray-800 text-hover-primary fs-5 fw-bolder lh-0">Home</a>
					</div>
					{/* <!--end::Section--> */}
				</div>
				{/* <!--end::Wrapper--> */}
				{/* <!--begin::Statistics--> */}
				<div className="d-flex align-items-center">
					{/* <!--begin::Value--> */}
					<span className="fs-5 fw-bold">5%</span>
					{/* <!--end::Value--> */}
				</div>
				{/* <!--end::Statistics--> */}
			</div>
			{/* <!--end::Item--> */}
			{/* <!--begin::Separator--> */}
			<div className="separator my-5"></div>
			{/* <!--end::Separator-->
			<!--begin::Item--> */}
			<div className="d-flex flex-stack">
				{/* <!--begin::Wrapper--> */}
				<div className="d-flex align-items-center me-3">
					{/* <!--begin::Icon--> */}
					<i className="me-4 fa-2x text-dark"><FaRegUserCircle /></i>
					{/* <!--end::Icon-->
					<!--begin::Section--> */}
					<div className="flex-grow-1">
						<a href="#" className="text-gray-800 text-hover-primary fs-5 fw-bolder lh-0">About</a>
					</div>
					{/* <!--end::Section--> */}
				</div>
				{/* <!--end::Wrapper-->
				<!--begin::Statistics--> */}
				<div className="d-flex align-items-center">
					{/* <!--begin::Progress--> */}
					<div className="progress h-6px w-100">
						{/* <div className="progress-bar bg-warning" role="progressbar" style="width: 87%" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100"></div> */}
					</div>
					{/* <!--end::Progress-->
					<!--begin::Value--> */}
					<span className="fs-5 fw-bold">7%</span>
					{/* <!--end::Value--> */}
				</div>
				{/* <!--end::Statistics--> */}
			</div>
			{/* <!--end::Item-->
			<!--begin::Separator--> */}
			<div className="separator my-5"></div>
			{/* <!--end::Separator-->
			<!--begin::Item--> */}
			<div className="d-flex flex-stack">
				{/* <!--begin::Wrapper--> */}
				<div className="d-flex align-items-center me-3">
					{/* <!--begin::Icon--> */}
					<i className="me-4 fa-2x text-dark"><FaGraduationCap /></i>
					{/* <!--end::Icon-->
					<!--begin::Section--> */}
					<div className="flex-grow-1">
						<a href="#" className="text-gray-800 text-hover-primary fs-5 fw-bolder lh-0">Education</a>
					</div>
					{/* <!--end::Section--> */}
				</div>
				{/* <!--end::Wrapper-->
				<!--begin::Statistics--> */}
				<div className="d-flex align-items-center">
					{/* <!--begin::Progress--> */}
					<div className="progress h-6px w-100 me-2 bg-light-primary">
						{/* <div className="progress-bar bg-primary" role="progressbar" style="width: 44%" aria-valuenow="44" aria-valuemin="0" aria-valuemax="100"></div> */}
					</div>
					{/* <!--end::Progress-->
					<!--begin::Value--> */}
					<span className="fs-5 fw-bold">4%</span>
					{/* <!--end::Value--> */}
					
				</div>
				{/* <!--end::Statistics--> */}
			</div>
			{/* <!--end::Item-->
			<!--begin::Separator--> */}
			<div className="separator my-5"></div>
			{/* <!--end::Separator-->
			<!--begin::Item--> */}
			<div className="d-flex flex-stack">
				{/* <!--begin::Wrapper--> */}
				<div className="d-flex align-items-center me-3">
					{/* <!--begin::Icon--> */}
					<i className="me-4 fa-2x text-dark"><AiOutlineSetting /></i>
					{/* <!--end::Icon-->
					<!--begin::Section--> */}
					<div className="flex-grow-1">
						<a href="#" className="text-gray-800 text-hover-primary fs-5 fw-bolder lh-0">Services</a>
					</div>
					{/* <!--end::Section--> */}
				</div>
				{/* <!--end::Wrapper-->
				<!--begin::Statistics--> */}
				<div className="d-flex align-items-center">
					{/* <!--begin::Progress--> */}
					<div className="progress h-6px w-100 me-2 bg-light-info">
						{/* <div className="progress-bar bg-info" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div> */}
					</div>
					{/* <!--end::Progress-->
					<!--begin::Value--> */}
					<span className="fs-5 fw-bold">0%</span>
					{/* <!--end::Value--> */}
				</div>
				{/* <!--end::Statistics--> */}
			</div>
		{/* <!--begin::Separator--> */}
			<div className="separator my-5"></div>
			{/* <!--end::Separator--> */}

			<div className="d-flex flex-stack">
				{/* <!--begin::Wrapper--> */}
				<div className="d-flex align-items-center me-3">
					{/* <!--begin::Icon--> */}
					<i className="me-4 fa-2x text-dark"><TiShoppingBag /></i>
			 
					{/* <!--end::Icon-->
					<!--begin::Section--> */}
					<div className="flex-grow-1">
						<a href="#" className="text-gray-800 text-hover-primary fs-5 fw-bolder lh-0">Portfolio</a>
					</div>
					{/* <!--end::Section--> */}
				</div>
				{/* <!--end::Wrapper-->
				<!--begin::Statistics--> */}
				<div className="d-flex align-items-center">
					{/* <!--begin::Progress--> */}
					<div className="progress h-6px w-100 me-2 bg-light-info">
						{/* <div className="progress-bar bg-info" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div> */}
					</div>
					{/* <!--end::Progress-->
					<!--begin::Value--> */}
					<span className="fs-5 fw-bold">0%</span>
					{/* <!--end::Value--> */}
				</div>
				{/* <!--end::Statistics--> */}
			</div>
			{/* <!--begin::Separator--> */}
			<div className="separator my-5"></div>
			{/* <!--end::Separator--> */}
			<div className="d-flex flex-stack">
				{/* <!--begin::Wrapper--> */}
				<div className="d-flex align-items-center me-3">
					{/* <!--begin::Icon--> */}
					<i className="me-4 fa-2x text-dark" ><BiMessageRounded /></i>
					{/* <!--end::Icon-->
					<!--begin::Section--> */}
					<div className="flex-grow-1">
						<a href="#" className="text-gray-800 text-hover-primary fs-5 fw-bolder lh-0">Contacts</a>
					</div>
					{/* <!--end::Section--> */}
				</div>
				{/* <!--end::Wrapper-->
				<!--begin::Statistics--> */}
				<div className="d-flex align-items-center">
					{/* <!--begin::Progress--> */}
					<div className="progress h-6px w-100 me-2 bg-light-info">
						{/* <div className="progress-bar bg-info" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div> */}
					</div>
					{/* <!--end::Progress-->
					<!--begin::Value--> */}
					<span className="fs-5 fw-bold">0%</span>
					{/* <!--end::Value--> */}
				</div>
				{/* <!--end::Statistics--> */}
			</div>
			</div>
			
	    </div>
		
	    {/* <!--end: Card Body--> */}
		</div>
  )
}

export default Dash_activities