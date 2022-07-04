import { NextPage } from 'next'
import Link from 'next/link'
import React, { useState } from 'react'
import axios from 'axios'
// import Icon from '../app/utils/Icons'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux'
// import userSlice from '../states/slices/userSlice';



const SideLogin = () => {

  return (
    <div>
      <div className="d-flex flex-column flex-root p-0  ">
			{/* <!--begin::Authentication - Sign-in --> */}
			<div className=" d-flex flex-column flex-lg-row flex-column-fluid">
				{/* <!--begin::Aside--> */}
				<div className=" d-flex flex-column flex-lg-row-auto " style={{backgroundColor:" #1B1212"}}>
					{/* <!--begin::Wrapper--> */}
					<div className="d-flex flex-column top-0 bottom-0 w-xl-400px">
						{/* <!--begin::Content--> */}
						<div className="d-flex flex-row-fluid flex-column text-center p-5">
							{/* <!--begin::Logo--> */}
              
							<a href="../../demo1/dist/index.html" className=" mb-5">
								<img alt="Logo" src="../gg_logo.png" className="h-150px w-130px" />
							</a>
							{/* <!--end::Logo-->
							<!--begin::Title--> */}
							{/* <h1 className="fw-bolder fs-2qx pb-5 pb-md-10" style={{color:" #986923"}}>Going Genius</h1> */}
							{/* <!--end::Title-->
							<!--begin::Description--> */}
							<br />
							{/* <!--end::Description--> */}
              <div className="d-flex flex-column flex-lg-row-auto w-xl-100 bg-lighten ms-n5 m-5" >
                {/* <img src="../login.gif" alt="" className="rounded w-75"/> */}
              </div>

						</div>
						{/* <!--end::Content-->
						<!--begin::Illustration--> */}
						{/* <!--end::Illustration--> */}
					</div>
					{/* <!--end::Wrapper--> */}
				</div>
				{/* <!--end::Aside-->
				<!--begin::Body--> */}
				<div className=" d-flex flex-column flex-lg-row-fluid">
					{/* <!--begin::Content--> */}
					<div className="d-flex flex-center flex-column flex-column-fluid">
						{/* <!--begin::Wrapper--> */}
						<div className="w-lg-500px p-lg-20 mx-auto">
						<form className="form w-100"id="kt_sign_in_form"  onSubmit={(e) =>handleSubmit(e)}>
            { /*begin::Heading */ }
            <div className="text-center mb-10">
              { /*begin::Title */ }
              
              <h1 className="text-dark mb-3">Sign In to GG</h1>
              { /*end::Title */ }
              { /*begin::Link */ }
              <div className="text-gray-400 fw-bold fs-4">Dont have an account?
              <Link href="./Components/Registermodules/register">
                <a className="link-primary fw-bolder">Register</a>
              </Link>
              </div>
              { /*end::Link */ }
            </div>
            { /*begin::Heading */ }
            { /*begin::Input group */ }
            <div className="fv-row mb-10">
              { /*begin::Label */ }
              <label className="form-label fs-6 fw-bolder text-dark">Email</label>
              { /*end::Label */ }
              { /*begin::Input */ }
              <input className="form-control form-control-lg form-control-solid" 
                  type="text" 
                  name="email" 
                  autoComplete="off" 
                //   value={email} 
                //   onChange={(e) => setEmail(e.target.value)}
              />
              { /*end::Input */ }
            </div>
            { /*end::Input group */ }
            { /*begin::Input group */ }
            <div className="fv-row mb-10">
              { /*begin::Wrapper */ }
              <div className="d-flex flex-stack mb-2">
                { /*begin::Label */ }
                <label className="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
                { /*end::Label */ }
                { /*begin::Link */ }
                <Link href="/forget-password">
                    <a className="link-primary fs-6 fw-bolder">Forgot Password ?</a>
                </Link>
                { /*end::Link */ }
              </div>
              { /*end::Wrapper */ }
              { /*begin::Input */ }
              <input className="form-control form-control-lg form-control-solid" 
                type="password" 
                name="password" 
                autoComplete="off" 
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
              { /*end::Input */ }
            </div>
            { /*end::Input group */ }
            { /*begin::Actions */ }
            <div className="text-center">
              { /*begin::Submit button */ }
              <button type="submit" id="kt_sign_in_submit" className="btn btn-lg btn-success w-100 mb-5" style={{backgroundColor:"#180A0A", color:"white"}}>
                <span className="indicator-label">Continue</span>
                <span className="indicator-progress">Please wait...
                <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
              </button>
              { /*end::Submit button */ }
              { /*begin::Separator */ }
              <div className="d-flex flex-nowrap justify-content-center m-5">  
                <hr className='w-50'/>
                <div className="text-center fs-5  text-uppercase fw-bolder me-5 ms-5">
                  or 
                  </div>
                <hr className='w-50'/>
              </div>
              { /*end::Separator */ }
              { /*begin::Google link */ }
              <div className="d-flex flex-nowrap">
                  <button className="btn p-3 btn-dark  btn-lg w-75 mb-5 me-1" style={{backgroundColor:"#180A0A",color:"white"}}>
                    <img
                      alt="Logo"
                      src="/logoGG.svg"
                      className="h-20px me-3" 
                    />
                    Continue as GG user
                  </button>
                  <button className="btn btn-dark mb-5 me-1" style={{backgroundColor:"#180A0A",color:"white"}}>
                    <img
                      alt="Logo"
                      src="assets/media/svg/brand-logos/google-icon.svg"
                      className="h-20px "
                    />
                  </button>
                  {/* <!--end::Google link-->
								    <!--begin::Google link--> */}
                  <button className="btn btn-dark mb-5" style={{backgroundColor:"#180A0A",color:"white"}}>
                    <img
                      alt="Logo"
                      src="assets/media/svg/brand-logos/facebook-4.svg"
                      className="h-20px"
                    />
                  </button>
                  {/* <!--end::Google link--*/}
                  
                </div>
              { /*end::Google link */ }
            </div>
            { /*end::Actions */ }
          </form>
          { /*end::Form */ }
						</div>
						{/* <!--end::Wrapper--> */}
					</div>
					{/* <!--end::Content-->
					<!--begin::Footer--> */}
					
					{/* <!--end::Footer--> */}
				</div>
				{/* <!--end::Body--> */}
			</div>
			{/* <!--end::Authentication - Sign-in--> */}
	</div>
    </div>
  )
}

export default SideLogin

function setUser(user: any): any {
  throw new Error('Function not implemented.');
}
