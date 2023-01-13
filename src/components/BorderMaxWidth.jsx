import React from "react";

export const BorderMaxWidth = ({ children }) => {
  return (
    <div className="border-b-2">
      <div className="mx-auto max-w-screen-2xl">{children}</div>
    </div>
  );
};
