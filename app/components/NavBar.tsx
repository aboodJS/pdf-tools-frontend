import { NavLink } from "react-router";

function NavBar() {
  return (
    <>
      <nav className="flex h-[8vh] justify-evenly items-center w-screen">
        <NavLink to="/">image to pdf</NavLink>
        <NavLink to="/word-to-pdf">word to pdf</NavLink>
      </nav>
    </>
  );
}

export default NavBar;
