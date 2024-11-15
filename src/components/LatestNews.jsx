import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-5 bg-[#f3f3f3] p-2 rounded-sm">
            <button className="px-5 py-2 bg-red-500 text-white text-lg font-semibold rounded-sm">Latest</button>
            <Marquee pauseOnHover={true} className="flex gap-5">
                <Link to='/news' className="hover:text-red-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. </Link>
                <Link to='/news' className="hover:text-red-500">Debitis veritatis aperiam in! Laudantium quaerat placeat distinctio ut. </Link>
                <Link to='/news' className="hover:text-red-500">Quidem eius error exercitationem sint natus, a voluptatibus id! Consequuntur id nobis rerum. </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;