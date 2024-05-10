const Footer = () => {
  return (
    <div className="bg-veryDarkBlue">
      {/* Flex Container */}
      <div className="container sticky bottom-0 flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* Logo and social links container */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright © 2024, All Rights Reserved
          </div>
        </div>{" "}
        <div className="flex flex-col justify-between">
          <div className="hidden text-white md:block">
            Copyright © 2024, All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
