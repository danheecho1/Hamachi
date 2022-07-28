import './App.css';
import AllGroups from './views/AllGroups'
import GroupDetail from './views/GroupDetail';
import Persons from './components/Persons'
import Dashboard from './views/Dashboard'
import SignIn from './views/SignIn';

import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'


function App() {
  const [whenSubmitted, setWhenSubmitted] = useState('false')

  return (
    <div className="App">
      <Routes>
        <Route path ="/" element = {<SignIn />} />
        <Route path ="/dashboard" element = {<Dashboard />} />
        <Route path="/api/groups" element={<AllGroups />} />
        <Route path="/api/groups/:groupId" element={<GroupDetail />} />
        <Route path="/api/groups/:groupId/persons" element={<Persons />} />
      </Routes>
    </div>
  );
}

export default App;
