import PhotoIncPosts from '../Home/PhotoIncPosts'
import Posts from '../Home/Posts'
import ProfileMidNav from './ProfileMidNav'
import ProfNav from './ProfNav'
import ProfPhotos from './ProfPhotos'
import { ProfSkills } from './ProfSkills'
import ProfThreads from './ProfThreads'
import ProfUserTop from './ProfUserTop'

const ProfHome = () => {
  return (
    <div className='d-flex justify-content-center bg-light  '>
      <div>
        {/* <ProfNav /> */}
      </div>
      <div className='col-lg-10 d-flex flex-column  p-5'>

        <div className="profPhoto">
          <ProfUserTop />
        </div>  
        

        <div className="midNav">
          <ProfileMidNav />
        </div>

        {/* Body start */}
        <div className="d-flex">

          {/* left contents */}

          <div className="mt-7 col-lg-4">
            <div className="skills">
              <ProfSkills />
            </div>

            <div className="skills">
              <ProfThreads /> 
            </div> 

            <div className="skills">
              <ProfPhotos /> 
            </div>    
          </div>

          {/* left content end
             timeline start */}

          <div className="d-flex flex-wrap  ms-3 col-lg-6 mt-7  ">

            <div className="posts">
              <div className=" ">
                <PhotoIncPosts />
              </div>
              <div className="">
                <Posts />
              </div>
              <div className="">
                <PhotoIncPosts />
              </div>
              <div className="">
                <Posts />
              </div>
            </div>

          </div>
          {/* end timeline */}

        </div>
        {/* body end */}
      </div>
    </div>
  )
}

export default ProfHome