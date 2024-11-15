import { FaGithub, FaGoogle } from "react-icons/fa";

const Social = () => {
    return (
        <div className="text-2xl flex flex-col gap-5 mt-4">
            <button className="flex items-center gap-3 text-lg border-2 p-2 rounded-md"><FaGoogle /> Login with Google</button>
            <button className="flex items-center gap-3 text-lg border-2 p-2 rounded-md"><FaGithub /> Login with Github</button>
        </div>
    );
};

export default Social;