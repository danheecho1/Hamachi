import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'

const AllPersons = (props) => {

    const [persons, setPersons] = useState([])
    const [personName, setPersonName] = useState("")
    const {groupId} = useParams()

    const submitHandler = (e) => {
        console.log(groupId)
        e.preventDefault()
        axios.post(`http://localhost:8000/api/groups/${groupId}/persons`, {personName: personName, group_id: groupId})
            .then(res => {
                console.log("Saved " + res)
                props.setWhenSubmitted(!props.whenSubmitted)
            }
                )
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/groups/${groupId}/persons`)
            .then(res => {
                setPersons(res.data)
            })
            .catch(err => console.log(err))
    }, [props.whenSubmitted])

    return (
        <>
            <div className="header_div">
                <h1>Group name</h1>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>Name: </label>
                        <input type="text" onChange = {e => setPersonName(e.target.value)}></input>
                    </div>
                    <input type="submit" />
                </form>
            </div>
            <hr/>
            <div>
                {persons.map((person, id) =>
                    <li key={person._id}>
                        {person.personName}
                    </li>
                )}
            </div>
        </>
    )
}

export default AllPersons