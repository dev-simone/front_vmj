import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Contacts from "./Contacts";

import {
  logo,
  homeIcon,
  servicesIcon,
  blogIcon,
  contactsIcon,
  closeIcon,
  hamburgerIcon,
} from "../assets/images";

const Navbar = () => {
  const { authToken, logout, selectedPage, setSelectedPage } = useAuth();
  const { contextSafe } = useGSAP();

  const handleNavLinkClick = (page) => {
    setSelectedPage(page);
    sessionStorage.setItem("page", page);
  };

  const openSidebarContacts = contextSafe(() => {
    gsap.to(".contacts--sidebar", {
      x: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
    gsap.to(".contacts--black-cover", {
      opacity: 1,
      zIndex: 9999,
      duration: 0.5,
      ease: "power2",
    });
  });

  const openMenu = contextSafe(() => {
    gsap.to(".sidebar", { x: 0, duration: 0.5, ease: "power2.inOut" });
    gsap.to(".black-cover", {
      opacity: 1,
      zIndex: 50,
      duration: 0.5,
      ease: "power2",
    });
  });

  const closeMenu = contextSafe(() => {
    gsap.to(".sidebar", { x: "100%", duration: 0.5, ease: "power2.inOut" });
    gsap.to(".black-cover", {
      opacity: 0,
      zIndex: -1,
      duration: 0.5,
      ease: "power2",
    });
  });

  return (
    <>
      {/* MOBILE */}
      <div className="black-cover"></div>
      <button className="hamburger-btn">
        <img src={hamburgerIcon} onClick={openMenu} alt="" />
      </button>
      <div className="sidebar">
        <button className="close-btn">
          <img src={closeIcon} onClick={closeMenu} alt="" />
        </button>
        <div className="flex logo-container">
          <img src={logo} id="#logo" alt="logo" />
          <div className="text-black">
            <p>Visual Merchandising Journey</p>
            <p className="text-slateBlueGray">Di Andrea Memmolo</p>
          </div>
        </div>
        <ul>
          <li>
            <div>
              <img src={homeIcon} alt="" />
              <Link to="/">Home</Link>
            </div>
          </li>
          <li>
            <div>
              <img src={servicesIcon} alt="" />
              <Link to="/services">Servizi</Link>
            </div>
          </li>
          <li>
            <div>
              <img src={blogIcon} alt="" />
              <Link to="/blog">Blog</Link>
            </div>
          </li>
          <li>
            <div>
              <img src={contactsIcon} alt="" />
              <button onClick={openSidebarContacts}>Contatti</button>
            </div>
          </li>
          <li>
            <div>
              <Link
                to={authToken ? "/personal-area" : "/login"}
                className="nav-auth--mobile"
              >
                <svg
                  width="25"
                  height="28"
                  viewBox="0 0 25 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="login-icon"
                >
                  <path
                    d="M5.3125 11.1111V8.22222C5.3125 4.2335 8.53045 1 12.5 1C15.4473 1 17.9803 2.78258 19.0894 5.33333M12.5 17.6111V20.5M7.9 27H17.1C19.5152 27 20.7228 27 21.6453 26.5277C22.4568 26.1122 23.1165 25.4493 23.53 24.634C24 23.707 24 22.4936 24 20.0667V18.0444C24 15.6176 24 14.4041 23.53 13.4772C23.1165 12.6618 22.4568 11.9989 21.6453 11.5834C20.7228 11.1111 19.5152 11.1111 17.1 11.1111H7.9C5.48477 11.1111 4.27716 11.1111 3.35467 11.5834C2.54322 11.9989 1.88349 12.6618 1.47003 13.4772C1 14.4041 1 15.6176 1 18.0444V20.0667C1 22.4936 1 23.707 1.47003 24.634C1.88349 25.4493 2.54322 26.1122 3.35467 26.5277C4.27716 27 5.48477 27 7.9 27Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Area Riservata</p>
              </Link>
            </div>
          </li>
          <li>
            {authToken && (
              <button className="nav-logout--mobile" onClick={logout}>
                <svg
                  width="25"
                  height="28"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8333 13.1667L16 9M16 9L11.8333 4.83333M16 9H6M6 1.5H5C3.59987 1.5 2.8998 1.5 2.36502 1.77248C1.89462 2.01217 1.51217 2.39462 1.27248 2.86502C1 3.3998 1 4.09987 1 5.5V12.5C1 13.9001 1 14.6002 1.27248 15.135C1.51217 15.6054 1.89462 15.9878 2.36502 16.2275C2.8998 16.5 3.59987 16.5 5 16.5H6"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Logout</p>
              </button>
            )}
          </li>
        </ul>
      </div>

      <Contacts />

      {/* NORMAL NAV */}
      <nav className="navbar">
        <div className="flex">
          <Link to="/" onClick={() => handleNavLinkClick("/")}>
            <img src={logo} alt="logo" />
          </Link>
          <div className="ff-lufga text-black">
            <p>Visual Merchandising Journey</p>
            <p className="text-slateBlueGray">Di Andrea Memmolo</p>
          </div>
        </div>
        <div className="flex">
          <ul className="flex">
            <li>
              <Link
                onClick={() => handleNavLinkClick("/")}
                className={`${selectedPage === "/" && "text-blue"}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleNavLinkClick("services")}
                className={`${selectedPage === "services" && "text-blue"}`}
                to="/services"
              >
                Servizi
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleNavLinkClick("blog")}
                className={`${selectedPage === "blog" && "text-blue"}`}
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <button className="contacts-btn" onClick={openSidebarContacts}>
                Contatti
              </button>
            </li>
          </ul>
          <Link to={authToken ? "/personal-area" : "/login"} onClick={() => handleNavLinkClick("login")}>
            <svg
              width="25"
              height="28"
              viewBox="0 0 25 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="login-icon"
            >
              <path
                d="M5.3125 11.1111V8.22222C5.3125 4.2335 8.53045 1 12.5 1C15.4473 1 17.9803 2.78258 19.0894 5.33333M12.5 17.6111V20.5M7.9 27H17.1C19.5152 27 20.7228 27 21.6453 26.5277C22.4568 26.1122 23.1165 25.4493 23.53 24.634C24 23.707 24 22.4936 24 20.0667V18.0444C24 15.6176 24 14.4041 23.53 13.4772C23.1165 12.6618 22.4568 11.9989 21.6453 11.5834C20.7228 11.1111 19.5152 11.1111 17.1 11.1111H7.9C5.48477 11.1111 4.27716 11.1111 3.35467 11.5834C2.54322 11.9989 1.88349 12.6618 1.47003 13.4772C1 14.4041 1 15.6176 1 18.0444V20.0667C1 22.4936 1 23.707 1.47003 24.634C1.88349 25.4493 2.54322 26.1122 3.35467 26.5277C4.27716 27 5.48477 27 7.9 27Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          {authToken && (
            <button onClick={logout}>
              <svg
                width="25"
                height="28"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8333 13.1667L16 9M16 9L11.8333 4.83333M16 9H6M6 1.5H5C3.59987 1.5 2.8998 1.5 2.36502 1.77248C1.89462 2.01217 1.51217 2.39462 1.27248 2.86502C1 3.3998 1 4.09987 1 5.5V12.5C1 13.9001 1 14.6002 1.27248 15.135C1.51217 15.6054 1.89462 15.9878 2.36502 16.2275C2.8998 16.5 3.59987 16.5 5 16.5H6"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
