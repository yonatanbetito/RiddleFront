import { Link } from "react-router";
import Buttonchois from "./Buttonchois";

export default function Mainhome(){
    return (<>
    <h1>Riddle Game</h1>
    <h2>Ready to test your wits?</h2>
    <Link to={"/logi"}></Link>
    <Buttonchois text={"play"} funhendel={()=>{console.log("play");}}/>
    {/* <Buttonchois text={"login"} funhendel={()=>{<Link to="/loginregister"></Link>}}/> */}
    <Buttonchois text={"login"} funhendel={()=>{console.log("login");}}/>
    <Buttonchois text={"register"} funhendel={()=>{console.log("register");}}/>
    </>)
}