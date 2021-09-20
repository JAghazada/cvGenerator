import React from 'react'
import { Link } from '@material-ui/core'
import '../css/style.css'
function Resumenow() {
    const css = {
        "width":"100%",
        "height":"250px",
        "backgroundColor":"#ededed"

    }
    
    return (
        <section className="row mt-3 " style={css}>
            <div className="d-flex col-12 justify-content-center align-itmes-center">
                <div>
                    <p className="text-center mt-3 rnf">Bu gün mükəmməl bir CV yaradın</p>
                    <p className="rnga mt-3">İşə götürəcəyiniz bir CV ilə xəyal etdiyiniz işi qurun.</p>
                <div className="get-started col-3"><Link href="/" style={{color:"#ededed",textDecoration:"none"}}><div className="text-center">İndi başla</div></Link></div>
                </div>
            </div>
        </section>
    )
}

export default Resumenow
