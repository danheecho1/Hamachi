import React, {useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const PersonForm = (props) => {

    const [personName, setPersonName] = useState("")
    const {groupId} = useParams()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/groups/${groupId}/persons`, {personName: personName, group_id: groupId})
            .then(res => {
                props.setWhenSubmitted(!props.whenSubmitted)
            }
                )
            .catch(err => console.log(err + "ERRORED"))
    }

    return (
        <>
            <div className="header_div">
                <form onSubmit={submitHandler}>
                    <div>
                        <label>Person: </label>
                        <input type="text" onChange = {e => setPersonName(e.target.value)}></input>
                    </div>
                    <input type="submit" />
                </form>
            </div>
        </>
    )
}

export default PersonForm