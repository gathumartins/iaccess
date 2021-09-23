import React from 'react';
import './Header.css';
import { Link } from 'gatsby';
import TopNav from './TopNav';
import { FaBars } from 'react-icons/fa'
import { IoMdHelpBuoy } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
function Header() {
    return (
        <header className="myNav" >
            <nav className="navbar navbar-expand-lg navbar-light bg-light sNav">
                <div className="container-fluid container-lg sNavInn">
                    <Link to="/" className="navbar-brand mx-auto d-none d-sm-none d-md-block navLogo">

                    </Link>
                    <button className="navbar-toggler myHum" type="button" data-bs-toggle="offcanvas" data-bs-target="#mainNav" aria-controls="mainNav">
                        <i> <FaBars /></i>
                    </button>
                    <div className="navbar-collapse d-none d-lg-block">
                        <TopNav />
                    </div>
                    {/* Mobile Navigation*/}
                    <div className="offcanvas offcanvas-start d-lg-none" data-bs-scroll="true" tabIndex="-1" id="mainNav" aria-labelledby="mainNav">
                        <div className="offcanvas-header mobileMenuInn">
                            <Link to="/" className="navbar-brand mobilelogo d-block d-sm-block d-md-none">
                            </Link>
                            <div className="myClose ml-auto" data-bs-dismiss="offcanvas"><IoCloseSharp /></div>
                        </div>
                        <div className="offcanvas-body">
                            <TopNav />
                        </div>
                    </div>
                    <ul className="rightCont">
                        <li className="rightmenu">
                            <Link to="/help"><IoMdHelpBuoy /></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
