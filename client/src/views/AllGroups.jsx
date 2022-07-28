import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const AllGroups = (props) => {

    const [groups, setGroups] = useState([])
    const [groupName, setGroupName] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/groups', {groupName})
            .then(res => {
                console.log("Saved " + res)
                props.setWhenSubmitted(!props.whenSubmitted)
            }
                )
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/groups')
            .then(res => {
                setGroups(res.data)
            })
            .catch(err => console.log(err))
    }, [props.whenSubmitted])

    return (
        <>
            <div className="header_div">
                <h1>Hamachi</h1>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>Group: </label>
                        <input type="text" onChange = {e => setGroupName(e.target.value)}></input>
                    </div>
                    <input type="submit" />
                </form>
            </div>
            <hr/>
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

export default AllGroups