import Link from 'next/link'
import PopupSignin from '../Components/Registermodules/loginmodal'
import PopupSignup from '../Components/Registermodules/registerModal'
import SideLogin from '../Components/Asideregisters/login'


const Signinmodules = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center " style={{minHeight:"100vh"}}>
      <div className="bg-white p-5 rounded shadow-sm">
        {/* <Link href="/">
            <img src="http://goinggenius.com.np/gg-front/assets/img/logo-color.png" alt="GG Logistics Logo" />
        </Link>
        <h1 className="text-dark mb-3">Going Genius</h1>
        <p>
        Going Genius provides services that provide additional value to your ideas. Connect with us today and transform your vision into reality.
        </p> */}
        {/* login and register buttons */}
        <div className="d-flex flex-row justify-content-center">
          {/* <PopupSignin />
          <PopupSignup istext={false}/> */}
          <SideLogin />

        </div>
      </div>
    </div>
  )
}

export default Signinmodules