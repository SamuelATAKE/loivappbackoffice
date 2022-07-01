import React from 'react'

const AsideBar = () => {
    return (
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
                <a href="/" className="app-brand-link">
                    <img src="logo.png" />
                </a>

                <a href="/#" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                    <i className="bx bx-chevron-left bx-sm align-middle"></i>
                </a>
            </div>

            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1">
                <li className="menu-item active">
                    <a href="/" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-home-circle"></i>
                        <div data-i18n="Analytics">Tableau de bord</div>
                    </a>
                </li>

                {/* <li className="menu-item">
                    <a href="/#" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-layout"></i>
                        <div data-i18n="Layouts">Layouts</div>
                    </a>

                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="layouts-without-menu.html" className="menu-link">
                                <div data-i18n="Without menu">Without menu</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="layouts-without-navbar.html" className="menu-link">
                                <div data-i18n="Without navbar">Without navbar</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="layouts-container.html" className="menu-link">
                                <div data-i18n="Container">Container</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="layouts-fluid.html" className="menu-link">
                                <div data-i18n="Fluid">Fluid</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="layouts-blank.html" className="menu-link">
                                <div data-i18n="Blank">Blank</div>
                            </a>
                        </li>
                    </ul>
                </li> */}

                <li className="menu-header small text-uppercase">
                    <span className="menu-header-text">Administration</span>
                </li>
                <li className="menu-item">
                    <a href="/organisations" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-dock-top"></i>
                        <div data-i18n="Account Settings">Organisations</div>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="/tele-operateurs" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-lock-open-alt"></i>
                        <div data-i18n="Authentications">Télé-opérateurs</div>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="/utilisateurs" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-cube-alt"></i>
                        <div data-i18n="Misc">Utilisateurs</div>
                    </a>
                </li>
                <li className="menu-header small text-uppercase"><span className="menu-header-text">Gestion des violences</span></li>
                <li className="menu-item">
                    <a href="/declarations" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-collection"></i>
                        <div data-i18n="Basic">Déclarations</div>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="/assignations" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-box"></i>
                        <div data-i18n="User interface">Assignations</div>
                    </a>
                </li>
            </ul>
        </aside>

    )
}

export default AsideBar
