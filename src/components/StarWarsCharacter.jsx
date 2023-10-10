import { useEffect } from 'react'
import { useState } from 'react'
import Spinner from "./Spinner";

export default function StarWarsCharacter() {
    const [dataState, setDataState] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://swapi.dev/api/people/${Math.floor(Math.random() * 9 + 1)}`)
                const data = await response.json()
                setDataState(data)
                setLoading(false)
                console.log(data.name);
            } catch (error) {
                console.log(error);
            }
        }
        const time = setTimeout(() => {
            fetchData()
        }, 2000);
    }, [])

    if (loading) {
        return <Spinner />
    }

    return (
        <div>
            <h1>Name: {dataState.name}</h1>
            <h3>Height: {dataState.height}</h3>
            <h3>Mass: {dataState.mass}</h3>
            <h3>Hair Color: {dataState.hair_color}</h3>
        </div>
    )
}
