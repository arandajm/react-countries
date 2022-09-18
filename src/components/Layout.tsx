import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 18px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header>
        <StyledLink to="/">
          <h1>Where in the world?</h1>
        </StyledLink>
        <span>TODO mode switch</span>
      </Header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
