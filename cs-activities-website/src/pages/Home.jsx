import { Navbar, Footer, Button } from "../components";
import { allActivities } from "../components/data";
import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@nextui-org/react";

const activitiesToRender = allActivities.slice(0, 3);

export default function App() {
  return (
    <>
      <Navbar />
      <section className="w-full flex flex-col justify-start items-center min-h-screen gap-10 pt-28 max-container ">
        <div className=" xl:w-1/2 h-1/2 justify-center items-center w-full flex flex-col">
          <h1 className="text-8xl max-sm:text-4xl font-bold mt-20"> Welcome</h1>
          <p className="font-normal mt-[16px] text-center text-md max-sm:w-80">
            Our educational program is meticulously designed to ensure that
            computer lessons are not only informative, but also engaging and
            enjoyable for learners of all backgrounds and skill levels.
          </p>
          <Button label="View Activities" />
        </div>
        <div className="mt-8 max-sm:mt-2">
          <h1 className="font-bold text-4xl max-sm:text-3xl">
            Popular Activities
          </h1>
        </div>
        <div className="justify-center items-start grid grid-cols-3 max-sm:grid-cols-1 sm:p-6 max-md:grid-cols-2 gap-[60px] mt-10 max-sm:mt-2">
          {activitiesToRender.map((item, index) => (
            <Link
              key={index}
              to={`/details/${index}`}
              className="block shadow-md px-8 py-8 border-black border-1 hover:text-yellow-500">
              <Card className="w-full h-[150px]">
                <CardHeader className="flex gap-3">
                  <div className="flex flex-col">
                    <p className="text-xl font-bold ">{item.name}</p>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="mt-2">{item.description}</p>
                </CardBody>
                <CardBody>
                  <p className="mt-2 font-medium">{item.subdesc}</p>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
