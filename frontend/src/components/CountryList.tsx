import { useRouter } from "next/router";

export default function CountryList(props: any) {
    const router = useRouter();

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {props.countriesList.map((country: any)=>(
                <div key={country.id} onClick={()=>{router.push(`/country/${country.code}`)}}
                className="clickable"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 100,
                    height: 70,
                    border: '1px solid rgb(200, 200, 200)',
                    borderRadius: 5,
                    margin: 5
                }}>
                    {country.name}
                    <span>{country.emoji}</span>
                </div>
            ))}
        </div>
    );
}