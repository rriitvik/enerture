import React from 'react'
import {useParams} from 'react-router-dom'
export default function Intern() {
  const {internid} = useParams()
  return (
    <div className=" my-4 text-center bg-yellow-400 text-white text-2xl">
      Intern: {internid}
    </div>
  )
}
