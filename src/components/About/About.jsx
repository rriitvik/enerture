export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="/about-solarpanel.webp"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-yellow-400 font-bold md:text-4xl">
                      “Renewable Energy - Key To A 
                      <br />
                      Sustainable World”
                      </h2>
                      <p className="mt-6 text-gray-600">
                      Enerture is a team of young and dynamic teams working to disrupt the service industry to solve people’s and organizations’ renewable energy problems. We are one of the few companies offering end-to-end in-house capabilities across all aspects, including Design, Engineering, Procurement, Construction, Monitoring, Operation, and Maintenance.
                      </p>
                      <p className="mt-4 text-gray-600">
                      We are the best solar company in India offering solar EPS maintenance, rooftop services, operation and maintenance, EV charging station provider, ground mount and rooftop maintenanc
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}