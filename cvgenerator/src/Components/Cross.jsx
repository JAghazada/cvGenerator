import React from 'react'
const css = {
    "fontSize": "40px",
    "position": "relative",
    "right": "0",
    "top": "0",
    "zIndex": "100",
    "float": "right",
    "color":"#000"
}
export default function Text() {
    return (
        <div >
            <i className="fas fa-times" style={css}></i>
        </div>
    )
}
