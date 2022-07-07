import Dash_activities from "../Components/Dashboard/Dash_activities"
import FollowSuggest from "../Components/Home/FollowSuggest"
import Middlenav from "../Components/Home/Middlenav"
import Posts from "../Components/Home/Posts"
import Post_box from "../Components/Home/Post_box"

const GGuserHome = () => {
  return (
    <div>
        <div className="col-lg-5">     
        <Post_box />
        </div>
        <Middlenav />
            <div className="row">
                <div className="row posts col-lg-8">
                <div className="col-lg-6 col-md-6">
                <Dash_activities/>
                </div>
                <div className="col-lg-6 col-md-6">
                  <Posts />
                  <Posts />

                </div>
                {/* <div className="col-lg-6 col-md-6">
                <Posts/>
                </div>
                <div className="col-lg-6 col-md-6">
                  <Posts />
                </div> */}
              
                </div>
      
              <div className="col-lg-4">
                  <FollowSuggest />
                </div>
              </div>
        </div>
  )
}

export default GGuserHome