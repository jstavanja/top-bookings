export const Finisher = () => (
  <section className="pb-20 relative block bg-gray-900">
    <div
      className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style={{ height: "80px" }}
    >
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          className="text-gray-900 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>

    <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
      <div className="flex flex-wrap text-center justify-center">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold text-white">
            Elevate your business
          </h2>
          <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
            Slotter is more than just a reservation/booking app - it's a tool
            that can help elevate your business to new heights. By choosing
            Slotter, you'll be able to streamline your booking process, increase
            efficiency, and ultimately, drive more business to your doors. So,
            it's the perfect choice for growing your business.
          </p>
        </div>
      </div>
    </div>
  </section>
);
