import React, { Component } from "react";
import { Link } from "react-router-dom";
import './LeftNav.css'

class Leftnav extends Component {
    render() {
        return (
            <div
                className="scroll-bar bg-blue-gradiant sidebar-sticky"
                style={{ paddingTop: "30px" }}
            >
                <div className="container ps-0 pe-0" >
                    <div id="nav-content" className="nav-content " style={{ lineHeight: "50px" }} >

                        <div className="avatar"></div>

                        <div id="nav-heading" className="text-heading " >
                            MENU
                        </div>
                        <ul className="mb-1 top-content" >
                            <li className="logo d-none d-xl-block d-lg-block"></li>
                            <li>
                                <Link to="/" className="nav-content-bttn open-font  h-auto pt-2 pb-2">
                                    <i className="btn-round-md bg-white me-3"></i>
                                    <span className="text-content">Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/defaultvideo"
                                    className="nav-content-bttn open-font  h-auto pt-2 pb-2"
                                >
                                    <i className="btn-round-md bg-white  me-3"></i>
                                    <span className="text-content">Orders</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/defaultstorie"
                                    className="nav-content-bttn open-font h-auto pt-2 pb-2"
                                >
                                    <i className="btn-round-md bg-white me-3"></i>
                                    <span className="text-content">Menu</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/defaultgroup"
                                    className="nav-content-bttn open-font h-auto pt-2 pb-2"
                                >
                                    <i className="btn-round-md bg-white  me-3"></i>
                                    <span className="text-content">Review</span>
                                </Link>
                            </li>
                        </ul>
                        <div id="nav-heading" className="nav-caption text-heading">
                            <span></span> OTHERS
                        </div>
                        <ul className="mb-1">
                            <li className="logo d-none d-xl-block d-lg-block"></li>
                            <li>
                                <Link
                                    to="/defaultsettings"
                                    className="nav-content-bttn open-font h-auto pt-2 pb-2"
                                >
                                    <i className="btn-round-md bg-white  me-3"></i>
                                    <span className="text-content">Settings</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/defaultanalytics"
                                    className="nav-content-bttn open-font h-auto pt-2 pb-2"
                                >
                                    <i className="btn-round-md bg-white  me-3"></i>
                                    <span className="text-content">Payment</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/defaultmessage"
                                    className="nav-content-bttn open-font h-auto pt-2 pb-2"
                                >
                                    <i className="btn-round-md bg-white  me-3"></i>
                                    <span className="text-content">Accounts</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/defaultmessage"
                                    className="nav-content-bttn open-font h-auto pt-2 pb-2"
                                >
                                    <i className="btn-round-md bg-white  me-3"></i>
                                    <span className="text-content">Help</span>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        );
    }
}

export default Leftnav;
