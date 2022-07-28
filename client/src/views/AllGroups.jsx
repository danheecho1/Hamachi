import React, {useState} from 'react'

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