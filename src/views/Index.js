import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections

import SectionMarkdown from "./index-sections/SectionMarkdown";
import SectionTypo from "./index-sections/SectionTypo";
import RegisterPage from "./examples/RegisterPage";

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
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
          <SectionTypo />
          <SectionMarkdown />
          <RegisterPage />
      </div>
    </>
  );
}

export default Index;
