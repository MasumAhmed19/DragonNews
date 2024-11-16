import { useLoaderData } from "react-router-dom";
import SIngleNews from "../components/SIngleNews";

const CategoryNews = () => {
    const {data: news} = useLoaderData();

    return (
        <div>
            <p className="text-base font-semibold">Dragon News Home</p>
            <p className="text-gray-500">{news.length} news found in this category</p>

            <div className="grid grid-cols-1 gap-5">
                {   
                    news.length===0? 
                    <div className="bg-base-100 flex items-center justify-center h-[200px]">There is no News in this Category</div> 
                    
                    : 
                    
                    news.map(elNews => <SIngleNews singleNews={elNews} key={elNews._id}/>)
                    
                }

            </div>
        </div>
    );
};

export default CategoryNews;