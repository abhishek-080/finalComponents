import styles from "../../styles/Nav.module.css";
import porfileImage from "../../styles/assets/profileImage.png";
import Image from "next/image";
import { useState } from "react";
import brandLogo from "../../styles/assets/brandLogo.png";
import profile from "../../styles/assets/profile.png";
import changePassword from "../../styles/assets/changePassword.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <div className={styles.navBar}>
        {/* <div className={styles.hamburger}>
          <span
            onClick={() => setIsOpen(!isOpen)}
            className={styles.hamburgerIcon}
          >
            &#x2630;
          </span>
        </div> */}
        <div className={styles.brandLogo}>
              <Image
                src={brandLogo}
                alt="profile"
                className={styles.brandImage}
                width="120px"
                height="40px"
              />
            </div>
        <div className="fw-bolder">
          Home
        </div>
        <div className="fw-bolder ">
          Profile
        </div>
        <div className="fw-bolder">
          Genuis Card
        </div>
        <div className="fw-bolder">
          Security
        </div>
        <div className={styles.profileSection}>
          <Image
            src={porfileImage}
            alt="profile"
            className={styles.profileImages}
            width="50px"
            height="50px"
          />
        </div>
     
      </div>
      <div className={isOpen ? styles.sideNavOpen : styles.sideNavClose}>
        <div className={styles.sideNav}>
          <div className={styles.sideNavHeader}>
            <div className={styles.sideNavhamburger}>
              <span
                onClick={() => setIsOpen(!isOpen)}
                className={styles.hamburgerIcon}
              >
                &#x2630;
              </span>
            </div>
            <div className={styles.brandLogo}>
              <Image
                src={brandLogo}
                alt="profile"
                className={styles.brandImage}
                width="120px"
                height="40px"
              />
            </div>
          </div>
          <div className={styles.sideNavBody}>
            <div className={styles.sideNavItem1}>
              <div className={styles.sideNavItemIcon}>
                <Image src={profile} />
              </div>
              <div className={styles.sideNavItemText} style={{paddingBottom:'7px'}}>Profile</div>
            </div>
            <div className={styles.sideNavItem2}>
              <div className={styles.sideNavItemIcon}>
                <Image src={changePassword} />
              </div>
              <div className={styles.sideNavItemText}>Change Password</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
