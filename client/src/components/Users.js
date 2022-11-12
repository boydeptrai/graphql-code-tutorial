import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { QUERY_ALL_USERS } from '../graphql-client/Queries'
import Movies from './Movies';

export default function Users() {
    const [name,setName] = useState("");
    const [username,setUsername] = useState("");
    const [age,setAge] = useState("");
    const [nationality,setNationality] = useState("")
    const {loading, data, refetch} = useQuery(QUERY_ALL_USERS);
    if(loading) {
        return <h1>Data is loading...</h1>
    }
    const onSetName = (event) =>{
        setName(event.target.value)
    }
  
    const onSetUsername = (event) =>{
        setUsername(event.target.value)
    }

    const onSetAge = (event) =>{
        setAge(event.target.value);
    }
    const onSetNationality = (event) =>{
        setNationality(event.target.value.toUpperCase())
    }
    const onClickUser = () =>{
        
    }
  return (
    <div>
        <div>
            <input type="text" placeholder='Name...' onChange={onSetName}/>
            <input type="text" placeholder='Username...' onChange={onSetUsername} />
            <input type="number" placeholder='Age..' onChange={onSetAge}/>
            <input type="text" placeholder='Nationality' onChange={onSetNationality}/>
            <button>Create User</button>
        </div>
        <Movies />
    </div>
  )
}
