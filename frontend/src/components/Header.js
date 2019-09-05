import React, { Component } from 'react'
import { render } from 'react-dom'

class Header extends Component{
    render(){
        return(
            <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <a class="navbar-brand" href="#">DQ</a>
            </nav>
        )
    }
}

export default Header;