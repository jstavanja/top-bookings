import Image from "next/image";
import teamImage from "../assets/img/team-2-800x800.jpg";

export const Services = () => (
  <section className="pb-20 bg-gray-300 -mt-24">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                <i className="fas fa-award"></i>
              </div>
              <h6 className="text-xl font-semibold">User-friendly interface</h6>
              <p className="mt-2 mb-4 text-gray-600">
                Our app is designed to be easy to use for both clients and
                businesses.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                <i className="fas fa-retweet"></i>
              </div>
              <h6 className="text-xl font-semibold">Simple editing tools</h6>
              <p className="mt-2 mb-4 text-gray-600">
                Businesses can easily manage their timeslots and offered
                services with our straightforward editing tools.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                <i className="fas fa-fingerprint"></i>
              </div>
              <h6 className="text-xl font-semibold">
                Search engine optimization
              </h6>
              <p className="mt-2 mb-4 text-gray-600">
                Our app is optimized for search engines, making it easier for
                potential clients to discover your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center mt-32">
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
            <i className="fas fa-user-friends text-xl"></i>
          </div>
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            The features don't stop there...
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            In addition to all of the features we've already mentioned, Slotter
            also offers a customizable booking process, mobile optimization,
            notifications, a review system, multiple payment options, and
            advanced scheduling tools.
          </p>

          <a href="#" className="font-bold text-gray-800 mt-8">
            Try Slotter!
          </a>
        </div>

        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-pink-600">
            <Image
              alt="..."
              src={teamImage}
              className="w-full align-middle rounded-t-lg"
            />
            <blockquote className="relative p-8 mb-4">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                className="absolute left-0 w-full block"
                style={{
                  height: "95px",
                  top: "-94px",
                }}
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  className="text-pink-600 fill-current"
                ></polygon>
              </svg>
              <h4 className="text-xl font-bold text-white">
                Most likely the ultimate booking app...
              </h4>
              <p className="text-md font-light mt-2 text-white">
                Our features allow businesses to tailor the booking process to
                their specific needs, make it easy for clients to book
                appointments on the go, stay informed about upcoming
                appointments, choose from multiple payment options, and manage
                their schedules more efficiently.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
);
