import { useMutation, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { CREATE_USER_MUTATION } from '../graphql-client/Mutations';
import { QUERY_ALL_USERS } from '../graphql-client/Queries'
import Movies from './Movies';

export default function Users() {
    const [name,setName] = useState("");
    const [username,setUsername] = useState("");
    const [age,setAge] = useState("");
    const [nationality,setNationality] = useState("")
    const {loading, data, refetch} = useQuery(QUERY_ALL_USERS);
    const [createUser] = useMutation(CREATE_USER_MUTATION)
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
        createUser({
            variables: {
                input: {name, username,age: Number(age), nationality}
            }
        
        })
        refetch()
    }
  return (
    <div>
        <div>
            <input type="text" placeholder='Name...' onChange={onSetName}/>
            <input type="text" placeholder='Username...' onChange={onSetUsername} />
            <input type="number" placeholder='Age..' onChange={onSetAge}/>
            <input type="text" placeholder='Nationality' onChange={onSetNationality}/>
            <button onClick={onClickUser}>Create User</button>
        </div>
        {data && data.users.map((user) =>{
            return (
                <div key={user.name}>
                    <p>Name: {user.name} </p>
                    <p>Username: {user.username} </p>
                    <p>Age: {user.age} </p>
                    <p>Nationality: {user.nationality} </p>
                </div>
            )
        })}
        <Movies />
    </div>
  )
}
