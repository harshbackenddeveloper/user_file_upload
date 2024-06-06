import React from 'react'
import { Link } from 'react-router-dom'
export default function Sidebar({ showSidebar, handleToggleSidebar }) {
    return (
        <>
            <aside className={`app-sidebar min-sidebar sticky sidebar ${showSidebar ? 'show' : ''}`} id="sidebar">
                <div className="main-sidebar-header">
                    <div className="header-logo d-flex justify-content-between align-items-center ali">
                        <h4 className="fw-bold">Image Upload</h4>
                        <button className='cross d-md-none d-block btn' onClick={handleToggleSidebar}>X</button>
                    </div>
                </div>
                <div className="main-sidebar" id="sidebar-scroll">
                    <nav className="main-menu-container nav nav-pills flex-column sub-open">
                        <div className="slide-left" id="slide-left">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#7b8191"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                            >
                                {" "}
                                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />{" "}
                            </svg>
                        </div>
                        <ul className="main-menu">
                            <li className="slide">
                                <Link to='/dashboard ' className="side-menu__item">
                                    <i className="fe fe-home side-menu__icon" />
                                    <span className="side-menu__label">Dashboard</span>
                                </Link>
                            </li>
                            <li className="slide">
                                <Link to='/createlink' className="side-menu__item">
                                    <i className="fe fe-home side-menu__icon" />
                                    <span className="side-menu__label">Link</span>
                                </Link>
                            </li>

                        </ul>
                        <div className="slide-right" id="slide-right">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#7b8191"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                            >
                                {" "}
                                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />{" "}
                            </svg>
                        </div>
                    </nav>
                </div>
            </aside>
        </>
    )
}
