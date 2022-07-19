import React from 'react'
import ProfileMidNav from '../Profile/ProfileMidNav'
import ProfUserTop from '../Profile/ProfUserTop'
import Ababout from './Ababout'
import AbCard from './AbCard'
import AbEducation from './AbEducation'
import AbExperience from './AbExperience'
import AboutForm from './AboutForm'
import AboutNav from './AboutNav'
import AbServices from './AbServices'

const Abouthome = () => {
  return (
    <div>
      <div className='d-flex justify-content-center bg-light  '>
        <div>
          {/* <ProfNav /> */}
        </div>
        <div className='col-lg-10 d-flex flex-column  p-5'>

          <div className="profPhoto">
            <ProfUserTop />
          </div>


          <div className="midNav" style={{position:"sticky", top:"-20px", zIndex:"99999"}}>
            <AboutNav />
          </div>

          <div className="aboutForm rounded bg-white mt-4 d-flex flex-row">
            {/* <AboutForm /> */}

            <div className="col-lg-7">

              <div className="personInfo p-4">
                <Ababout />
              </div>

              <div className="personInfo p-4">
                <AbEducation />
              </div>

              <div className="personInfo p-4">
                <AbExperience />
              </div>
              
              <div className="personInfo p-4">
                <AbServices />
              </div>

            </div>

            <div className="col-lg-5 " >
              <AbCard />  
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Abouthome