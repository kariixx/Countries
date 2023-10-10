import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Kyrgyzstan from './components/Kyrgyzstan/Kyrgyzstan'
import France from './components/France/France'
import Switzerland from './components/Switzerland/Switzerland'
import Italy from './components/Italy/Italy'
import Contacts from './components/Contacts/Contacts'

export default function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Kyrgyzstan/>
      <France/>
      <Switzerland/>
      <Italy/>
      <Contacts/>
    </div>
  )
}
