import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import GroupForm from '../components/GroupForm'
import GroupList from '../components/GroupList'

const AllGroups = (props) => {

    const [whenSubmitted, setWhenSubmitted] = useState('false')

    return (
        <>
            <GroupForm whenSubmitted={whenSubmitted} setWhenSubmitted={setWhenSubmitted} />
            <hr/>
            <GroupList whenSubmitted={whenSubmitted} setWhenSubmitted={setWhenSubmitted} />
        </>
    )
}

export default AllGroups