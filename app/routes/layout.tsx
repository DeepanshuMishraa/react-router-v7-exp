import { Outlet } from "react-router";
import { Appbar } from "~/components/Appbar";


export default function Layout() {
  return (
    <>
      <Appbar />
      <Outlet />
    </>
  )
}
