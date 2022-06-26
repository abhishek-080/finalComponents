import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import NavBar from '../Components/Nav/index'
import NavbarGG from '../Components/Nav/NavbarGG'
import Sidebar from '../Components/Nav/Sidebar'
import UserStart from './startform/UserStart'
import GenerateCard from './startform/GenerateCard'
import UserHome from './UserHome'


const Home: NextPage = () => {
  return (
    <div>

      {/* <UserStart /> */}
    <GenerateCard />
       {/* <NavbarGG /> */}
      <div  className={styles.container}>
      
        <UserHome /> 
      </div>
    </div>

  )
}

export default Home
