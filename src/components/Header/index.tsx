import React, { Fragment, useState } from "react";

export default function Header({ children }) {
    return (
        <div >
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">Navbar</a>
                <form style={{ display: 'flex', flexDirection: 'row' }}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>

            {/* <div className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
                <a className="navbar-brand mr-0 mr-md-2" href="/" aria-label="Bootstrap"></a>

                <div className="navbar-nav-scroll">
                    <ul className="navbar-nav bd-navbar-nav flex-row">
                        <li className="nav-item">
                            <a className="nav-link " href="/" >Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/docs/4.0/getting-started/introduction/" >Documentation</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/docs/4.0/examples/">Examples</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://themes.getbootstrap.com/" target="_blank" rel="noopener">Themes</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="https://expo.getbootstrap.com/" target="_blank" rel="noopener">Expo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://blog.getbootstrap.com/" target="_blank" rel="noopener">Blog</a>
                        </li>
                    </ul>
                </div>

                <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                    <li className="nav-item dropdown">
                        <a className="nav-item nav-link dropdown-toggle mr-md-2" href="#" id="bd-versions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            v4.0
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="bd-versions">
                            <a className="dropdown-item" href="/docs/4.1/">Latest (v4.1.x)</a>
                            <a className="dropdown-item active" href="/docs/4.0/">v4.0.0</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="https://v4-alpha.getbootstrap.com/">v4 Alpha 6</a>
                            <a className="dropdown-item" href="https://getbootstrap.com/docs/3.3/">v3.3.7</a>
                            <a className="dropdown-item" href="https://getbootstrap.com/2.3.2/">v2.3.2</a>
                        </div>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link p-2" href="https://github.com/twbs/bootstrap" target="_blank" rel="noopener" aria-label="GitHub">
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link p-2" href="https://twitter.com/getbootstrap" target="_blank" rel="noopener" aria-label="Twitter">
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link p-2" href="https://bootstrap-slack.herokuapp.com" target="_blank" rel="noopener" aria-label="Slack">
                        </a>
                    </li>
                </ul>

                <a className="btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3" href="https://github.com/twbs/bootstrap/archive/v4.0.0.zip">Download</a>
            </div> */}
            {children}
        </div>
    )
}