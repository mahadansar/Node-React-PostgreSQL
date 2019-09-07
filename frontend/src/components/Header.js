import React, { Component } from 'react'
import { render } from 'react-dom'

class Header extends Component{
    render(){
        return(
            <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <a class="navbar-brand" href="#">Dragon Quest</a>
                <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Main</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Users</a>
          </li>
        </ul>
          <button class="btn btn-outline-success my-2 my-sm-0">Login</button>
        </div>
            </nav>
        )
    }
}

export default Header;