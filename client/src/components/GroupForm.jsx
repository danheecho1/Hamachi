import React, {useState} from 'react'
import axios from 'axios'

const GroupForm = (props) => {

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
        </>
    )
}

export default GroupForm