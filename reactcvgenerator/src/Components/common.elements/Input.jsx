import React from 'react'

export default function Input() {
    const css = {
        display :"none",
        opacity :"0",
    }
    return (
        <div>
            <input disabled={true} value="token" style={css} />
        </div>
    )
}
