import { useNavigate } from "react-router";
import Buttonchois from "../comps/Buttonchois";

export default function Play(){
    const navigate = useNavigate();
    return (
        <>
            <h1>Ready to Play?</h1>
            <Buttonchois text={"play"} funhendel={()=>{console.log("fun start");}}/>
            <Buttonchois text={"home"} funhendel={()=>{navigate("/");}}/>
        </>
    );
}
