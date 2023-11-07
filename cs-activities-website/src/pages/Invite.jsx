import React, { useState } from "react";
import { Navbar, Footer } from "../components";
import { Spinner } from "@nextui-org/react";

export default function Invite() {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      {isLoading && <Spinner />}
      <div className="w-full flex flex-col justify-start items-center min-h-screen gap-10 pt-28 pb-28 max-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfIJVXOlC5l1c7sWts-SMuuCR14ipiscAAklg_rz-UWjKxKww/viewform?embedded=true"
          width="640"
          height="1000"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          onLoad={handleIframeLoad}>
          Loading…
        </iframe>
        {/* <Footer /> */}
      </div>
    </>
  );
}
