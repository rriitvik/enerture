import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-white">
            <hr className="my-2 border-yellow-400 border-2 sm:mx-auto lg:my-8" />
            <div className="w-full  mx-auto pt-4 lg:pt-2">
                <div className="md:flex md:justify-between mb-10">
                    <div className="mb-6 md:mb-0 ml-20">
                        <Link to="/" className="flex items-center">
                            <img
                                src="/logo.png"
                                className="h-14 max-w-3xl"
                                alt="Logo"
                            />
                        </Link>
                        <div className="flex flex-row space-x-5">
    <a
        href="https://www.facebook.com/EnertureTechnologies"
        className="hover:underline"
        target="_blank"
        rel="noreferrer"
    >
        <img
            src="https://www.wavetransit.com/wp-content/uploads/2021/08/Facebook-logo.png"
            className="rounded-full h-10 w-10 object-fill"
            alt="Logo"
        />
    </a>
    <a
        href="https://x.com/enertures"
        className="hover:underline"
        target="_blank"
        rel="noreferrer"
    >
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png"
            className="rounded-full h-10 w-10 object-fill"
            alt="Logo"
        />
    </a>
    <a
        href="https://www.instagram.com/enertures/"
        className="hover:underline"
        target="_blank"
        rel="noreferrer"
    >
        <img
            src="https://www.internetmatters.org/wp-content/uploads/2024/08/insta-logo-whie-background.png"
            className="rounded-full h-10 w-10 object-fill"
            alt="Logo"
        />
    </a>
    <a
        href="https://www.linkedin.com/company/enerture-technologies-private-ltd/"
        className="hover:underline"
        target="_blank"
        rel="noreferrer"
    >
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbb0_npkny3YOvY91wF6jgOkRwTEcaUcyUOg&s"
            className="rounded-full h-10 w-10 object-fill"
            alt="Logo"
        />
    </a>
    <a
        href="https://in.pinterest.com/enertures/"
        className="hover:underline"
        target="_blank"
        rel="noreferrer"
    >
        <img
            src="https://images.ctfassets.net/2pyx8rwuvz6x/6ripdMG3FUQnJCEuMOk5MK/1623aa4f205c8cffe8d11916bdb26287/PressAssets_Brand.png?fm=webp&q=85"
            className="rounded-full h-10 w-10 object-fill"
            alt="Logo"
        />
    </a>
</div>

                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 sm:gap-2 sm:grid-cols-3 mx-36">
                        <div>
                            <h2 className="mb-8 text-2xl font-semibold text-yellow-400 ">Product & Services</h2>
                            <ul className="font-medium">
                                <li>
                                    
                                        Solar O&M
                                    
                                </li>
                                <li>
                                    
                                        Rooftop Projects
                                    
                                </li>
                                <li>
                                    
                                        Ground Mount
                                    
                                </li>
                                <li>
                                    
                                        Project
                                    
                                </li>
                                <li>
                                    
                                        AoA
                                    
                                </li>
                                <li>
                                    
                                        EV Charging
                                    
                                </li>
                                <li>
                                    
                                        Events
                                    
                                </li>
                                <li>
                                    
                                        Contact
                                    
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-8 text-2xl font-semibold text-yellow-400 ">Navigation</h2>
                            <ul className="font-medium">
                                <li>
                                <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/socialimpact" className="hover:underline">
                                        Social Impact
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/newsandevents" className="hover:underline">
                                        News & Media
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/getintouch" className="hover:underline">
                                        Get in Touch
                                    </Link>
                                </li>
                                <li>
                                <a
                                        href="https://drive.google.com/file/d/1TX_ZAakblvHcORqQ3sZMvj6-MPK5iH07/view"
                                        className="hover:underline"
                                        rel="noreferrer"
                                    >
                                        Brochure
                                    </a>
                                </li>
                                <li>
                                <a
                                        href="https://drive.google.com/file/d/14GzNTcFwDq1apRclfsR9ZyfwsozQc4Nh/view"
                                        className="hover:underline"
                                        rel="noreferrer"
                                    >
                                        MOA
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-8 text-2xl font-semibold text-yellow-400 ">Get in Touch</h2>
                            <ul className="font-medium">
                                <li>
                                    <strong>Office Address:</strong>
                                    Vertex Global, Plot no 70, Phase IV, Udyog Vihar, Sector 18, Gurugram, New Delhi, Haryana 122016
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        <strong>Phone:</strong>
                                        +91 9540022555
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="sm:flex sm:items-center sm:justify-between bg-[#3b5998] h-20 font-semibold w-s">
                    <span className="text-base text-white sm:text-center pl-36">
                        Copyright © Enerture Technologies Pvt. Ltd.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <span className="text-base text-white sm:text-center pr-36 ">
                            Powered by - 
                            <span className="text-base text-[#0089e4] sm:text-center pr-36 ">
                             &nbsp;
                             <Link to="/" className="hover:underline">
                             Enerture
                                    </Link>
                             
                            </span>
                            
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
