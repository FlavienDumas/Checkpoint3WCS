import CountryList from "../components/CountryList";
import CountryForm from "@/components/CountryForm";
import { getCountries } from "@/graphql/client";
import { useQuery } from "@apollo/client";

export default function Home() {
  const {data: countriesData,
      loading: countriesLoading,
      error: countriesError,
      refetch: countriesRefetch
  } = useQuery(getCountries, { fetchPolicy: "no-cache" });

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <CountryForm refetch={countriesRefetch}/>
      {!countriesLoading ?
        countriesData?.countries && <CountryList countriesList={countriesData?.countries}/>
      :
        <div>
          Loading...
        </div>
      }
    </div>
  );
}
