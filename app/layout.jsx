import React, { Children } from "react";
import "@styles/globals.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import LeftBar from "@components/LeftBar";
import RightBar from "@components/RightBar";

const Layout = ({ children }) => {
  return (
    <html>
      <body className="flex justify-between content-center">
        {/* <div className="layout-content sticky left-0 top-0 h-screen">
          <LeftBar />
        </div> */}

        <div className="layout-content scrollable-content">{children}</div>

        {/* <div className="layout-content sticky right-0 top-0 h-screen">
          <RightBar />
        </div> */}
      </body>
    </html>
  );
};

export default Layout;
