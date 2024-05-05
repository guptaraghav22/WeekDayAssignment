import React, { useState } from "react";
import "./homePage.css";
import Select from "react-select";
import JobCard from "./jobCard";

function Homepage() {
  const [selectedOption, setSelectedOption] = useState("");

  const techStack = [
    { value: "cpp", label: "C++" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
  ];
  const roles = [
    {
      value: "frontEnd",
      label: "Front-End",
    },
    {
      value: "backEnd",
      label: "Back-End",
    },
  ];
  const noOfEmployess = [
    { value: "1-10", label: "1-10" },
    { value: "10-20", label: "10-20" },
    { value: "20-30", label: "20-30" },
    { value: "30-40", label: "30-40" },
    { value: "40-50", label: "40-50" },
    { value: "50-60", label: "50-60" },
  ];

  const experince = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
  ];

  const jobLocations = [
    { value: "remote", label: "Remote" },
    { value: "hybrid", label: "Hybrid" },
    { value: "inOffice", label: "In-Office" },
  ];

  const minBasePay = [
    { value: "0L", label: "0l" },
    { value: "10L", label: "10l" },
    { value: "20L", label: "20l" },
    { value: "30L", label: "30l" },
    { value: "40L", label: "40l" },
  ];

  return (
    <div className="home-page-main-holder">
      <div className="header-home-page">👋 Jasmeet</div>
      <div className="home-page-body">
        <div className="subHeading-body-home">
          We, at Weekday, are creating a go-to hub for uncovering the real
          issues candidates should be aware of before joining a company.
          <span>Access 150+ company reviews here</span>
        </div>

        {/* filters */}
        <div className="filters-section-home">
          <ul className="section-filter">
            <li>Applied Jobs</li>
            <li>
              Search Jobs <span className="jobs-count">2704</span>
            </li>
          </ul>

          <div className="selection-filters">
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              isMulti
              options={roles}
            />
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              isMulti
              options={noOfEmployess}
            />
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              isMulti
              options={experince}
            />
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              isMulti
              options={jobLocations}
            />
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              isMulti
              options={techStack}
            />
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              isMulti
              options={minBasePay}
            />
          </div>

          {/* job card section */}
          <div className="job-card-section-home">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
