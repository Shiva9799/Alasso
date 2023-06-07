import axios from '../axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './admin-css/Portal.css'
import CoursePost from './CoursePost'
import NptelPost from './NPTELpost'
import Uploader from './Uploader'
import AddHelp from './AddHelp'
import AddDeveloper from './AddDeveloper'
import { Navigate, useNavigate } from 'react-router-dom'

const AdminPortal = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState('');
  

  useEffect(() => {
    const localUser = localStorage.getItem('user')
    if (localUser) {
      const user = JSON.parse(localStorage.getItem('user'))
      console.log(user.role);
      setuser(user.username)
      if (user.role !== 'admin') {
        navigate('/admin-alert-404')
      }
    } else {
      navigate('/admin-alert-404')
    }
  }, [navigate])

  const [component, setComponent] = useState('')

  return (
    <div className='admin-cont'>
      <div className='atop'>
        <div className='ap'>Admin Portal</div>
        <div className='admin'>
          <img src='/icons/585e4bcdcb11b227491c3396.png' alt='' />
          <div>{user}</div>
        </div>
      </div>

      <div className='bottom'>
        <div className='admin-left'>
          <div className='head'>DOABLES</div>
          <div className='admin-btn'>
            <button onClick={() => setComponent('files')}> Add Files</button>
            <button onClick={() => setComponent('nptel')}> Add NPTEL</button>
            <button onClick={() => setComponent('course')}> Add Course</button>
            <button onClick={() => setComponent('help')}> Add Help</button>
            <button onClick={() => setComponent('developer')}> Add Developer</button>
          </div>
        </div>
        <div className='admin-right'>
          {component === 'files' ? <Uploader portalFor={component} /> : null}
          {component === '' ? <div style={{textAlign:'center', background:'linear-gradient(90.31deg, #0E0E0E 0.24%, #1F111B 19.22%, #391B34 33.73%, #662259 60.69%, #73235A 78.84%, #E1577B 99.79%)', fontSize:'xx-large', color:'white', height:'44vh'}}> Welcome </div> : null}
          {component === 'nptel' ? <NptelPost portalFor={component} /> : null}
          {component === 'course' ? <CoursePost portalFor={component} /> : null}
          {component === 'help' ? <AddHelp portalFor={component} /> : null}
          {component === 'developer' ? <AddDeveloper portalFor={component} /> : null}
        </div>
      </div>
    </div>
  )
}

export default AdminPortal
