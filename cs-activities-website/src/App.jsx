import { Route, Routes } from "react-router-dom";
import { Activities, Home, Surveys, Details, Invite } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/activities" element={<Activities />}></Route>
      <Route path="/survey" element={<Surveys />}></Route>
      <Route path="/invite-us" element={<Invite />}></Route>
      <Route path="/details/:activityIndex" element={<Details />}></Route>
    </Routes>
  );
}
