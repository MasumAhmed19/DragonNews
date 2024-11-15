import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const FindUs = () => {
    return (
        <div>
            <div className="join join-vertical mt-5 flex flex-col *:bg-base-100">
                <button className="flex items-center btn join-ite gap-3 text-base border-2 p-2 rounded-md w-full justify-start"><FaFacebook />Facebook</button>
                <button className="flex items-center btn join-ite gap-3 text-base border-2 p-2 rounded-md w-full justify-start" ><BsTwitterX /> Twitter</button>
                <button className="flex items-center btn join-ite gap-3 text-base border-2 p-2 rounded-md w-full justify-start"><FaSquareInstagram />Instagram</button>
            </div>
            
        </div>
    );
};

export default FindUs;