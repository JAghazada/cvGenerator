import React from 'react'
const css = {
    "font-size": "40px",
    "position": "relative",
    "right": "0",
    "top": "0",
    "z-index": "100",
    "float": "right",
    "color":"#000"
}
export default function Text() {
    return (
        <div >
            <i class="fas fa-times" style={css}></i>
        </div>
    )
}
