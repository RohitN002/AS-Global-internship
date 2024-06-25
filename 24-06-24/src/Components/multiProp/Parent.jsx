import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import Child3 from './Child3'

const Parent = () => {
    const value = {
        name:"Rohit",
        company:"AS Global",
        city:"Coimbatore"
    }
  return (
    <div>
        <Child1 value={value}/>
        <Child2 value={value}/>
        <Child3 value={value}/>
    </div>
  )
}

export default Parent