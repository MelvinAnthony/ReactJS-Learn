import React from 'react'


//function User(props) {
function User({name,age,phone,email}) {
  return (
/*     <>
      <h1>{props.name}</h1>   
      <h2>{props.age}</h2> 
      <h2>+91 {props.phnumber}</h2>
      <h2>{props.email}</h2>
    </> */

// DeStructuring
    <>
      <h1>{name}</h1>   
      <h2>{age}</h2> 
      <h2>+91 {phone}</h2>
      <h2>{email}</h2>    
    </>


    
  )
}

export default User
