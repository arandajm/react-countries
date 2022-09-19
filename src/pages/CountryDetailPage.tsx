import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Country } from "../types";
import api from "../api";
import Spinner from "../components/Spinner";

const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px auto auto auto;
  gap: 30px 30px;

  h1 {
    font-size: 22px;
    grid-column: 1 / 3;
    margin: 0;
    align-self: flex-end;
  }
`;

const CountryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: white;
  gap: 50px;

  img {
    width: 100%;
  }
`;

const BorderCountries = styled.div`
  grid-column: 1 / 3;
  p {
    font-weight: bold;
  }
`;

const BorderCountry = styled.span`
  background-color: white;
  color: black;
  padding: 5px;
  margin: 5px;
`;

const CountryDetailPage = () => {
  const { name } = useParams();
  const [country, setCountry] = useState<Country>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.fetch(name).then((response) => {
      setLoading(false);
      setCountry(response[0]);
    });
  }, []);

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <CountryWrapper>
          <img src={country?.flags.png} alt={country?.flag} />
          <InfoWrapper>
            <h1>{country?.name?.common}</h1>
            <div>
              <p>
                <b>population: </b> {country?.population}
              </p>
              <p>
                <b>Region: </b> {country?.continents?.[0]}
              </p>
              <p>
                <b>Sub region: </b> {country?.subregion}
              </p>
              <p>
                <b>Capital: </b> {country?.capital}
              </p>
            </div>
            <div>
              <p>
                <b>Top Level Domain: </b> {country?.tld[0]}
              </p>
              <p>
                <b>Currencies: </b> {country?.capital}
              </p>
              <p>
                <b>Languages: </b>{" "}
                {country?.languages && Object.values(country.languages)}
              </p>
            </div>
            {country?.borders && (
              <BorderCountries>
                <p>Borders: </p>
                {country.borders.map((border) => (
                  <BorderCountry>{border}</BorderCountry>
                ))}
              </BorderCountries>
            )}
          </InfoWrapper>
        </CountryWrapper>
      )}
    </>
  );
};

export default CountryDetailPage;
