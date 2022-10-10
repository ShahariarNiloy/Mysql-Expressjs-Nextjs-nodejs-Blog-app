import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <Link href={"/"}>
              <img src={"images/logo.jpg"} alt="sadasd" />
            </Link>
          </div>
          <div className="links">
            <Link className="link" href={"/?cat=art"}>
              <h6>ART</h6>
            </Link>
            <Link className="link" href={"/?cat=science"}>
              <h6>SCIENCE</h6>
            </Link>
            <Link className="link" href={"/?cat=technology"}>
              <h6>TECHNOLOGY</h6>
            </Link>
            <Link className="link" href={"/?cat=cinema"}>
              <h6>CINEMA</h6>
            </Link>
            <Link className="link" href={"/?cat=design"}>
              <h6>DESIGN</h6>
            </Link>
            <Link className="link" href={"/?cat=food"}>
              <h6>FOOD</h6>
            </Link>
            {/* <span>{currentUser?.username}</span> */}
            {/* {currentUser ? ( */}
            {/* <span onClick={logout}>Logout</span> */}
            {/* ) : ( */}
            <Link className="link" href={"/login"}>
              Login
            </Link>
            {/* )} */}
            <span className="write">
              <Link className="link" href={"/write"}>
                Write
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
