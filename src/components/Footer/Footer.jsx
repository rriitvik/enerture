import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <hr className="my-2 border-yellow-400 border-2 sm:mx-auto lg:my-8" />
            <div className="mx-auto w-full max-w-screen-xl p-4 py-2 lg:py-2">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="/logo.png"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-lg font-semibold text-yellow-400 uppercase">Product & Services</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-lg font-semibold text-yellow-400 uppercase">Navigation</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/hiteshchoudhary"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-lg font-semibold text-yellow-400 uppercase">Get in Touch</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="mx-auto sm:flex sm:items-center sm:justify-between bg-[#3b5998] h-20 font-bold">
                    <span className="text-sm text-white sm:text-center">
                    Copyright © Enerture Technologies Pvt. Ltd.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        
                        <span className="text-sm text-white sm:text-center">
                        Powered by - Enerture
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
