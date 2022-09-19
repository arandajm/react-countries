import styled from "styled-components";
import imgUrl from "../assets/loading.svg";

const StyledSpinner = styled.div`
  display: grid;
  justify-content: center;
`;

const Spinner = () => {
  return (
    <StyledSpinner>
      <img src={imgUrl} alt="spinner" />
    </StyledSpinner>
  );
};

export default Spinner;
