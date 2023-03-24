import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("https://api.bakai.store/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      <h1 className='item' style={{fontSize: '20px'}}>APP</h1>
      <h2 className='item'>Bakai Bank 1bililion dollars</h2>

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