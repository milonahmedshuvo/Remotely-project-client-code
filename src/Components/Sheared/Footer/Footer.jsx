import React from "react";

const Footer = () => {
  return (
    <div >
      <footer className="footer p-10 bg-[#1F69CA] text-white py-14 ">
        <div>
            <img src="https://softzino.com/images/icon-white.png" alt="" />
            <p className="text-[16px] mt-4">Since our establishment, we have</p>
            <p className="text-[16px] ">been delivering high-quality and</p>
            <p className="text-[16px]">sustainable software solutions for</p>
            <p className="text-[16px]">corporate purposes of worldwide</p>
            <p className="text-[16px]">businesses.</p>


            <div className="mt-10">
              <img src="https://softzino.com/images/basis.jpg" alt="" />
            </div>
        </div>


        <div>
          <span className=" font-medium text-white text-xl">For Jobseekers</span>
          <a className="link link-hover text-white text-lg">Browse Companies</a>
          <a className="link link-hover text-lg">Explore Internships</a>
          <a className="link link-hover text-lg">Upload Resume</a>
          <a className="link link-hover text-lg">Give Company Review</a>
        </div>

        
        
        <div>
          <span className="font-medium  text-xl">For Employers</span>
          <a className="link link-hover text-lg">Post a Job for free</a>
          <a className="link link-hover text-lg">Hire Talent</a>
          <a className="link link-hover text-lg">Login</a>
          <a className="link link-hover text-lg">Sign Up</a>
        </div>


        <div className="text-lg">
          <span className="font-medium  text-xl ">About Remotely</span>
          <a className="link link-hover text-lg"> About Us</a>
          <a className="link link-hover text-lg">Contact Us</a>
          <a className="link link-hover text-lg">Guidelines</a>
          <a className="link link-hover text-lg">Privacy Policy</a>
          <a className="link link-hover text-lg">Cookie Policy</a>
          <a className="link link-hover text-lg">Terms & Conditions</a>
          <a className="link link-hover text-lg">Sitemap</a>
        </div>

        
        
      </footer>
        
      

      
    </div>
  );
};

export default Footer;
