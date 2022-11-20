import * as React from "react";
import Content from "./Content/Content";
import MoreNews from "./Content/MoreNews/MoreNews";
import Header from "./Header/Header";
import Wrapper from "./Wrapper";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Wrapper>{children}</Wrapper>
    </div>
  );
};

export default Layout;
