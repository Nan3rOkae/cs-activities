import {  Route, Routes } from "react-router-dom";
import { Activities, Home, Surveys, Details } from "./pages";

export default function App() {
  return (
    <Routes basename="/cs-activities/">
      <Route path="/" element={<Home />}></Route>
      <Route path="/activities" element={<Activities />}></Route>
      <Route path="/survey" element={<Surveys />}></Route>
      <Route path="/details/:activityIndex" element={<Details />}></Route>
    </Routes>
  );
}
