import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const GroupList = (props) => {

    const [groups, setGroups] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/groups')
            .then(res => {
                setGroups(res.data)
            })
            .catch(err => console.log(err))
    }, [props.whenSubmitted])

    return (
        <>
            <div>
                {groups.map((group, id) =>
                    <Link to={`/api/groups/${group._id}`} key={group._id}>
                        <li>
                            {group.groupName}
                        </li>
                    </Link>
                )}
            </div>
        </>
    )
}

export default GroupList