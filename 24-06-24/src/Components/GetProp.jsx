import React from 'react'

function GetProp({value}) {
    console.log(value);
  return (
    <div>{value.name}</div>
  )
}

export default GetProp