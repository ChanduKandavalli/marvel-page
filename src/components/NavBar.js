import React, { Component } from 'react'
export class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" alt="" width="150px"/>
                        </a>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">CHARACTERS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">COMICS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">STORIES</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;
