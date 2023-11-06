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
      <div className="w-full flex flex-col justify-start items-center min-h-screen gap-2 pt-28 max-container ">
        <div className="flex flex-row items-center space-x-1 mt-2 justify-center ">
          <h1 className=" text-4xl font-bold px-2 flex justify-center ">
            {activity.name}
          </h1>

          <img src={activity.img} alt={activity.name} width={30} height={10} />
          <p className="mt-2 font-medium hover:text-black">
            {activity.subdesc}
          </p>
        </div>
        <div className="flex h-full w-full justify-center items-center">
          <p className="px-2 mt-1 w-4/5 text-lg justify-center items-center">
            {activity.longDescription}
          </p>
        </div>
        <div className="flex justify-center font-medium text-xl underline mt-10">
          Click on the text to access each activity documentation
        </div>
        <div className="flex flex-col justify-center items-center">
          <a
            href={activity.instructionPDF?.trim()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-blue-500 font-bold hover:text-yellow-500">
            Instructions
          </a>
          {activity.lessonPlan && (
            <a
              href={activity.lessonPlan.trim()}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-blue-500 font-bold hover:text-yellow-500  mt-4">
              Lesson Plan
            </a>
          )}
          {activity.worksheetPDF && (
            <a
              href={activity.worksheetPDF.trim()}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-blue-500 font-bold hover:text-yellow-500  mt-4">
              Worksheet
            </a>
          )}
          {activity.keyPDF && (
            <a
              href={activity.keyPDF?.trim()}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-blue-500 font-bold hover:text-yellow-500  mt-4">
              Answer Key
            </a>
          )}
          {activity.DrawAInstructionsPDF && (
            <a
              href={activity.DrawAInstructionsPDF?.trim()}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-blue-500 font-bold hover:text-yellow-500  mt-4">
              Draw an A Instructions
            </a>
          )}
        </div>

        {/* <Footer /> */}
      </div>
    </>
  );
}
