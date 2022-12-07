import * as React from "react";

import Latest from "./Latest/Latest";
import Schedule from "./Schedule/Schedule";
import Standings from "./Standings/Standings";
import Drivers from "./Drivers/Drivers";
import Teams from "./Teams/Teams";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { useState } from "react";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const [menu, setMenu] = useState<Boolean>(true);

  const router = useRouter();
  return (
    <div className={menu ? "header-container" : "header-container"}>
      <svg
        className="header-hamburger"
        style={menu ? { display: "none" } : { display: "block" }}
      >
        <path
          fill="currentColor"
          d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
        />
      </svg>
      <div
        style={
          menu
            ? {
                display: "block",
                border: "none",
                position: "absolute",
                left: 0,
                top: "25%",
              }
            : { display: "none" }
        }
      >
        <svg className="header-hamburger">
          <path
            fill="currentColor"
            d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"
          />
        </svg>
      </div>
      <div className="logo">
        <NextLink href="/">
          <img
            src="https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg"
            alt="Formula 1"
          ></img>
        </NextLink>
      </div>
      <Latest />
      <div className="video-container" style={{ fontWeight: 600 }}>
        Video
      </div>
      <Schedule />
      <Standings />
      <Drivers />
      <Teams />
      <div className="video-container" style={{ fontWeight: 600 }}>
        Live Timing
      </div>
      <div className="video-container" style={{ fontWeight: 600 }}>
        Gaming
      </div>
      <div className="global-actions">
        <button
          className="sing-in-button"
          onClick={() => router.push("/login")}
        >
          Sing In
        </button>
        <button
          className="subscribe-button"
          onClick={() => router.push("/register")}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Header;
