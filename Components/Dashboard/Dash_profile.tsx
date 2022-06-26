import Image from "next/image";
import styles from "/styles/Nav.module.css";
import porfileImage from "/styles/assets/profileImage.png";
import { Button } from "react-bootstrap";

import {FaShare,FaFacebookF,FaInstagram,FaLinkedin} from 'react-icons/fa'


const Dash_profile = () => {
  return (
    <div>
				{/* <!--begin::Col--> */}
				<div className="card mb-5 mb-xxl-8">
					{/* <!--begin::Feeds Widget 1--> */}
					<div className="card mb-5 ">
						{/* <!--begin::Body--> */}
						<div className="card-body pb-0">
							{/* <!--begin::Header--> */}
							
								<div className="row ">
                                    
									<div className=" d-flex justify-content-center">
           
									<Image
            src={porfileImage}
            alt="profile"
            className={styles.profileImages} 
            width="50px"
            height="50px"
          />

          </div>
									
          <div className=" d-flex justify-content-center">
           <h6 className="fw-bold"> Rekha Thapa</h6>
           </div>


       			<div className=" d-flex justify-content-center">
            <p className="text-muted"> UI/UX Designer</p>
            </div>


            <div className=" d-flex justify-content-center">
            <img src="https://static1.anpoimages.com/wordpress/wp-content/uploads/2020/07/27/chrome-qr-code-ap.png?q=80&fit=crop&w=370&dpr=1.5" alt="qr" 
            width="175px" className="rounded" style={ { boxShadow: "2px 2px 2px rgba(0,0,0,0.5) " }}/> 
            </div>
      

            <div className=" d-flex justify-content-center mt-4">
            <Button className="me-2 btn btn-dark text-white ">  View Profile </Button>
            <Button className="btn btn-dark text-white">  <FaShare/></Button>
            </div>

            <div className=" d-flex justify-content-center mt-4">
            <a className="btn btn-white text-dark btn btn-sm border border-1 border border-dark rounded  me-3" style={{width:"5px"}}>
            <i className="fa-2x text-dark "><FaFacebookF/></i>
            </a>
            <a className="btn btn-white text-dark btn btn-sm border border-1 border border-dark  me-3" style={{width:"5px"}}>
            <i className="fa-2x text-dark "><FaInstagram/></i>
            </a>
            <a className="btn btn-white text-dark btn btn-sm border border-1 border border-dark " style={{width:"5px"}}>
            <i className="fa-2x text-dark "><FaLinkedin/></i>
            </a>
           
            </div>

		  </div>
									{/* <h3 className="text-center">Connect to differernt Platforms</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptates nesciunt alias iure dolores eius voluptate, nulla neque error sit ab praesentium culpa aspernatur. Atque esse eaque cum labore molestias.</p> */}
								</div>

								{/* <!--end::Item-->
							</div>
							{/* <!--end::Timeline--> */}
						</div>
						{/* <!--end: Card Body--> */}
					</div>
					{/* <!--end: List Widget 5--> */}
				</div>
			
        								
  )
}

export default Dash_profile