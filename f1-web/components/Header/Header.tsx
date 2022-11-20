import * as React from "react";

import Latest from "./Latest/Latest";
import Schedule from "./Schedule/Schedule";
import Standings from "./Standings/Standings";
import Drivers from "./Drivers/Drivers";
import Teams from "./Teams/Teams";
import { useRouter } from "next/router";
import NextLink from "next/link";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const router = useRouter();
  return (
    <div className="header-container">
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
