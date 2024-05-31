
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
const [user, setUser]= useState([]);
const [name, setName]=useState('');
const [pass, setPass]=useState('');

useEffect(()=>{
  axios('http://localhost:4000/users')
   .then((data)=>setUser(data.data))
},[user])

const handleSubmit =  () =>{
  axios.post('http://localhost:4000/users',{
    name:name ,
    password: pass
  })
}

  return (
    <div>
      <div>
        <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder='password' onChange={(e)=>setPass(e.target.value)}/>
        <button onClick={handleSubmit}> Submit</button>
      </div>
     {
      user.map((item, i)=>(
        <div key={i}>
          <h1>{item.name} </h1>
          <p>{item.password} </p>
        </div>
      ))
     }
    </div>
  )
}

export default App
