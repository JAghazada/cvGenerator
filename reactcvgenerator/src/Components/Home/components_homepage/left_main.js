import foto from '../../../images/home.png'
export function LeftMain (){


    return(
        <div style={{width:"65vh" ,minHeight:"50vh"}} className=" col-12 col-md-6  col-lg-5 d-flex justify-content-center aligin-items-center"> 
            <img width="100%" src={foto}></img>
        </div>
    )
}