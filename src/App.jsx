import { useState } from 'react'
import './App.css'
import Head from './components/Head'
import Map from './components/Map'
import Display from './components/Display'
import { MyContext } from './stateManagement/MyContext'
import MyProvider from './stateManagement/MyProvider'


function App() {

  return (
    <>
      <div>
        <MyProvider>

          <Head/>
          <Display/>
          <Map/>
        </MyProvider>
      </div>
    </>
  )
}

export default App
