import React from 'react'

export default function Main({h:head,p:par,children}) {
  return (
    <div>
      <div>
        {children}
        <h1>
            {head}
        </h1>
        <p>
            {par}
        </p>
      </div>
    </div>
  )
}
