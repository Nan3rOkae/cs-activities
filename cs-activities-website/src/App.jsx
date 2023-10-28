import { Route, Routes } from "react-router-dom";
import { Activities, Home, Surveys} from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/activities" element={<Activities />}></Route>
      <Route path="/survey" element={<Surveys />}></Route>
    </Routes>
  );
}
