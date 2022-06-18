import React from 'react';

import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
    
        <>  
            < nav className = "navbar navbar-expand-sm bg-light navbar-dark" >
                    <ul className = "navbar-nav" >
                        <li className = "nav-item- m-1" >
                            <Link className = "btn btn-light btn-outline-primary" to = "/home" >
                                Home
                            </Link >
                        </li >
                        < li className = "nav-item- m-1" >
                            <Link className = "btn btn-light btn-outline-primary" to = "./pompa" >
                                Pompa
                            </Link >
                        </li >
                        < li className = "nav-item- m-1" >
                            <Link className = "btn btn-light btn-outline-primary" to = "./garazha" >
                                Garazha
                            </Link >
                        </li >
                    </ul >
            </nav >

        </>

    )

}