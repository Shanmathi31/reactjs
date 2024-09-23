import React from 'react'
import logo from './React logo.png';
import './Navbar.css';


export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <img class="navbar-brand" src={logo} alt=""></img>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto gap-3">
              <li class="nav-item dropdown" id='drop'>
                <a class="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Home <span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                  </svg></span>
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">IT startup</a></li>
                  <li><a class="dropdown-item" href="#">IT startup Two</a></li>
                  <li><a class="dropdown-item" href="#">IOT</a></li>
                  <li><a class="dropdown-item" href="#">Hosting</a></li>
                  <li><a class="dropdown-item" href="#">Machine Learning</a></li>
                  <li><a class="dropdown-item" href="#">Machine Learning 2</a></li>
                  <li><a class="dropdown-item" href="#">Bigdata Analytcs</a></li>
                  <li><a class="dropdown-item" href="#">Digital Agency</a></li>
                  <li><a class="dropdown-item" href="#">Digital Agency Portfolio</a></li>
                  <li><a class="dropdown-item" href="#">Pc Repair</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown" id='drop'>
                <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About  <span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                  </svg></span>
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">About Style 1</a></li>
                  <li><a class="dropdown-item" href="#">About Style 2</a></li>
                  <li><a class="dropdown-item" href="#">About Style 3</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown" id='drop'>
                <a class="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages <span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                  </svg></span>
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Features</a></li>
                  <li><a class="dropdown-item" href="#">Services</a></li>
                  <li><a class="dropdown-item" href="#">Feedback</a></li>
                  <li><a class="dropdown-item" href="#">Project</a></li>
                  <li><a class="dropdown-item" href="#">Team</a></li>
                  <li><a class="dropdown-item" href="#">Pricing</a></li>
                  <li><a class="dropdown-item" href="#">User</a></li>
                  <li><a class="dropdown-item" href="#">FAQ</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown" id='drop'>
                <a class="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop <span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                  </svg></span>
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Shop</a></li>
                  <li><a class="dropdown-item" href="#">Checkout</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown" id='drop'>
                <a class="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Blog   <span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                  </svg></span>
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Blog Grid</a></li>
                  <li><a class="dropdown-item" href="#">Blog Grid 2</a></li>
                  <li><a class="dropdown-item" href="#">Blog Grid 3</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown" id='drop'>
                <a class="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Contact
                </a>

              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2 w-50 text-center" type="text" placeholder="Support" ></input>
              <button class="btn btn-outline-success" type="submit">Login</button>
            </form>
          </div>
        </div>
      </nav>


      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='start'>
              <div className='text text-start  w-100'>
                <p>Secure IT Solutions <br></br> for a more secure <br></br> environment</p>
              </div>
              <div className='text1 text-start'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br></br> eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis <br></br> ipsum suspendisse ultrices gravida
              </div>
              <div className='text2 text-start mt-5 mx-5'>
                    <button type='submit'> GetStart </button>
              </div>
            </div>
          </div>

        </div>

      </div>



    </div>
  )
}
