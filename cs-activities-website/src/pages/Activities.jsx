import { Navbar, Footer } from "../components";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@nextui-org/react";
// import { Search } from "../components";
import { allActivities } from "../components/data";
import { IoMdArrowBack } from "react-icons/io";




export default function Activities() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col justify-start items-center min-h-screen gap-10 pt-28 pb-28 max-container">
        <Link
          className=" block md:hidden justify-start items-start w-full px-10"
          to="/">
          <button className="text-4xl">
            <IoMdArrowBack />
          </button>
        </Link>
        <div className="flex flex-row w-full justify-center">
          <h1 className="font-bold text-4xl max-sm:text-3xl">
            Gear up for some fun!
          </h1>
        </div>
        {/* <Search /> */}
        <div className="justify-center items-start grid grid-cols-3 max-sm:grid-cols-1 gap-[60px] max-lg:grid-cols-2 mt-10 max-sm:mt-2">
          {allActivities.map((item, index) => (
            <Link
              key={index}
              to={`/details/${index}`}
              className="block px-8 py-8 border-black border-1 hover:text-yellow-500 hover:shadow-xl rounded-xl max-sm:w-[350px]">
              <Card className="w-full h-[150px]">
                <CardHeader className="flex gap-3">
                  <div className="flex flex-col">
                    <p className="text-xl font-bold ">{item.name}</p>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="mt-2">{item.description}</p>
                </CardBody>
                <CardBody className="flex flex-row items-center space-x-1 w-[200px] mt-2 justify-start">
                  <img src={item.img} alt={item.name} width={30} height={10} />
                  <p className="mt-2 font-medium">{item.subdesc}</p>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
