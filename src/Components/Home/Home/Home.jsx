import React from 'react'
import Banner from '../Banner/Banner'
import Companys from '../Companys/Companys'
import HomeWork from '../../HomeWork/HomeWork'
import Eportfolio from '../Eportfolio/Eportfolio'
import WhyRemotely from '../WhyRemotely/WhyRemotely'
import Employers from '../Employers/Employers'
import JobSeekers from '../JobSeekers/JobSeekers'
import ProfessionalSkills from '../ProfessionalSkills/ProfessionalSkills'
import Organizations from '../Organizations/Organizations'
import YourIdea from '../YourIdea/YourIdea'

const Home = () => {
  return (
    <div>
       <Banner></Banner>
       <Companys></Companys>
       <HomeWork></HomeWork>
       <Eportfolio></Eportfolio>
       <WhyRemotely></WhyRemotely>
       <Employers></Employers>
       <JobSeekers></JobSeekers>
       <ProfessionalSkills></ProfessionalSkills>
       <Organizations></Organizations>
       <YourIdea></YourIdea>
    </div>
  )
}

export default Home
