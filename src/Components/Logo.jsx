import React from 'react'

export default function Logo() {
    const css = {
        "font-size": "40px",
        "position": "relative",
        "left": "0",
        "top": "0",
        "z-index": "100",
        "color":"#000"
    }
    return (
        <div>
            <h1 style ={css}>Logo</h1>
        </div>
    )
}
