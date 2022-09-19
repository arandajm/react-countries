import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import api from "../api";
import CountryCard from "../components/CoutryCard";
import { Country } from "../types";
import spinner from "../../assets/loading.svg";
import Spinner from "../components/Spinner";

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    api.search().then((response: Country[]) => {
      setLoading(false);
      setCountries(response);
    });
  }, []);

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <CountriesWrapper>
          {countries.map((country) => (
            <StyledLink to={`country/${country.name.common.toLowerCase()}`}>
              <CountryCard {...country} />
            </StyledLink>
          ))}
        </CountriesWrapper>
      )}
    </>
  );
};

export default CountrySearchPage;
