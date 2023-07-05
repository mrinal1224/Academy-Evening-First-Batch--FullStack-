import React from 'react'

function UserProfile({name ,age , occupation}) {

    // const {name , age , occupation} = props // destruturing

  return (
    <div>
        <h3>Name : {name} , Age : {age} , Occupation :{occupation}</h3>
    </div>
  )
}

export default UserProfile