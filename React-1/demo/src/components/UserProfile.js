import React from 'react'

function UserProfile(props) {

    console.log(props)
  return (
    <div>
        <h3>Name : {props.name} , Age : {props.age} , Occupation :{props.occupation}</h3>
    </div>
  )
}

export default UserProfile