import ReactStars from 'react-rating-stars-component'
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';



const SIngleNews = (props = {}) => {
  const {singleNews} = props || {}

  const limitWord = (text, wordLimit)=>{
    const shortDes = text.split(" ")
    return text.length > wordLimit ? shortDes.slice(0, wordLimit).join(' ') + ' ...': text

  }

  return (
    <div className="card bg-base-100 border">
      <div className="flex items-center p-4">
        <img
          src={singleNews.author.img}
          alt={singleNews.author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h4 className="text-md font-semibold">{singleNews.author.name}</h4>
          <p className="text-sm text-gray-500">{new Date(singleNews.author.published_date).toDateString()}</p>
        </div>
      </div>
      <h2 className="card-title px-4 rounded-md">{singleNews.title}</h2>
      <figure className="p-5">
        <img src={singleNews.thumbnail_url} alt="Thumbnail" className="w-full h-[350px] object-cover object-center rounded-lg" />
      </figure>
      <p className="p-4 text-gray-600">{limitWord(singleNews.details, 22)} <Link to={`/news/${singleNews._id}`} className='text-red-500'>Read more</Link> </p>
      <div className="card-actions justify-between items-center px-4 pb-4">
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500"> 
            <ReactStars
              count={5}
              value={singleNews.rating.number}
              size={24}
              activeColor="text-yellow-500"
              isHalf={true} // Allows for half-star ratings
              edit={false}  // Makes it read-only if you just want to display rating
            />
          </span>
          <span className="badge bg-yellow-400 p-3 badge-sm">{singleNews.rating.badge}</span>
        </div>
        <div className="text-gray-500 flex items-center space-x-1">
        <FaEye /> <span>{singleNews.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default SIngleNews;
