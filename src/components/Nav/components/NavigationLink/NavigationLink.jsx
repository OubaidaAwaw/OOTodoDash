  // import css files
import "./NavigationLink.css"
  // import components and hooks rom react router
import { NavLink } from "react-router-dom"

export default function NavigationLink(props) {
  return (
    <NavLink to={props.to} className={`${props.className} navigationLink`}>
      {props.children}
    </NavLink>
  )
}
/*
** props.to for where
** props.className costum className
*/