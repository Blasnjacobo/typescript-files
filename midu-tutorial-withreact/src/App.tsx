import React, { useEffect, useState, useRef } from 'react'
import './App.css'
import { type SubsResponseFromApi, type Sub } from './types/types'
// import { INITIAL_STATE } from './consts'
import List from './components/List'
import Form from './components/Form'

const App = () => {
  const [subs, setSubs] = useState<Array<Sub>>([])
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchSubs = () : Promise<SubsResponseFromApi> => {
      // Para hacer el fetch es necesario correr el servidor del http://localhost:3001/sub primero usando node server.js
      return fetch('http://localhost:3001/sub').then(res => res.json())
    }
    const mapFromApiToSubs = (apiResponse: SubsResponseFromApi):
    Array<Sub> => {
      return apiResponse.map(subFromApi => {
        const {
          months: subMonths,
          profileUrl: avatar,
          nick,
          description
        } = subFromApi
        return {
          nick,
          description,
          avatar,
          subMonths
        }
      })
    }
    fetchSubs()
      .then(mapFromApiToSubs)
      .then(setSubs)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }
  return (
    <div className='App' ref={divRef}>
      <h1>Midu subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  )
}

export default App
