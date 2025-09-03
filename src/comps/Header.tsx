import { Link } from "react-router";
type headerprops ={
    title:string
}
export default function Header(prop:headerprops){
    return (
        <>
            <Link to="/">Home</Link>
            <h1>{prop.title}</h1>
        </>
    );
}