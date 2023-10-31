import React from 'react'
import { Navbar,Footer } from '../components';

export default function Invite(){
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col justify-start min-h-screen gap-10 pt-28 max-container ">
        <div className="border-2 h-[500px]">
       Invite Us
        </div>
        <Footer />
      </div>
    </>
  );
}
