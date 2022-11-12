import { useQuery } from '@apollo/client'
import React from 'react'
import { QUERY_ALL_MOVIES } from '../graphql-client/Queries'

export default function Movies() {
    const {data, loading} = useQuery(QUERY_ALL_MOVIES);
    if(loading) {
        return <h1>Movies is loading..</h1>
    }
  return (
    <div>
        {data && data.movies.map((movie) =>{
            return <h1 key={movie.name}>Movies Name: {movie.name}</h1>
        })}
    </div>
  )
}
