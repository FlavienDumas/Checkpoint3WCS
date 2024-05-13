import { ApolloQueryResult, OperationVariables, useMutation } from "@apollo/client";
import { addCountry } from "@/graphql/client";
import { useState } from "react";

export interface CountryFormProps {
    refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<ApolloQueryResult<any>>
}

export default function CountryForm({ refetch }: CountryFormProps) {
    const [code, setCode] = useState<string>("");
    const [emoji, setEmoji] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [doAddCountry, { error: addCountryError }] = useMutation(addCountry, 
        {fetchPolicy: "no-cache"}
    );

    const sendAddCountry = async ()=>{
        try{
            const { data } = await doAddCountry({
                variables: {
                    data: {
                        code: code,
                        emoji: emoji,
                        name: name
                    }
                }
            })
            console.log(data);
            setCode("");
            setEmoji("");
            setName("");
            refetch();
        } catch(e){
            console.log(e);
        }
    }

    return (
        <div style={{
            margin: 50,
            backgroundColor: 'rgb(241,241,241)',
            border: '1px solid grey',
            padding: 5
        }}>
            <div className="countryForm" style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 125,
                minWidth: 'fit-content',
            }}>
                <label className="countryContent" style={{
                    flex: 1
                }}>
                    Name <br/>
                    <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} style={{
                        height: 40,
                        width: '100%'
                    }}/>
                </label>
                <label className="countryContent" style={{
                    flex: 1
                }}>
                    Emoji <br/>
                    <input type="text" onChange={(e)=>{setEmoji(e.target.value)}} value={emoji} style={{
                        height: 40,
                        width: '100%'
                    }}/>
                </label>
                <label className="countryContent" style={{
                    flex: 1
                }}>
                    Code <br/>
                    <input type="text" onChange={(e)=>{setCode(e.target.value)}} value={code} style={{
                        height: 40,
                        width: '100%'
                    }}/>
                </label>
                <div className="countryContent" style={{
                    flex: 1,
                    margin: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <button className="clickable" onClick={sendAddCountry} style={{
                        backgroundColor: 'rgb(248,20,108)',
                        border: 'none',
                        borderRadius: 5,
                        height: 60,
                        color: 'white'
                    }}>
                        Add
                    </button>
                </div>
            </div>
            {addCountryError && 
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'red',
                    fontWeight: 'bold'
                }}>
                    {addCountryError.message} !
                </div>
            }
        </div>
        
    );
}