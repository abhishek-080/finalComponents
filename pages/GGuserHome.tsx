import CardShowBox from "../Components/Home/CardShowBox"
import FollowSuggest from "../Components/Home/FollowSuggest"
import Middlenav from "../Components/Home/Middlenav"
import PhotoIncPosts from "../Components/Home/PhotoIncPosts"
import Posts from "../Components/Home/Posts"
import Post_box from "../Components/Home/Post_box"
import ProfileCard from "../Components/Home/ProfileCard"
import SideNav from "../Components/Home/SideNav"
import Trendingtags from "../Components/Home/Trendingtags"

const GGuserHome = () => {
  return (
    <div className="wrapper d-flex d-flex-column bg-light  justify-content-between">
      {/* Side Nav start */}
      <div className="sidenav ">
        <SideNav />
      </div>
      {/* side nav end 
      Profile Body start*/}
      
      <div className=" d-flex flex-nowrap justify-content-between ms-7">
        <div className="middle-content col-lg-7 col-md-7 p-3">

        {/* post box start */}
          <div className="">

            <Post_box />
          </div>
        {/* post box end 
        middle nav */}

          <div className="" style={{position:"sticky", top:"-10px", zIndex:"99" }}>

            <Middlenav />
          </div>
        {/* middle nav end
        posts start */}
        <div className="">
          <div className="posts" style={{position:"relative", top:"10px", zIndex:"" }}>
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
        <div className="col-lg-3 col-md-4 leftTrendings position-fixed" style={{right:"20px",height:"100vh", overflow:"scroll"}}>
            <div className="">
              {/* {/* <CardShowBox /> */}
              {/* <ProfileCard /> */}
            </div> 
            <div className="">
              <Trendingtags />
          
            </div>
            <div className="">
              <FollowSuggest />

            </div>
        </div>
        {/* floow end */}
      </div>
        {/* Profile Body end */}
    </div>
  )
}

export default GGuserHome