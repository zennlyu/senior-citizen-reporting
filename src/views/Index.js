import React from "react";

// reactstrap components

// core components
// public sections
import SectionTypography from "./index-sections/SectionTypography";
import RegisterPage from "./ch-options/RegisterPage";
import IndexNavbar from "../components/Navbars/IndexNavbar";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
        <div className="main">
            <SectionTypography />
            <RegisterPage />
        </div>
    </>
  );
}

export default Index;
