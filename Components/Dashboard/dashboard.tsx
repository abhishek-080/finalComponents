import styles from '../styles/Home.module.css'
import Head from 'next/head'
// import 'dashboard.css'

const Dashboard = () => {
  return (
    <div>
        <Head>
            <title>Home</title>
        </Head>

	
        <div className="card mb-5 mb-lg-8">
		<div className="card-body pt-9 mt-n3">
			{/* <!--begin::Details--> */}
			<div className="d-flex flex-wrap flex-sm-nowrap">
				{/* <!--begin: Pic--> */}
				<div className="me-7 mb-4">
					<div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
						<img src="/assets/media/avatars/300-1.jpg" alt="image" />
					</div>
				</div>
				{/* <!--end::Pic-->
				<!--begin::Info--> */}
				<div className="flex-grow-1">
					{/* <!--begin::Title--> */}
					<div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
						{/* <!--begin::User--> */}
						<div className="d-flex flex-column">
							{/* <!--begin::Name--> */}
							<div className="d-flex align-items-center mb-2">
								<a href="#" className="text-gray-900 text-hover-primary fs-2 fw-bolder me-1">Nikhil Upreti</a>
								<a href="#">
									{/* <!--begin::Svg Icon | path: icons/duotune/general/gen026.svg--> */}
									<span className="svg-icon svg-icon-1 svg-icon-primary">
									</span>
									{/* <!--end::Svg Icon--> */}
								</a>
							</div>
							{/* <!--end::Name-->
							<!--begin::Info--> */}
							<div className="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
								<a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
								<span className="svg-icon svg-icon-4 me-1">
									 Normal User
								</span>
          						 </a>
							</div>
								{/* <!--end::Info--> */}
							</div>
							{/* <!--end::User */}
							</div>
							{/* <!--end::Title-->
							<!--begin::Stats--> */}
							<div className="d-flex flex-wrap flex-stack">
								{/* <!--begin::Wrapper--> */}
								<div className="d-flex pe-8">
									{/* <!--begin::Stats--> */}
									<div className="d-flex flex-nowrap">
										{/* <!--begin::Stat--> */}
										<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
											{/* <!--begin::Number--> */}
											<div className="d-flex align-items-center">
												{/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg--> */}
												
												{/* <!--end::Svg Icon--> */}
												<div className="fs-2 fw-bolder counted" data-kt-countup="true" data-kt-countup-value="4500" data-kt-countup-prefix="$">100</div>
											</div>
											{/* <!--end::Number-->
											<!--begin::Label--> */}
											<div className="fw-bold fs-6 text-gray-400">Total followers</div>
											{/* <!--end::Label--> */}
										</div>
										{/* <!--end::Stat-->
										<!--begin::Stat--> */}
										<div className=" border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3 ">
											{/* <!--begin::Number--> */}
											<div className="d-flex align-items-center">
													<div className="fs-2 fw-bolder counted" data-kt-countup="true" data-kt-countup-value="80">80</div>
												</div>
												{/* <!--end::Number-->
												<!--begin::Label--> */}
												<div className="fw-bold fs-6 text-gray-400">Following</div>
												{/* <!--end::Label--> */}
											</div>											
										</div>
									</div>
							</div>
							
							{/* <!--end::Stats--> */}
									</div>
									{/* <!--end::Info--> */}
								</div>
								
								{/* <!--end::Details--> */}
							</div>
							<div className="d-flex align-items-center w-100%  flex-column  mt-n6 p-5" style={{backgroundColor:"#FFF8E1"}}>
								<div className="d-flex justify-content-between w-100 mt-auto mb-2">
									<span className="fw-bold fs-6 text-400">Profile Completion status</span>
									<span className="fw-bolder fs-6">60%</span>
								</div>
								<div className="h-10px mx-3 w-100 mb-n3 rounded" style={{backgroundColor: "#DCDCDC"}}>
									<div className="bg-success rounded h-10px" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
			</div>
    </div>
 
    
  )
}

export default Dashboard