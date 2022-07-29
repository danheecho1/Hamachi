import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import GroupDetailNav from '../components/GroupDetailNav'
import PersonForm from '../components/PersonForm'
import PersonList from '../components/PersonList'


const Persons = () => {

    const [group, setGroup] = useState([])
    const {groupId} = useParams()
    const [whenSubmitted, setWhenSubmitted] = useState('false')

    useEffect(() => {
        axios.get(`http://localhost:8000/api/groups/${groupId}`)
            .then(res => {
                setGroup(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <h1>{group.groupName}</h1>
            <GroupDetailNav />
            <PersonForm whenSubmitted={whenSubmitted} setWhenSubmitted={setWhenSubmitted} />
            <PersonList whenSubmitted={whenSubmitted} setWhenSubmitted={setWhenSubmitted} />
        </>
    )
}

export default Persons