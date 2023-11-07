import React from "react";
import { Navbar, Footer } from "../components";
import { allActivities } from "../components/data";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { useParams } from "react-router-dom";

export default function ActivityDetails() {
  const { activityIndex } = useParams();
  const activity = allActivities[activityIndex];

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col justify-start items-center min-h-screen gap-2 pt-28 pb-28 max-container ">
        <Link
          className=" block md:hidden justify-start items-start w-full px-10"
          to="/activities">
          <button className="text-4xl">
            <IoMdArrowBack />
          </button>
        </Link>
        <div className="flex flex-row items-center space-x-1 mt-2 justify-center ">
          <h1 className=" text-4xl max-sm:text-2xl font-bold px-2 flex justify-center ">
            {activity.name}
          </h1>
          <img
            src={activity.img}
            alt={activity.name}
            className="max-sm:w-[20px] max-sm:h-[15px]"
            width={30}
            height={10}
          />
          <p className="mt-2 font-medium hover:text-black max-sm:text-xs">
            {activity.subdesc}
          </p>
        </div>
        <div className="flex h-full w-full justify-center items-center">
          <p className="px-2 mt-1 w-4/5 text-lg justify-center items-center max-sm:text-sm">
            {activity.longDescription}
          </p>
        </div>
        <div className="flex justify-center font-medium text-xl underline mt-10 max-sm:text-sm max-md:text-base">
          Click on the text to access each activity documentation
        </div>
        <div className="flex flex-col justify-center text-2xl items-center max-sm:text-2xl">
          {activity.instructionPDF && (
            <a
              href={activity.instructionPDF?.trim()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-blue-500 font-bold hover:text-yellow-500">
              Instructions
            </a>
          )}
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
          {activity.JumpingGameScratchInstrcutionPDF && (
            <a
              href={activity.JumpingGameScratchInstrcutionPDF?.trim()}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-blue-500 font-bold hover:text-yellow-500  mt-4">
              Jumping Game
            </a>
          )}
          {activity.StoryBoardScratchInstructionPDF && (
            <a
              href={activity.StoryBoardScratchInstructionPDF?.trim()}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-blue-500 font-bold hover:text-yellow-500  mt-4">
              Story Board
            </a>
          )}
        </div>

        {/* <Footer /> */}
      </div>
    </>
  );
}
