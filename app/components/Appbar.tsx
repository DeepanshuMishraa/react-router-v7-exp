import { NavLink } from "react-router";


export function Appbar() {
  return (
    <div className="flex items-center justify-between p-4">
      <div>
        <NavLink to="/" className="font-bold text-3xl">Rono</NavLink>
      </div>
      <div className="flex items-center gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  )
}
