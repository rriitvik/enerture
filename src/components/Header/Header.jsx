import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-4">
                <div className="flex flex-wrap justify-between items-center mx-auto px-16 max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="/logo.png"
                            className="w-full h-full"
                            alt="Logo"
                        />
                    </Link>
                    
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                            
                            <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0089e4]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0089e4] lg:p-0`
                                    }
                                >
                                    HOME
                                </NavLink>
                            </li>
                            <li>
                            <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0089e4]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0089e4] lg:p-0`
                                    }
                                >
                                    ABOUT
                                    <FontAwesomeIcon icon={faChevronDown} size="sm" style={{color: "#374151",}} />
                                </NavLink>
                            </li>
                            <li>
                            <NavLink
                                to="/productandservices"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0089e4]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0089e4] lg:p-0`
                                    }
                                >
                                    PRODUCT & SERVICES
                                    <FontAwesomeIcon icon={faChevronDown} size="sm" style={{color: "#374151",}} />
                                </NavLink>
                            </li>
                            <li>
                            <NavLink
                                to="/socialimpact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0089e4]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0089e4] lg:p-0`
                                    }
                                >
                                    SOCIAL IMPACT
                                </NavLink>
                            </li>
                            <li>
                            <NavLink
                                to="/newsandevents"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0089e4]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0089e4] lg:p-0`
                                    }
                                >
                                    NEWS AND EVENTS
                                    <FontAwesomeIcon icon={faChevronDown} size="sm" style={{color: "#374151",}} />
                                </NavLink>
                            </li>
                            <li>
                            <NavLink
                                to="/getintouch"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0089e4]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0089e4] lg:p-0`
                                    }
                                >
                                    GET IN TOUCH
                                    <FontAwesomeIcon icon={faChevronDown} size="sm" style={{color: "#374151",}} />
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

