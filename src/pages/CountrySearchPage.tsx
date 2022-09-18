import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import api from "../api";
import CountryCard from "../components/CoutryCard";
import { Country } from "../types";

const CountriesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  column-gap: 20px;
  row-gap: 25px;
`;

const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;
`;

const CountrySearchPage: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    api.search().then((response: Country[]) => setCountries(response));
  }, []);

  return (
    <CountriesWrapper>
      {countries.map((country) => (
        <StyledLink to={`country/${country.name.common}`}>
          <CountryCard {...country} />
        </StyledLink>
      ))}
    </CountriesWrapper>
  );
};

export default CountrySearchPage;
