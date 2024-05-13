import { getCountry } from "@/graphql/client";
import { useQuery } from "@apollo/client";
import router from "next/router";

export default function CountryDetail() {
    const countryCode = router.query.code;
    const {data: countryData,
        loading: countryLoading,
        error: countryError,
        refetch: countryRefetch
    } = useQuery(getCountry, { fetchPolicy: "no-cache", variables: {
        code: countryCode
    }});

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            {!countryLoading ? <>
                <div style={{
                    margin: 30,
                    fontSize: 75
                }}>
                    {countryData?.country.emoji}
                </div>
                <div>
                    Name : {countryData?.country.name} ({countryData?.country.code})
                </div>
                <div>
                    Continent : {countryData?.country.continent ?
                        countryData?.country.continent.name
                    :
                        'non renseigné'}
                </div></>
            :
                <div>
                    Loading...
                </div>
            }
        </div>
    );
    }