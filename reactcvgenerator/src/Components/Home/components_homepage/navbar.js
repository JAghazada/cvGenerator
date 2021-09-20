import { useHistory } from "react-router"

const Navbar = () => {
  const history = useHistory()

    return(
        <div className="border " >



            <nav style={{backgroundColor:"#f8f9fa"}} className="navbar navbar-expand-lg navbar-light bg-light ">
  <a className="navbar-brand font-weight-bold " href="/">CVmaker</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item active mx-3">
        <a className="nav-link" href="/">Ana səhifə <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active mx-3">
        <a className="nav-link" href="/guide">İp ucları və məsləhətlər <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active mx-3">
        <a className="nav-link" href="/aboutus">Haqqımızda <span className="sr-only">(current)</span></a>
      </li>
      
    </ul>
    <form className="form-inline my-2 my-lg-0 d-flex justify-content-center">
        <button className="btn border-primary   my-2 my-sm-0 mr-4 text-primary " type="button" onClick={()=>{
          history.push('/cv')
        }}>CV yarat</button>
      <button className="btn btn-primary  my-2 my-sm-0 text-light" type="button"onClick={()=>{
        history.push('/login')
      }} >Daxil ol</button>
    </form>
  </div>
</nav>



        </div>
    )
}

export default Navbar