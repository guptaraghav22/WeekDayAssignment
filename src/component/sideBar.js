
import "./sideBar.css";
import { useState } from "react";

function SideBar({sideBarOpean,setSideBarOpean}) {
    const toggleSidebar = () => {
      setSideBarOpean(!sideBarOpean);
    };
  
    return (
      <>
        <div className={sideBarOpean ? "main_div" : "small_main_div"}>
          <div className={sideBarOpean ? "container" : "inner_small_container"}>
            <div>
              <div className="sidebar-logo-button-holder">
                {sideBarOpean ? (
                  <img
                    className="header_image"
                    src="https://jobs.weekday.works/_next/static/media/logo.268caeb2.png"
                  ></img>
                ) : (
                  <img
                    className="small_container"
                    src="https://jobs.weekday.works/_next/static/media/logo-small.08826abd.png"
                  ></img>
                )}
  
                <button
                  className={sideBarOpean?"sidemenu-hide-show-button":"small_sidemenu-hide-show-button"}
                  onClick={() => {
                    toggleSidebar();
                  }}
                >
                  <svg
                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                    height="20px"
                    width="20px"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="KeyboardArrowRightIcon"
                  >
                    <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"></path>
                  </svg>
                </button>
              </div>
  
              <div class="MuiBox-root css-1krolha"></div>
  
              <div className="Content_Container">
                {sideBarOpean ? (
                  <p class="job_heading">LOOKING FOR A JOB</p>
                ) : null}
                {!sideBarOpean ? <p class="small_Job_Heading">Get Jobs</p> : null}
                <div className="job_options">
                  <span class="option_content">
                    <svg
                      className="svg_icons"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="PermIdentityOutlinedIcon"
                    >
                      <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4"></path>
                    </svg>
                    {sideBarOpean ? (
                      <p class="option_content_paragraph">looking for jobs</p>
                    ) : null}
                  </span>
                  <span class="option_content">
                    <svg
                      class="svg_icons"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="SearchOutlinedIcon"
                    >
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"></path>
                    </svg>
                    {sideBarOpean ? (
                      <p class="option_content_paragraph">Search Jobs</p>
                    ) : null}
                  </span>
                  <span class="option_content">
                    <svg
                      class="svg_icons"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="CurrencyRupeeIcon"
                    >
                      <path d="M13.66 7c-.56-1.18-1.76-2-3.16-2H6V3h12v2h-3.26c.48.58.84 1.26 1.05 2H18v2h-2.02c-.25 2.8-2.61 5-5.48 5h-.73l6.73 7h-2.77L7 14v-2h3.5c1.76 0 3.22-1.3 3.46-3H6V7z"></path>
                    </svg>
  
                    {sideBarOpean ? (
                      <p class="option_content_paragraph">Search Jobs</p>
                    ) : null}
                  </span>
                </div>
              </div>
            </div>
            <div className="Image_footer">
              <svg
                className="svg_profile_icon"
                height="35px"
                width="35px"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="PersonIcon"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
              </svg>
              {sideBarOpean ? (
                <h1 className="profile_info">Raghav Gupta</h1>
              ) : null}
            </div>
          </div>
        </div>
      </>
    );
}

export default SideBar;