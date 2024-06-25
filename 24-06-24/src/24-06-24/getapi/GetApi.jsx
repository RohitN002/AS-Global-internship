import React, { useEffect, useState } from 'react'
import axios from 'axios';
const GetApi = () => {
    
    const [data,setData]=useState([])
    
const api = `https://jsonplaceholder.typicode.com/todos`
    useEffect(()=>{
const fetchData = async()=>{
    try{

const response = await axios.get(api)
setData(response.data)
    }catch(err){
        throw err
    }
} 
fetchData()
    },[])
console.log(data.completed)
  return (
    
<div >
      <h1 className='text-secondary'>Fetched Data</h1>
      <table className='table table-bordered' >
        <thead className='thead-dark'>
          <tr>
            
            <th>ID</th>
            <th>title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {data.map((todo)=>(
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed == true ? "true" : "false"}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetApi