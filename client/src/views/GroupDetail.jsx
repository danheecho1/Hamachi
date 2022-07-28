import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import GroupDetailNav from '../components/GroupDetailNav'
import PersonForm from '../components/PersonForm'


const GroupDetail = () => {

    const navigate = useNavigate()
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
        </>
    )
}

export default GroupDetail