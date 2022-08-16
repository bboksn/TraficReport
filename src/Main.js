import React from 'react'
import conditions from './Conditions'
import Inputs from './Inputs'

export default function Main({setToFrom}) {
  return (
    <>
    <div>Main</div>
    <Inputs setToFrom={setToFrom}></Inputs>
    </>
  )
}
