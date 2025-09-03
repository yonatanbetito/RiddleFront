import { Link, useNavigate } from "react-router";
import Buttonchois from "./Buttonchois";

export default function Mainhome(){
    const navigate = useNavigate();
    return (<>
    <h1>Riddle Game</h1>
    <h2>Ready to test your wits?</h2>
    <Link to={"/login"}></Link>
    <Buttonchois text={"play"} funhendel={()=>{navigate("/play")}}/>
    <Buttonchois text={"login/register"} funhendel={()=>{navigate("/loginregister")}}/>
    <Buttonchois text={"leadboard"} funhendel={()=>{navigate("/leadboard")}}/>
    </>)
}