import React,{useState} from 'react'
import './App.css'
import Table from './components/Table'
import data from './utils/data.json'
const App = () => {

  const [state,setState] = useState(data)
  return (
    <div className='main__container'>
      <div className='header'>
        ChefKart Assignment
      </div>
      <Table state={state} setState={setState}/>
      
    </div>
  )
}

export default App