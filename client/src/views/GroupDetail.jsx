import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate, useParams, Link} from 'react-router-dom'

const GroupDetail = () => {

    const navigate = useNavigate()
    const [group, setGroup] = useState([])
    const {groupId} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/groups/${groupId}`)
            .then(res => {
                setGroup(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <div className="header_div">
                <h1>{group.groupName}</h1>
                <button onClick={(e)=>navigate('/api/groups')}>Go back</button>
            </div>
            <p><Link to={`/api/groups/${groupId}/overview`}>Overview</Link> | <Link to={`/api/groups/${groupId}/persons`}>Persons</Link> | <Link to={`/api/groups/${groupId}/expenses`}>Expenses</Link> | <Link to={`/api/groups/${groupId}/transfers`}>Transfers</Link> </p>
        </>
    )
}

export default GroupDetail