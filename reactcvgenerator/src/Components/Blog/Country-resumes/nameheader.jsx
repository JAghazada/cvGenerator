import React from 'react'

function Nameheader({title,ek}) {
    return (
        <>
            <div className="row " style={{backgroundColor:"rgba(107,107,107,0.1)",height:300}}>
                <div className="col-12 d-flex justify-content-center align-items-center">
                <div className="mt-3">
                    <p className="text-center col-9 h2" style={{margin:"0 auto",fontSize:50,fontFamily:"'Roboto',sans-serif",fontWeight:700}}>{title} cv xüsusiyyətləri və tələbləri</p>
                    <p className="text-center" style={{fontSize:22,color:"rgb(107,107,107)"}}>{title}{ek} iş axtarırsınız?Cv göndərmədən öncə bu məqaləni oxuyun.</p>
                </div>
                </div>
            </div>
        </>
    )
}

export default Nameheader
