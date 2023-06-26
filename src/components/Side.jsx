import React from 'react'
import "../style/Side.css"

const Side = ({toggle}) => {
  return (
    <div className={`side-bar ${toggle?"move":"notmove"}`}>Side</div>
  )
}

export default Side