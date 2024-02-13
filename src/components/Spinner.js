import React from 'react'

export default function Spinner() {
  return (
    <div>
        <div className="d-flex justify-content-center myspinner" >
            <div className="spinner-border" style={{width: "4rem", height: "4rem"}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
  )
}
