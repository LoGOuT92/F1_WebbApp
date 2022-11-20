import * as React from "react";

interface IWrapperProps {
  children: React.ReactNode;
  variant?: "small" | "regular";
}

const Wrapper: React.FunctionComponent<IWrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
