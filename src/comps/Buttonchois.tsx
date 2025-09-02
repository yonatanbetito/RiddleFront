
type choisprop= {
    text:string
    funhendel: () => void

}
export default function Buttonchois(props:choisprop){
    return(<>
    <button onClick={props.funhendel}>{props.text}</button></>)

}