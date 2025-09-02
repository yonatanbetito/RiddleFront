import { Link, useNavigate } from "react-router";
import Buttonchois from "./Buttonchois";

export default function Mainhome(){
    const navigate = useNavigate();
    return (<>
    <h1>Riddle Game</h1>
    <h2>Ready to test your wits?</h2>
    <Link to={"/login"}></Link>
    <Buttonchois text={"play"} funhendel={()=>{console.log("play");}}/>
    <Buttonchois text={"login"} funhendel={()=>{navigate("/loginregister")}}/>
    <Buttonchois text={"register"} funhendel={()=>{navigate("/loginregister")}}/>
    </>)
}