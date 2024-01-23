import React from "react";

const sizeClasses = {
  txtInterBold20Pink600: "font-bold font-inter",
  txtInterBold20: "font-bold font-inter",
  txtInterBold36: "font-bold font-inter",
  txtInterBold20Red200: "font-bold font-inter",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
