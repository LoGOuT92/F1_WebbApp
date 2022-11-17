import * as React from "react";
// import "./NavContent.scss";

interface INavContentProps {
  name: string[];
}

const NavContent: React.FunctionComponent<INavContentProps> = ({ name }) => {
  return (
    <div className="nav-full-content">
      {name.map((item) => (
        <div className="nav-card" key={item}>
          <p>{item}</p>
          <svg>
            <path
              fill="currentColor"
              d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default NavContent;
