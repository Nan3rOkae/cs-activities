import React, { useState } from "react";
import { Navbar } from "../components";
import { Spinner } from "@nextui-org/react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Surveys() {

  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      {isLoading && <Spinner />}

      <div className="w-full flex flex-col justify-start items-center min-h-screen gap-10 pt-28 pb-28 max-container">
        <Link
          className=" block md:hidden justify-start items-start w-full px-10"
          to="/">
          <button className="text-4xl">
            <IoMdArrowBack />
          </button>
        </Link>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdAXRKP0eEig4eQRWsS0UbjzivhIQ3vGHsGKj0bQJdxhCfbPA/viewform?embedded=true"
          className="max-sm:w-[400px]"
          width="640"
          height="1000"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          onLoad={handleIframeLoad} // Event handler for iframe load
        ></iframe>
      </div>
    </>
  );
}
