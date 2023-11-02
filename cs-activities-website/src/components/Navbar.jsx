import { navLinks } from "./data";
import { Link } from "react-router-dom";
import hamburger from "../public/hamburger.svg";
import BNInstructions from "../public/BNInstructions.pdf";

export default function Navbar() {
  return (
    <header className=" py-6 z-30 w-full fixed shadow-lg bg-white ">
      <nav className="flex justify-center items-center max-container w-fill">
        <ul className="flex-1 flex justify-start px-24 items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                className="hover:text-yellow-500 font-normal"
                key={item.href}
                to={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block justify-end">
          {/* <img src={hamburger} alt="hamburger" width={25} high={25} /> */}
        </div>
      </nav>
    </header>
  );
}
