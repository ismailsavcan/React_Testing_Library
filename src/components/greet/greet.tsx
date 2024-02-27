import React from 'react'
import { GreetProps } from './greet.types';


const Greet = (props:GreetProps) => {
  return (
    <div>Hello {props.name ? props.name : "Guest"}</div>
  )
}

export default Greet;