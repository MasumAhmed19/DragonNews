import { Link, useLoaderData, useParams } from "react-router-dom";
import RIghtNavBar from "./layoutComponents/RIghtNavBar";
import NavBar from "./NavBar";

const NewsDetail = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);

  return (
    <div className="container mx-auto">
      <NavBar />
      <div className="grid md:grid-cols-12 gap-10 p-5">
        <div className="md:col-span-9">
          <h2 className="text-xl font-semibold">Dragon News</h2>
          <div className="card bg-base-100 border mt-3 rounded-md">
            <figure className="px-10 pt-10">
              <img
                src={news?.image_url}
                alt="Shoes"
                className="rounded-xl w-full"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <Link to={`/category/${news?.category_id}`} className="btn btn-neutral">Back to All News</Link>
              </div>
            </div>
          </div>
        </div>
        <aside className="md:col-span-3">
          <RIghtNavBar />
        </aside>
      </div>
    </div>
  );
};

export default NewsDetail;
