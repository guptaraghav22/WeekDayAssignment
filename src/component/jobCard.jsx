import React from "react";
import "./jobCard.css";

function JobCard({data}) {

  return (
    <div className="job-card-main-holder">
      <div className="postedDate-holder">Posted 11 days ago</div>
      <div className="name-logo-container">
        
        <img className="ht25rem" src={data.logoUrl}></img>

        <div className="name-holder">
          <span>{data.companyName}</span>
          <span>{data.jobRole}</span>
          <span>{data.location}</span>
        </div>
      </div>
      <div className="salary-details">Estimated Salary: {data.minJdSalary?data.minJdSalary:0}-{data.maxJdSalary} ✅ </div>
      <div className="about-company-section">
        <h5>About Company: </h5>
        <span>About us</span>
        <p>
          {data.jobDetailsFromCompany}
        </p>
      </div>
      <div className="view-job-card">
        <button>View job</button>
      </div>
      <div className="experience-section">
        <span>Minimum Experience</span>
        <span>{data.minExp}</span>
      </div>
      <div className="buttons-job-card">
        <button>⚡ Easy Apply</button>
        <button>Unlock referral asks</button>
      </div>
    </div>
  );
}

export default JobCard;
