import React from "react"

import { Link } from "gatsby"
import { FaCreativeCommonsBy } from "@react-icons/all-files/fa/FaCreativeCommonsBy"
import { FaCreativeCommons } from "@react-icons/all-files/fa/FaCreativeCommons"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import RWIcon from "./rwicon.png"

const ListLink = props => (
  <li style={{ display: "inline-block", marginRight: "2rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ margin: "auto", maxWidth: "800px" }}>
      <header style={{ marginTop: "30px", marginBottom: "50px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img style={{ width: 75, height: 75 }} src={RWIcon} alt="Logo" />
          <h3 style={{ display: "inline-block" }}>Richard Wafer</h3>
          <ul style={{ height: "43", listStyle: "none" }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/poc/">PoC</ListLink>
          </ul>
        </div>
      </header>
      {children}
      <footer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 100,
        }}
      >
        <div>
          <FaCreativeCommons />
          <FaCreativeCommonsBy />
        </div>
        <div>
          <Link
            style={{ marginRight: "2rem" }}
            to="https://www.linkedin.com/in/wafer/"
          >
            <FaLinkedinIn />
          </Link>
          <Link to="https://github.com/rwafer">
            <FaGithub />
          </Link>
        </div>
      </footer>
    </div>
  )
}
