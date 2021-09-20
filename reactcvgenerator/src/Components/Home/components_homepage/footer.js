

export default function Footer({cl}){
    if(cl){
        return (
            <div  style={{minHeight:"25vh",backgroundColor:"#007"}} className="container-fluid  text-light row justify-content-around m-0 p-0">
            <div  className=" col-md-4  col-sm-6 col-7 row align-items-center justify-content-center ">
            <h1>CVmaker</h1>
            </div>
            <div   className=" col-md-3  col-sm-5 col-8 ">
                <h3 className="text-center pt-3">Əlaqə</h3>
                <p>+994 50 777 77 77</p>
                <p>+994 55 632 12 23</p>
                <p>+994 70 567 55 45</p>
            </div>
        <p className="m-0 py-3 text-center col-12 ">© CVmaker.az  Bakı, Azərbaycan. Müəllif hüquqları qorunur.</p>
        </div>
        )
    }
    return(
        <div style={{minHeight:"25vh"}} className="container-fluid bg-primary text-light row justify-content-around m-0 p-0">
            <div  className=" col-md-4  col-sm-6 col-7 row align-items-center justify-content-center ">
            <h1>CVmaker</h1>
            </div>
            <div   className=" col-md-3  col-sm-5 col-8 ">
                <h3 className="text-center pt-3">Əlaqə</h3>
                <p>+994 50 777 77 77</p>
                <p>+994 55 632 12 23</p>
                <p>+994 70 567 55 45</p>
            </div>
        <p className="m-0 py-3 text-center col-12 ">© CVmaker.az  Bakı, Azərbaycan. Müəllif hüquqları qorunur.</p>
        </div>
    )
}