import React, { useEffect, useState } from 'react'
import './App.css'
import { type Sub } from './types/types'
import { INITIAL_STATE } from './consts'
import List from './components/List'
import Form from './components/Form'

const App = () => {
  const [subs, setSubs] = useState<Array<Sub>>([])

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])
  return (
    <div className='App'>
      <h1>Midu subs</h1>
      <List subs={subs} />
      <Form />
    </div>
  )
}

export default App
