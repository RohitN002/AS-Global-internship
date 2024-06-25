import React from 'react'
import GetProp from './GetProp'

function Prop() {

    const value ={
        name:'selva',
        age:'24',
        company:'as'
    }
  return (
    <div>
   
   <GetProp value={value}/>

    </div>
  )
}

export default Prop