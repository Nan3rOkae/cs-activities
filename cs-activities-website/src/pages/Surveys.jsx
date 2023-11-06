import { Navbar } from "../components";

export default function Surveys() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col justify-start items-center min-h-screen gap-10 pt-28 max-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdAXRKP0eEig4eQRWsS0UbjzivhIQ3vGHsGKj0bQJdxhCfbPA/viewform?embedded=true"
          width="640"
          height="1000"
          frameborder="0"
          marginheight="0"
          marginwidth="0">
          Loading…
        </iframe>
      </div>
    </>
  );
}
