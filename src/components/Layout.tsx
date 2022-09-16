import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header>
        <span>Where in the world?</span>
        <span>TODO mode switch</span>
      </Header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
