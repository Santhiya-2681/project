import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Netflixuser from "../../Assets/Images/Netflix-user.png"
import Netfliximg from "../../Assets/Images/Front.png"
import {
  AiOutlineCaretDown,
  AiOutlineSearch,
  FaRegBell,
  MdOutlineCancel,
} from "../../icons/index";
import "./navbar.css";
import Profilepage from "../../Pages/ProfilePage/ProfilePage";
import { useUserContext } from "../../utils/hooks/userContext";

const Navbar = () => {
  const { pathname } = useLocation();
  const [shownav, setShownav] = useState(false);
  const { setSearchmovie } = useUserContext();
  const navigator = useNavigate();
  const Navbarvisiblity = () => {
    if (window.scrollY > 50) {
      setShownav(true);
    } else {
      setShownav(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", Navbarvisiblity);
    return () => {
      window.removeEventListener("scroll", Navbarvisiblity);
    };
  });

  const navbars = [
    "home",
    "tv Shows",
    "movies",
    "new & Popular",
    "my List",
    "browser by languages",
  ];
  return (
    <div className="Search-con">
      <div className={`nav-container ${shownav && "nav-black"}`}>
        <nav className="flex-divs">
          <img className="Nav-img" src={Netfliximg} alt="" />
          <div className="flex ml-[45px]">
            {navbars.map((nav) => (
              <div className="text-sm" key={nav}>
                <NavLink to={`/${nav}`}>
                  {nav[0].toUpperCase() + nav.slice(1)}
                </NavLink>
              </div>
            ))}
          </div>
          <div className="p-parent  flex">
            {pathname.slice(1) === "search" ? (
              <>
                <input
                  type="text"
                  className={`${pathname.slice(1) === "search"
                    ? "navbar-inpt border pr-[25px] m-2"
                    : "hidden"
                    }`}
                  onChange={(e) => setSearchmovie(e.target.value)}
                />
                <Link
                  to={"/home"}
                  className="absolute top-[-6px] right-[208px]"
                >
                  <MdOutlineCancel className="m-2 text-[25px]" />
                </Link>
              </>
            ) : (
              <AiOutlineSearch
                onClick={() => navigator("/search")}
                className=" m-2 text-[25px]"
              />
            )}

            <NavLink to={"/children"}>Children</NavLink>
            <FaRegBell className="notification m-2  text-[25px]" />
            <div className="search-container ">
              <AiOutlineCaretDown className="rotate-180 ml-[276px]" />
              <div className="ntf">
                <h1 className="text-white p-2">Notification</h1>
              </div>
            </div>
            <img
              src={Netflixuser}
              className="img-user rounded-md ml-6 w-[35px] h-[35px] "
              alt=""
            />
            <AiOutlineCaretDown className="down-icon  ml-1 mr-[20px]" />
            <div className="profile-container">
              <AiOutlineCaretDown className="rotate-180 ml-[180px]" />
              <Profilepage />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;