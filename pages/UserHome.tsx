import Dashboard from '../Components/Dashboard/dashboard'
import Link from 'next/link'
import Dash_card_service from '../Components/Dashboard/Dash_card_service'
import Dash_activities from '../Components/Dashboard/Dash_activities'
import Dash_connect from '../Components/Dashboard/Dash_connect'
import Dash_profile from '../Components/Dashboard/Dash_profile'
import Dash_mobileApp from '../Components/Dashboard/Dash_mobileApp'
import Dash_getConn from '../Components/Dashboard/Dash_getConn'
import styles from '../styles/Home.module.css'

const UserHome = () => {
  return (
    <div>
        <div  className={styles.container}>
            
            <div className="page ">
      
              <div className="row mt-5">
                <div className="col-lg-9 col-md-8">
                  <Dashboard />
                </div>
                <div className="col-lg-3 col-md-4">
                  <Dash_getConn />
                </div>
              </div>
              <div className="row g-5 g-xxl-12">
                <div className="col-lg-4 col-md-6">
                  <Dash_activities />
                </div>
                <div className="col-lg-4 col-md-6">
                  <Dash_profile />
                </div>
                <div className="col-lg-4">
                  <Dash_card_service />
                </div>
      
                <div className="col-lg-8 ">
                  <Dash_connect />
                </div>
                <div className="col-lg-4 col-sm-6">
                  <Dash_mobileApp />
                </div>
      
              </div>
            
            </div>
        </div>
    </div>
  )
}

export default UserHome