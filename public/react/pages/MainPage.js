import Nav from "../components/Nav";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <Nav />
      <Header />
      <Outlet />
    </>
  );
}
