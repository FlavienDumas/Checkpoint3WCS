import { gql } from "@apollo/client";

export const getCountries = gql`
    query {
        countries {
            id
            name
            code
            emoji
            continent {
                id
                name
            }
        }
    }
`;

export const getCountry = gql`
    query ($code: String!) {
        country(code: $code) {
            id
            name
            code
            emoji
            continent {
                id
                name
            }
        }
    }
`;

export const addCountry = gql`
    mutation ($data: NewCountryInput!) {
        addCountry(data: $data) {
            id
            name
            code
            emoji
        }
    }
`;