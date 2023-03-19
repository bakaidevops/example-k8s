import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("http://api.bakai.store/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      <h1 className='item' style={{fontSize: '20px'}}>App</h1>
      <h2 className='item'>Here new featire check</h2>
      <h2 className='item'>Second new feature 334</h2>

      {(typeof backendData.users === "undefined") ? (
        <p className='item'>Loading...</p>
      ) : (
         backendData.users.map((user, i) => (
          <div className='our-team'>
             <p className='item' key={i}>{user}</p>
          </div>
         ))
      )}
    </div>
  )
}

export default App