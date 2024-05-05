import React from "react";
import "./jobCard.css";

function JobCard() {
  return (
    <div className="job-card-main-holder">
      <div className="postedDate-holder">Posted 11 days ago</div>
      <div className="name-logo-container">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2 10.5714C2 5.83756 5.83756 2 10.5714 2H17.4286C22.1624 2 26 5.83756 26 10.5714V17.4286C26 22.1624 22.1624 26 17.4286 26H10.5714C5.83756 26 2 22.1624 2 17.4286V10.5714ZM10.5714 10.5714H17.4286V17.4286H10.5714V10.5714Z"
            fill="#FD71AF"
          />
        </svg>

        <div className="name-holder">
          <span>Loop Kitchen</span>
          <span>Senior Engineer</span>
          <span>Bangalore</span>
        </div>
      </div>
      <div className="salary-details">Estimated Salary: ₹40-60 LPA ✅ </div>
      <div className="about-company-section">
        <h5>About Company: </h5>
        <span>About us</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          necessitatibus officia reprehenderit velit omnis perferendis libero
          in, adipisci incidunt excepturi facere asperiores reiciendis, numquam
          praesentium, consequuntur vel quidem earum recusandae.
        </p>
      </div>
      <div className="view-job-card">
        <button>View job</button>
      </div>
      <div className="experience-section">
        <span>Minimum Experience</span>
        <span>5 Years</span>
      </div>
      <div className="buttons-job-card">
        <button>⚡ Easy Apply</button>
        <button>Unlock referral asks</button>
      </div>
    </div>
  );
}

export default JobCard;
