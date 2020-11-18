import React from 'react';
import { Redirect } from 'react-router-dom'

const StricAcess = (props) => {

  const { username, password } = props.user;
  if (username === 'joao' && password === 1234) {
    return (
      <div>
        Welcome {this.props.user.username}!!
      </div>
    )
  }
  alert('Acess denied')
  return (
    <Redirect to="/" />
  )
}


export default StricAcess;