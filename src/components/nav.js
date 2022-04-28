import { BsFillDoorClosedFill,BsHouseFill } from "react-icons/bs";
import { GiCastle } from "react-icons/gi"

const Nav=()=> {
  return (
    <div >
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid" >
    <a class="navbar-brand" href="#"><GiCastle size={40} /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" style={{marginBottom:'-20px'}} id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item" hidden>
          <a class="nav-link" href="#">Article</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Article
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">New</a></li>
            <li><a class="dropdown-item" href="#">Search</a></li>
            <li><a class="dropdown-divider"></a></li>
            <li><a class="dropdown-divider" ></a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex">
        <div class="nav-item dropdown">
          <button class="btn btn-primary rounded-circle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
          <BsFillDoorClosedFill size={20} />
          
          </button>
          <ul class="dropdown-menu dropdown-menu-lg-end"  aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item " href="#">login</a></li>
          </ul>
        </div>
      </form>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Nav;
