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
                {/* Start::main-header-container */}
                <div className="main-header-container container-fluid">
                    {/* Start::header-content-left */}
                    <div className="header-content-left">
                        {/* Start::header-element */}
                        
                        {/* End::header-element */}
                        {/* Start::header-element */}
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
                        {/* End::header-element */}
                        {/* Start::header-element */}
                        <div className="main-header-center  d-none d-lg-block header-link">
                            <input
                                type="text"
                                className="form-control"
                                id="typehead"
                                placeholder="Search for results..."
                                autoComplete="off"
                            />
                            <button type="button" aria-label="button" className="btn pe-1">
                                <i className="fe fe-search" aria-hidden="true" />
                            </button>
                            <div id="headersearch" className="header-search">
                                <div className="p-3">
                                    <div className="">
                                        <p className="fw-semibold text-muted mb-2 fs-13">
                                            Recent Searches
                                        </p>
                                        <div className="ps-0">
                                            <a href="javascript:void(0)" className="search-tags">
                                                <i className="fe fe-search me-2" />
                                                People
                                                <span />
                                            </a>
                                            <a href="javascript:void(0)" className="search-tags">
                                                <i className="fe fe-search me-2" />
                                                Pages
                                                <span />
                                            </a>
                                            <a href="javascript:void(0)" className="search-tags">
                                                <i className="fe fe-search me-2" />
                                                Articles
                                                <span />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <p className="fw-semibold text-muted mb-3 fs-13">
                                            Apps and pages
                                        </p>
                                        <ul className="ps-0">
                                            <li className="p-1 d-flex align-items-center text-muted mb-3 search-app">
                                                <a
                                                    className="d-inline-flex align-items-center"
                                                    href="full-calendar.html"
                                                >
                                                    <i className="fe fe-calendar me-2 fs-14 bg-primary-transparent p-2 rounded-circle" />
                                                    <span>Calendar</span>
                                                </a>
                                            </li>
                                            <li className="p-1 d-flex align-items-center text-muted mb-3 search-app">
                                                <a
                                                    className="d-inline-flex align-items-center"
                                                    href="mail.html"
                                                >
                                                    <i className="fe fe-mail me-2 fs-14 bg-primary-transparent p-2 rounded-circle" />
                                                    <span>Mail</span>
                                                </a>
                                            </li>
                                            <li className="p-1 d-flex align-items-center text-muted mb-3 search-app">
                                                <a
                                                    className="d-inline-flex align-items-center"
                                                    href="buttons.html"
                                                >
                                                    <i className="fe fe-globe me-2 fs-14 bg-primary-transparent p-2 rounded-circle" />
                                                    <span>Buttons</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-3">
                                        <p className="fw-semibold text-muted mb-2 fs-13">Links</p>
                                        <ul className="ps-0 list-unstyled mb-0">
                                            <li className="p-1 align-items-center text-muted mb-1 search-app">
                                                <a href="javascript:void(0)" className="text-primary">
                                                    <u>http://spruko/spruko.com</u>
                                                </a>
                                            </li>
                                            <li className="p-1 align-items-center text-muted mb-0 pb-0 search-app">
                                                <a href="javascript:void(0)" className="text-primary">
                                                    <u>http://spruko/spruko.com</u>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="py-3 border-top px-0">
                                    <div className="text-center">
                                        <a
                                            href="javascript:void(0)"
                                            className="text-primary text-decoration-underline fs-15"
                                        >
                                            View all
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End::header-element */}
                    </div>
                    {/* End::header-content-left */}
                    {/* Start::header-content-right */}
                    <div className="header-content-right">
                        {/* Start::header-element */}
                        <div className="header-element header-search d-lg-none d-block">
                            {/* Start::header-link */}
                            <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="header-link"
                                data-bs-toggle="modal"
                                data-bs-target="#searchModal"
                            >
                                <i className="fe fe-search header-link-icon" />
                            </a>
                            {/* End::header-link */}
                        </div>
                        {/* Start::header-element */}
                        <div className="header-element cart-dropdown">
                            <div
                                className="main-header-dropdown dropdown-menu dropdown-menu-end"
                                data-popper-placement="none"
                            >
                                <div className="p-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="mb-0 fs-16 fw-semibold">My Shopping Cart</p>
                                        <span
                                            className="badge bg-danger-transparent fs-14"
                                            id="cart-data"
                                        >
                                            Hurry Up!
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <hr className="dropdown-divider" />
                                </div>
                                <ul className="list-unstyled mb-0" id="header-cart-items-scroll">
                                    <li className="dropdown-item">
                                        <div className="d-flex align-items-start cart-dropdown-item">
                                            <img
                                                src="../assets/images/ecommerce/orders/11.jpg"
                                                alt="img"
                                                className="avatar avatar-xl br-5 me-3"
                                            />
                                            <div className="flex-grow-1">
                                                <div className="d-flex align-items-start mb-0">
                                                    <div>
                                                        <a
                                                            className="mb-0 fs-13 text-dark fw-semibold"
                                                            href="cart.html"
                                                        >
                                                            Flower Pot for Home Decor
                                                        </a>
                                                        <div className="min-w-fit-content">
                                                            <span>
                                                                Status: <span className="text-success">In Stock</span>
                                                            </span>
                                                            <p className="fs-13 text-muted mb-0">Quantity: 01</p>
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto text-end d-flex fs-16">
                                                        <span className="fs-16 text-dark mb-1">$438</span>
                                                        <a
                                                            aria-label="anchor"
                                                            href="javascript:void(0);"
                                                            className="header-cart-remove dropdown-item-close btn"
                                                        >
                                                            <i className="ti ti-trash" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dropdown-item">
                                        <div className="d-flex align-items-start cart-dropdown-item">
                                            <img
                                                src="../assets/images/ecommerce/orders/1.jpg"
                                                alt="img"
                                                className="avatar avatar-xl br-5 me-3"
                                            />
                                            <div className="flex-grow-1">
                                                <div className="d-flex align-items-start mb-0">
                                                    <div>
                                                        <a
                                                            className="mb-0 fs-13 text-dark fw-semibold"
                                                            href="cart.html"
                                                        >
                                                            Black Digital Camera
                                                        </a>
                                                        <div className="min-w-fit-content">
                                                            <span>
                                                                Status: <span className="text-danger">Out Stock</span>
                                                            </span>
                                                            <p className="fs-13 text-muted mb-0">Quantity: 06</p>
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto text-end d-flex fs-16">
                                                        <span className="fs-16 text-dark mb-1">$867</span>
                                                        <a
                                                            aria-label="anchor"
                                                            href="javascript:void(0);"
                                                            className="header-cart-remove dropdown-item-close btn"
                                                        >
                                                            <i className="ti ti-trash" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dropdown-item">
                                        <div className="d-flex align-items-start cart-dropdown-item">
                                            <img
                                                src="../assets/images/ecommerce/orders/15.jpg"
                                                alt="img"
                                                className="avatar avatar-xl br-5 me-3"
                                            />
                                            <div className="flex-grow-1">
                                                <div className="d-flex align-items-start mb-0">
                                                    <div>
                                                        <a
                                                            className="mb-0 fs-13 text-dark fw-semibold"
                                                            href="cart.html"
                                                        >
                                                            Stylish Rockerz 255 Ear Pods
                                                        </a>
                                                        <div className="min-w-fit-content">
                                                            <span>
                                                                Status: <span className="text-success">In Stock</span>
                                                            </span>
                                                            <p className="fs-13 text-muted mb-0">Quantity: 05</p>
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto text-end d-flex fs-16">
                                                        <span className="fs-16 text-dark mb-1">$323</span>
                                                        <a
                                                            aria-label="anchor"
                                                            href="javascript:void(0);"
                                                            className="header-cart-remove dropdown-item-close btn"
                                                        >
                                                            <i className="ti ti-trash" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dropdown-item">
                                        <div className="d-flex align-items-start cart-dropdown-item">
                                            <img
                                                src="../assets/images/ecommerce/orders/12.jpg"
                                                alt="img"
                                                className="avatar avatar-xl br-5 me-3"
                                            />
                                            <div className="flex-grow-1">
                                                <div className="d-flex align-items-start mb-0">
                                                    <div>
                                                        <a
                                                            className="mb-0 fs-13 text-dark fw-semibold"
                                                            href="cart.html"
                                                        >
                                                            Women Party Wear Dress
                                                        </a>
                                                        <div className="min-w-fit-content">
                                                            <span>
                                                                Status: <span className="text-success">In Stock</span>
                                                            </span>
                                                            <p className="fs-13 text-muted mb-0">Quantity: 05</p>
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto text-end d-flex fs-16">
                                                        <span className="fs-16 text-dark mb-1">$867</span>
                                                        <a
                                                            aria-label="anchor"
                                                            href="javascript:void(0);"
                                                            className="header-cart-remove dropdown-item-close btn"
                                                        >
                                                            <i className="ti ti-trash" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="p-3 empty-header-item border-top d-flex">
                                    <a
                                        href="checkout.html"
                                        className="btn btn-primary btn-pill w-sm btn-sm  fs-16"
                                    >
                                        <i className="fe fe-check-circle me-2 d-inline-flex" />
                                        checkout
                                    </a>
                                    <h6 className="ms-auto fs-17 fw-semibold my-auto">Total: $6789</h6>
                                </div>
                                <div className="p-5 empty-item d-none">
                                    <div className="text-center">
                                        <span className="avatar avatar-xl avatar-rounded bg-warning-transparent">
                                            <i className="ri-shopping-cart-2-line fs-2" />
                                        </span>
                                        <h6 className="fw-bold mb-1 mt-3">Your Cart is Empty</h6>
                                        <span className="mb-3 fw-normal fs-13 d-block">
                                            Add some items to make me happy :)
                                        </span>
                                        <a
                                            href="products.html"
                                            className="btn btn-primary btn-wave m-1"
                                            data-abc="true"
                                        >
                                            continue shopping <i className="bi bi-arrow-right ms-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* End::main-header-dropdown */}
                        </div>
                        {/* End::header-element */}
                        {/* Start::header-element */}
                        <div className="header-element notifications-dropdown">
                            {/* Start::header-link|dropdown-toggle */}
                            <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="header-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside"
                                id="messageDropdown"
                                aria-expanded="false"
                            >
                                <i className="fe fe-bell header-link-icon" />
                                <span
                                    className="w-9 h-9 p-0 bg-success rounded-pill header-icon-badge pulse pulse-success"
                                    id="notification-icon-badge"
                                />
                            </a>
                            {/* End::header-link|dropdown-toggle */}
                            {/* Start::main-header-dropdown */}
                            <div
                                className="main-header-dropdown dropdown-menu dropdown-menu-end"
                                data-popper-placement="none"
                            >
                                <div className="p-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="mb-0 fs-17 fw-semibold">Notifications</p>
                                        <span
                                            className="badge bg-secondary-transparent"
                                            id="notifiation-data"
                                        >
                                            5 Unread
                                        </span>
                                    </div>
                                </div>
                                <div className="dropdown-divider" />
                                <ul className="list-unstyled mb-0" id="header-notification-scroll">
                                    <li className="dropdown-item">
                                        <div className="d-flex align-items-start">
                                            <div className="pe-2">
                                                <span className="avatar avatar-md bg-primary avatar-rounded">
                                                    <i className="fe fe-mail fs-18" />
                                                </span>
                                            </div>
                                            <div className="flex-grow-1 d-flex align-items-center my-auto">
                                                <div>
                                                    <p className="mb-0 fw-semibold">
                                                        <a href="notifications.html">New Application received</a>
                                                    </p>
                                                    <span className="text-muted fw-normal fs-12 header-notification-text">
                                                        3 days ago
                                                    </span>
                                                </div>
                                                <div className="ms-auto my-auto">
                                                    <a
                                                        aria-label="anchor"
                                                        href="javascript:void(0);"
                                                        className="min-w-fit-content text-muted me-1 dropdown-item-close1"
                                                    >
                                                        <i className="ti ti-x fs-16" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dropdown-item">
                                        <div className="d-flex align-items-start">
                                            <div className="pe-2">
                                                <span className="avatar avatar-md bg-secondary avatar-rounded">
                                                    <i className="fe fe-check-circle fs-18" />
                                                </span>
                                            </div>
                                            <div className="flex-grow-1 d-flex align-items-center my-auto">
                                                <div>
                                                    <p className="mb-0 fw-semibold">
                                                        <a href="notifications.html">Project has been approved</a>
                                                    </p>
                                                    <span className="text-muted fw-normal fs-12 header-notification-text">
                                                        2 hours ago
                                                    </span>
                                                </div>
                                                <div className="ms-auto my-auto">
                                                    <a
                                                        aria-label="anchor"
                                                        href="javascript:void(0);"
                                                        className="min-w-fit-content text-muted me-1 dropdown-item-close1"
                                                    >
                                                        <i className="ti ti-x fs-16" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dropdown-item">
                                        <div className="d-flex align-items-start">
                                            <div className="pe-2">
                                                <span className="avatar avatar-md bg-success avatar-rounded">
                                                    <i className="fe fe-shopping-cart fs-18" />
                                                </span>
                                            </div>
                                            <div className="flex-grow-1 d-flex align-items-center my-auto">
                                                <div>
                                                    <p className="mb-0 fw-semibold">
                                                        <a href="notifications.html">Your Product Delivered</a>
                                                    </p>
                                                    <span className="text-muted fw-normal fs-12 header-notification-text">
                                                        30 min ago
                                                    </span>
                                                </div>
                                                <div className="ms-auto my-auto">
                                                    <a
                                                        aria-label="anchor"
                                                        href="javascript:void(0);"
                                                        className="min-w-fit-content text-muted me-1 dropdown-item-close1"
                                                    >
                                                        <i className="ti ti-x fs-16" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dropdown-item">
                                        <div className="d-flex align-items-start">
                                            <div className="pe-2">
                                                <span className="avatar avatar-md bg-pink avatar-rounded">
                                                    <i className="fe fe-shopping-cart fs-18" />
                                                </span>
                                            </div>
                                            <div className="flex-grow-1 d-flex align-items-center my-auto">
                                                <div>
                                                    <p className="mb-0 fw-semibold">
                                                        <a href="notifications.html">Friend Requests</a>
                                                    </p>
                                                    <span className="text-muted fw-normal fs-12 header-notification-text">
                                                        10 min ago
                                                    </span>
                                                </div>
                                                <div className="ms-auto my-auto">
                                                    <a
                                                        aria-label="anchor"
                                                        href="javascript:void(0);"
                                                        className="min-w-fit-content text-muted me-1 dropdown-item-close1"
                                                    >
                                                        <i className="ti ti-x fs-16" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="p-3 empty-header-item1 border-top text-center">
                                    <a href="notifications.html" className="">
                                        View All Notifications
                                    </a>
                                </div>
                                <div className="p-5 empty-item1 d-none">
                                    <div className="text-center">
                                        <span className="avatar avatar-xl avatar-rounded bg-secondary-transparent">
                                            <i className="ri-notification-off-line fs-2" />
                                        </span>
                                        <h6 className="fw-semibold mt-3">No New Notifications</h6>
                                    </div>
                                </div>
                            </div>
                            {/* End::main-header-dropdown */}
                        </div>
                        {/* End::header-element */}
                        {/* Start::header-element */}
                        <div className="header-element message-dropdown">
                            {/* Start::header-link|dropdown-toggle */}
                            <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="header-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside"
                                id="messageDropdown2"
                                aria-expanded="false"
                            >
                                <i className="fe fe-message-square header-link-icon" />
                                <span
                                    className="w-9 h-9 p-0 bg-danger rounded-pill header-icon-badge pulse pulse-danger"
                                    id="message-icon-badge"
                                />
                            </a>
                            {/* End::header-link|dropdown-toggle */}
                            {/* Start::main-header-dropdown */}
                            <div
                                className="main-header-dropdown dropdown-menu dropdown-menu-end"
                                data-popper-placement="none"
                            >
                                <div className="p-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="mb-0 fs-17 fw-semibold">Messages</p>
                                        <span
                                            className="badge bg-secondary-transparent"
                                            id="message-data"
                                        >
                                            5 Unread
                                        </span>
                                    </div>
                                </div>
                                <div className="dropdown-divider" />
                                <ul className="list-unstyled mb-0" id="header-message-scroll">
                                    <li className="dropdown-item">
                                        <div className="d-flex align-items-start">
                                            <div className="pe-2">
                                                <img
                                                    src="../assets/images/faces/1.jpg"
                                                    alt="img"
                                                    className="avatar avatar-md avatar-rounded"
                                                />
                                            </div>
                                            <div className="w-100">
                                                <div className="flex-grow-1 d-flex align-items-centermy-auto">
                                                    <div>
                                                        <h6 className="mb-0 fw-semibold fs-14">
                                                            <a href="chat.html">Peter Theil</a>
                                                        </h6>
                                                    </div>
                                                    <div className="ms-auto text-end">
                                                        <p className="text-muted mb-0">6:45am</p>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 d-flex align-items-centermy-auto">
                                                    <div>
                                                        <span className="text-muted fw-normal fs-12">
                                                            Commented on file Guest list....
                                                        </span>
                                                    </div>
                                                    <div className="ms-auto text-end">
                                                        <a
                                                            aria-label="anchor"
                                                            href="javascript:void(0);"
                                                            className="min-w-fit-content text-muted me-1 dropdown-item-close2"
                                                        >
                                                            <i className="ti ti-x fs-16" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dropdown-item">
                                        <div className="d-flex align-items-start">
                                            <div className="pe-2">
                                                <img
                                                    src="../assets/images/faces/15.jpg"
                                                    alt="img"
                                                    className="avatar avatar-md avatar-rounded"
                                                />
                                            </div>
                                            <div className="w-100">
                                                <div className="flex-grow-1 d-flex align-items-centermy-auto">
                                                    <div>
                                                        <h6 className="mb-0 fw-semibold fs-14">
                                                            <a href="chat.html">Abagael Luth</a>
                                                        </h6>
                                                    </div>
                                                    <div className="ms-auto text-end">
                                                        <p className="text-muted mb-0">10:35am</p>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 d-flex align-items-centermy-auto">
                                                    <div>
                                                        <span className="text-muted fw-normal fs-12">
                                                            New Meetup Started......
                                                        </span>
                                                    </div>
                                                    <div className="ms-auto text-end">
                                                        <a
                                                            aria-label="anchor"
                                                            href="javascript:void(0);"
                                                            className="min-w-fit-content text-muted me-1 dropdown-item-close2"
                                                        >
                                                            <i className="ti ti-x fs-16" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="p-3 empty-header-item2 border-top text-center">
                                    <a href="chat.html" className="">
                                        View All Messages
                                    </a>
                                </div>
                                <div className="p-5 empty-item2 d-none">
                                    <div className="text-center">
                                        <span className="avatar avatar-xl avatar-rounded bg-danger-transparent">
                                            <i className="ri-message-2-line fs-2" />
                                        </span>
                                        <h6 className="fw-semibold mt-3">No New Messages</h6>
                                    </div>
                                </div>
                            </div>
                            {/* End::main-header-dropdown */}
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
                                        {/* <span class="op-7 fw-normal d-block fs-11 text-muted">Web Designer</span> */}
                                    </div>
                                </div>
                            </a>
                            {/* End::header-link|dropdown-toggle */}
                            <ul
                                className="main-header-dropdown dropdown-menu pt-0 header-profile-dropdown dropdown-menu-end"
                                aria-labelledby="mainHeaderProfile"
                            >
                                {/* <li className="drop-heading d-xxl-none d-block">
                                    <div className="text-center">
                                        <h5 className="text-dark mb-0 fs-14 fw-semibold">Admin</h5>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <a className="d-flex w-100" href="profile.html">
                                        <i className="fe fe-user fs-18 me-2 text-primary" />
                                        Profile
                                    </a>
                                </li>
                                <li className="dropdown-item">
                                    <a className="d-flex w-100" href="mail.html">
                                        <i className="fe fe-mail fs-18 me-2 text-primary" />
                                        Inbox <span className="badge bg-danger ms-auto">25</span>
                                    </a>
                                </li>
                                <li className="dropdown-item">
                                    <a className="d-flex w-100" href="mail-settings.html">
                                        <i className="fe fe-settings fs-18 me-2 text-primary" />
                                        Settings
                                    </a>
                                </li>
                                <li className="dropdown-item">
                                    <a className="d-flex w-100" href="chat.html">
                                        <i className="fe fe-headphones fs-18 me-2 text-primary" />
                                        Support
                                    </a>
                                </li> */}
                                <li className="dropdown-item " style={{ cursor: 'pointer' }} onClick={LogoutUser}>
                                    <i className="fe fe-info fs-18 me-2 text-primary" />
                                    Log Out
                                </li>
                            </ul>
                        </div>
                        {/* End::header-element */}
                        {/* Start::header-element */}
                        <div className="header-element">
                            {/* Start::header-link|switcher-icon */}
                            {/* <a aria-label="anchor" href="#" class="header-link switcher-icon" data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas">
                      <i class="bx bx-cog header-link-icon"></i> */}
                            {/* End::header-link|switcher-icon */}
                        </div>
                        {/* End::header-element */}
                    </div>
                    {/* End::header-content-right */}
                </div>
                {/* End::main-header-container */}
            </header>

        </>
    )
}
