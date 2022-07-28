import React from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom'

const GroupDetailNav = () => {

    const navigate = useNavigate()
    const {groupId} = useParams()

    return (
        <>
            <div className="header_div">
                <button onClick={(e)=>navigate('/api/groups')}>Go back</button>
            </div>
            <p><Link to={`/api/groups/${groupId}/overview`}>Overview</Link> | <Link to={`/api/groups/${groupId}/persons`}>Persons</Link> | <Link to={`/api/groups/${groupId}/expenses`}>Expenses</Link> | <Link to={`/api/groups/${groupId}/transfers`}>Transfers</Link> </p>
        </>
    )
}

export default GroupDetailNav