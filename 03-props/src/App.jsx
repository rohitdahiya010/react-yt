import React from 'react'
import Card from './components/card'

const App = () => {
  return (
   <div className="parent">
    <Card user = 'Rohit Dahiya' age={23}/>
    <Card user='Harsh' age={22} />
   </div>
  )
}

export default App

