import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const navf=(()=>{
    console.error("hii")
    setTimeout(props.setProgress(0),50);
 })
  const navload=(async()=>{
    await props.setProgress(100);
    setTimeout(navf,600)
    
 })

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{"position":"fixed","width":"100%","z-index":"2","marginTop":"-15px"}}>
    <a class="navbar-brand" href="/">Mallify</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class={`nav-item active`}>
          <Link class="nav-link" to="/" onClick={navload}>Home <span class="sr-only">(current)</span></Link>
        </li>
        <li class={`nav-item`}>
          < Link class="nav-link" to="/about" onClick={navload} >About</Link>
          {navload}
        </li>
        <li class={`nav-item`}>
          < Link class="nav-link" to="/clothes"  onClick={navload}>Clothes</Link>
          {navload}
        </li>
        <li class="nav-item">
          < Link class={`nav-link`} to="/electronics" onClick={navload}>Electronics</Link>
        </li>
        <li class="nav-item">
          < Link class={`nav-link`} to="/medicines" onClick={navload}>Medicines</Link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  )
}

export default Navbar
