import React from 'react'
import Banner from '../Banner/Banner'
import Companys from '../Companys/Companys'
import HomeWork from '../../HomeWork/HomeWork'
import Eportfolio from '../Eportfolio/Eportfolio'
import WhyRemotely from '../WhyRemotely/WhyRemotely'
import Employers from '../Employers/Employers'

const Home = () => {
  return (
    <div>
       <Banner></Banner>
       <Companys></Companys>
       <HomeWork></HomeWork>
       <Eportfolio></Eportfolio>
       <WhyRemotely></WhyRemotely>
       <Employers></Employers>
    </div>
  )
}

export default Home
