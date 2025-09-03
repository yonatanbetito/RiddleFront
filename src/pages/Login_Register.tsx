import { Link, Outlet, useNavigate } from "react-router";
import Buttonchois from "../comps/Buttonchois";

export default function Loginregister() {
    const navigate = useNavigate();
  return (
    <>
    <Buttonchois text="Home" funhendel={()=>{navigate("/")}}/>
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
