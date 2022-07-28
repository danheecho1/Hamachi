import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'

const PersonList = (props) => {

    const [persons, setPersons] = useState([])
    const {groupId} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/groups/${groupId}/persons`)
            .then(res => {
                console.log(res)
                setPersons(res.data)
            })
            .catch(err => console.log(err))
    }, [props.whenSubmitted])

    return (
        <>
            <div>
                {persons.map((person, id) =>
                    <Link to={`/api/persons/${person._id}`} key={person._id}>
                        <li>
                            {person.personName}
                        </li>
                    </Link>
                )}
            </div>
        </>
    )
}

export default PersonList