import React from "react";
import { Navbar, Footer } from "../components";
import { allActivities } from "../components/data";
import { useParams } from "react-router-dom";

export default function ActivityDetails() {
  const { activityIndex } = useParams();
  const activity = allActivities[activityIndex];

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col justify-start min-h-screen gap-10 pt-28 max-container ">
        <div className="h-[500px]">
          <h1 className=" text-4xl font-bold px-2">{activity.name}</h1>
          <p>{activity.description}</p>
          <p>{activity.subdesc}</p>
          <a
            href={activity.instructionPDF}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500  mt-4">
            Instructions
          </a>
        </div>
        <Footer />
      </div>
    </>
  );
}
