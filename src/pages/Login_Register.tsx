import { Link, Outlet } from "react-router";
import Buttonchois from "../comps/Buttonchois";

export default function Loginregister() {
  return (
    <>
      <h1>log and register</h1>
      <Link to="login">
        <Buttonchois text={"login"} funhendel={() => {}} />
      </Link>
      <Link to="register">
        <Buttonchois text={"register"} funhendel={() => {}} />
      </Link>
      <Outlet />
    </>
  );
}
