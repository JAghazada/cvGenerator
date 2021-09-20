import { useHistory } from "react-router"

export function RightMain (){   
    const history = useHistory()


    return(
        <div  style={{width:"65vh",minHeight:"50vh"}} className="my-auto pt-3 col-12 col-md-6 col-lg-5">
            
            <h1 className="font-weight-bold h1">Bir dəqiqə içində ideal CV-in hazir olsun.</h1>
            <p className="">Müxtəlif CV nümunələri , peşəkar dizayn , CV və interview'a  köməkçi bloqlar , rahat istifadə .  </p>
            <button className="btn btn-primary w-50 mt-3 h1" onClick={()=>{
          history.push('/cv')
        }}>CV yarat</button>
        </div>
    )
 }