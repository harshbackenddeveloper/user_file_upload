import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Header({ onToggleSidebar }) {
    const navigate = useNavigate();

    const LogoutUser = () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("User_Role");
        toast.success('logout successfully')
        navigate('/');
    }
    return (
        <>
            <header className="app-header">
                <div className="main-header-container container-fluid">
                    <div className="header-content-left">

                        <div className="header-element">
                            <button
                                aria-label="Hide Sidebar"
                                className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle border-0 d-block d-md-none bg-transparent"
                                data-bs-toggle="sidebar"
                                onClick={onToggleSidebar}
                            >
                                <span />
                            </button>
                        </div>
                    </div>
                    <div className="header-content-right">
                        <div className="header-element header-search d-lg-none d-block">
                            <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="header-link"
                                data-bs-toggle="modal"
                                data-bs-target="#searchModal"
                            >
                                <i className="fe fe-search header-link-icon" />
                            </a>
                        </div>
                        <div className="header-element cart-dropdown">
                            <div
                                className="main-header-dropdown dropdown-menu dropdown-menu-end"
                                data-popper-placement="none"
                            >
                            </div>
                        </div>

                        <div className="header-element message-dropdown">
                            <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="header-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside"
                                id="messageDropdown2"
                                aria-expanded="false"
                            >

                            </a>
                        </div>
                        <div className="header-element main-profile-user">
                            {/* Start::header-link|dropdown-toggle */}
                            <a
                                href="#"
                                className="header-link dropdown-toggle"
                                id="mainHeaderProfile"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside"
                                aria-expanded="false"
                            >
                                <div className="d-flex align-items-center">
                                    <div className="me-xxl-2 me-0">
                                        <img
                                            src="../assets/images/faces/9.jpg"
                                            alt="img"
                                            width={32}
                                            height={32}
                                            className="rounded-circle"
                                        />
                                    </div>
                                    <div className="d-xxl-block d-none my-auto">
                                        <h6 className="fw-semibold mb-0 lh-1 fs-14">Admin</h6>
                                    </div>
                                </div>
                            </a>
                            <ul
                                className="main-header-dropdown dropdown-menu pt-0 header-profile-dropdown dropdown-menu-end"
                                aria-labelledby="mainHeaderProfile"
                            >

                                <li className="dropdown-item " style={{ cursor: 'pointer' }} onClick={LogoutUser}>
                                    <i className="fe fe-info fs-18 me-2 text-primary" />
                                    Log Out
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </header>

        </>
    )
}
