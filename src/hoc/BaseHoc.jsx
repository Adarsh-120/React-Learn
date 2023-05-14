import React from "react";

const BaseHoc =
  (Component) =>
  ({ ...props }) => {
    return <Component {...props} />;
  };

export default BaseHoc;
