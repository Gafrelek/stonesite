import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      {/* Flex Container */}
      <div className="container h-screen flex flex-col px-6 mx-auto  space-y-0 md:space-y-0 md:flex-row ">
        {/* Left Item */}
        <div className="flex flex-col flex-start mt-64 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left ">
            Bring everyone together to build better products
          </h1>
          <p className="text-center text-veryDarkBlue md:text-left lg:pr-44 md:pl-0 sm:pt-20 sm:px-10 ">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="#"
              className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
