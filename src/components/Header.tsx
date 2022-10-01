import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyled = styled.header`
  color: ${(props) => props.theme.colors.white};
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div.container {
    max-width: 1280px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  h1 {
    font-size: 18px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
`;

const Header = () => {
  return (
    <HeaderStyled>
      <div className="container">
        <StyledLink to="/">
          <h1>Where in the world?</h1>
        </StyledLink>
        <span>TODO mode switch</span>
      </div>
    </HeaderStyled>
  );
};

export default Header;
