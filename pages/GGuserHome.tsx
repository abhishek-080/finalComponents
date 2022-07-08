import FollowSuggest from "../Components/Home/FollowSuggest"
import Middlenav from "../Components/Home/Middlenav"
import PhotoIncPosts from "../Components/Home/PhotoIncPosts"
import Posts from "../Components/Home/Posts"
import Post_box from "../Components/Home/Post_box"
import SideNav from "../Components/Home/SideNav"
import Trendingtags from "../Components/Home/Trendingtags"

const GGuserHome = () => {
  return (
    <div className="wrapper d-flex d-flex-column flex-row-fluid bg-white">
      {/* Side Nav start */}
      <div className="sidenav">
        <SideNav />
      </div>
      {/* side nav end 
      Profile Body start*/}
      
      <div className="col-lg-12 d-flex flex-nowrap">
        <div className="middle-content ms-7 me-9">

        {/* post box start */}
        <div className="">
        
          <Post_box />
        </div>
        {/* post box end 
        middle nav */}

        <div className="">

          <Middlenav />
        </div>
        {/* middle nav end
        posts start */}
        <div className="">
          <div className=" row posts">
            <div className="">
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
        </div>

        {/* posts end
        follow suggest box start */}
        <div className="col-lg-4 ms-7 " style={{position:"sticky", top:"0"}}>
            <div className="">
              <Trendingtags />
          
            </div>
              <FollowSuggest />
            <div>

            </div>
        </div>
        {/* floow end */}
      </div>
        {/* Profile Body end */}
    </div>
  )
}

export default GGuserHome