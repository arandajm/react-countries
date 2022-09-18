import React from "react";
import styled from "styled-components";

const CountryCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  .country-image-cointainer {
    height: 250px;
    img {
      height: 100%;
      width: 100%;
      object-fit: fill;
    }
  }

  .country-info-cointainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    background-color: #464444;
    color: white;
    h2 {
      font-size: 20px;
    }

    p {
      font-weight: bold;
      margin: 10px 0 0;

      span {
        font-weight: normal;
      }
    }
  }
`;

interface Props {
  name: { common: string };
  flags: {
    png: string;
  };
  population: string;
  region: string;
  capital: string[];
}

const CountryCard: React.FC<Props> = ({
  name,
  flags,
  population,
  region,
  capital,
}) => {
  return (
    <CountryCardContainer key={name.common}>
      <div className="country-image-cointainer">
        <img src={flags.png} alt="flag_img" />
      </div>
      <div className="country-info-cointainer">
        <h2>{name.common}</h2>
        <p>
          Population: <span>{population}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital[0]}</span>
        </p>
      </div>
    </CountryCardContainer>
  );
};

export default CountryCard;
