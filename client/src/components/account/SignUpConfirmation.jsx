import React from 'react';


const Confirm = (props) => {
  return (
    <div>
      <p>{props.firstName}</p>
      <p>{props.lastName}</p>
      <p>{props.email}</p>
      <p>{props.phone}</p>
      <p>{props.password}</p>
      <p>{props.password_confirmation}</p>
    </div>
  )
}
export default Confirm