import { useNavigate } from "react-router-dom";

const Btn1 = ({ name, link })=> {
    const navigate = useNavigate(); 
    return <>
        <span onClick={()=> {
             navigate("/newsletter"); 
        }} className="max-h-fit max-w-fit text-lg px-6 py-3 cursor-pointer hover:bg-black hover:text-white hover:underline transition duration-75">
            {name}
        </span>
    </>
}

export default Btn1;