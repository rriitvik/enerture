import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8 bg-gray-100 z-">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            
                            <span className="hidden sm:block text-4xl text-yellow-400">“Developing Renewable Assets of the World”</span>
                        </h2>
                        <p className="text-lg text-gray-600 text-left">
                        Enerture is a team of young and dynamic teams working to disrupt the service industry to solve people’s and organizations’ renewable energy problems. Enerture is presentation complete project value chain
                        <ul className="my-4 marker:text-yellow-400 list-disc pl-5 space-y-3 font-bold">
                            <li>Asset Development / Asset Financing</li>
                            <li>In House ” Engineering”</li>
                            <li>Project Execution </li>
                            <li>Asset Management </li>
                        </ul>
                        Developing Assets across C&I Clients to achieve net zero goal. We are the best innovative solar company in India. Offering solar Project “Opex & Open Access” in India. Enerture is Developing 200+ MW Opex & Open Access Solar Project  in India for Client Having A+ Credit Rating.
                        </p>
                    </div>
                    <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full m-4 p-4">
                    <img className="w-96 h-4/5" src="https://i0.wp.com/enerture.co.in/wp-content/uploads/2023/08/Enerture-Hollister-solar.jpg?fit=1366%2C550&ssl=1" alt="image1" />
                </div>
                </div>
            </aside>
            
            
            <div className="container m-auto p-6 md:px-12 xl:px-6 bg-gray-100 text-yellow-400 text-lg font-bold">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 flex-col p-5">
                    <div className="flex flex-row space-x-2 text-center">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://i0.wp.com/enerture.co.in/wp-content/uploads/2022/12/linde-jamshedpur-Enerture-work-.jpg?w=1000&ssl=1"
                            alt="image"
                        />
                         <br />
                        <br />
                        Linde
                        <br />
                        <br />
                        <button className="bg-blue-500 text-white px-8 py-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-sm" onClick={(e)=>e.preventDefault()}>
                            More Details
                            </button>
                    </div>
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://i0.wp.com/enerture.co.in/wp-content/uploads/2022/12/Crompton-Greaves_-bhopal-Enerture-work-.jpg?w=1000&ssl=1"
                            alt="image"
                        />
                        <br />
                        <br />
                        Crompton Greaves
                        <br />
                        <br />
                        <button className="bg-blue-500 text-white px-8 py-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-sm" onClick={(e)=>e.preventDefault()}>
                            More Details
                            </button>
                    </div>
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://i0.wp.com/enerture.co.in/wp-content/uploads/2022/12/spark-minda-office-pune-Enerture-work-.jpg?w=1000&ssl=1"
                            alt="image"
                        />
                         <br />
                        <br />
                        Minda Corp
                        <br />
                        <br />
                        <button className="bg-blue-500 text-white px-8 py-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-sm" onClick={(e)=>e.preventDefault()}>
                            More Details
                            </button>
                    </div>
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://i0.wp.com/enerture.co.in/wp-content/uploads/2022/12/linde-jamshedpur-Enerture-work-1.jpg?w=1000&ssl=1" 
                            alt="image"
                        />
                        <br />
                        <br />
                        Hollister
                        <br />
                        <br />
                        <button className="bg-blue-500 text-white px-8 py-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-sm" onClick={(e)=>e.preventDefault()}>
                            More Details
                            </button>
                    </div>
                    </div>
                </div>
            </div>
            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium text-yellow-400">We Provide Innovative Solutions to Suit Your Energy Needs</h1>
            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="/indiamap.webp" alt="image2" />
            </div>
        </div>
    );
}
