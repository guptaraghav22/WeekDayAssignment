import React, { useEffect, useState } from "react";
import "./homePage.css";
import Select from "react-select";
import JobCard from "./jobCard";
import axios from "axios";

function Homepage({ sideBarOpean, setSideBarOpean }) {
  const [selectedOption, setSelectedOption] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]); // State for selected roles
  const [displayData, setDisplayData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(false); // State to track initial data load

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        console.log("Fetching data for page:", page);
        const response = await axios.post(
          "https://api.weekday.technology/adhoc/getSampleJdJSON",
          { offset: (page - 1) * 10, limit: 10 }
        );
        console.log("Fetched data:", response.data.jdList);
        setDisplayData((prevData) => [...prevData, ...response.data.jdList]);
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (
        scrollTop + windowHeight >= documentHeight - 100 &&
        !loading &&
        displayData.length
      ) {
        fetchData();
      }
    };

    if (displayData.length === 0) {
      fetchData();
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, displayData, page]);

  // Filter data based on selected roles
  const filterData = () => {
    const selectedRolesArray = selectedRoles.map((data) => console.log(data));
    console.log(selectedRoles);

    if (selectedRolesArray.length === 0) {
      // If no roles selected, return all data
      return displayData;
    }

    return displayData.filter((data) =>
      selectedRolesArray.includes(data.jobRole)
    );
  };

  useEffect(() => {
    const filteredData = filterData();
    setDisplayData(filteredData);
  }, [selectedRoles]);

  const techStack = [
    { value: "cpp", label: "C++" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
  ];

  const roles = [];
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.post(
          "https://api.weekday.technology/adhoc/getSampleJdJSON"
        );

        response.data.jdList.forEach((values) => {
          const exists = roles.some((role) => role.value === values.jobRole);
          if (!exists) {
            roles.push({ value: values.jobRole, label: values.jobRole });
          }
        });
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    fetchRoles();
  }, [selectedOption]);

  const noOfEmployees = [
    { value: "1-10", label: "1-10" },
    { value: "10-20", label: "10-20" },
    { value: "20-30", label: "20-30" },
    { value: "30-40", label: "30-40" },
    { value: "40-50", label: "40-50" },
    { value: "50-60", label: "50-60" },
  ];

  const experience = [
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
    <div className={sideBarOpean ? "home-page-main-holder" : "sideBarClosed"}>
      <div className="header-home-page">👋 Raghav</div>
      <div className="home-page-body">
        <div className="subHeading-body-home">
          We, at Weekday, are creating a go-to hub for uncovering the real
          issues candidates should be aware of before joining a company.
          <span>Access 150+ company reviews here</span>
        </div>

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
              placeholder="Roles"
            />
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              isMulti
              options={noOfEmployees}
            />
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              isMulti
              options={experience}
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

          <div className="job-card-section-home">
            {loading && !initialLoad && <div>Loading...</div>}{" "}
            {filterData().map((data) => (
              <JobCard key={data.jdUid} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
