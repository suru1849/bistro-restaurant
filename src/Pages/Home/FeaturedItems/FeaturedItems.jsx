import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img from "../../../assets/home/featured.jpg";
import "./FeaturedItems.css";

const FeaturedItems = () => {
  return (
    <section className="Featured-items bg-fixed brightness-75 my-16 pt-10">
      <SectionTitle
        subheading={"Check it out"}
        heading={"From Our Menu"}
      ></SectionTitle>
      <div className="flex flex-col md:flex-row gap-10 px-36 pb-28 brightness-105">
        <img className="w-[600px] " src={img} />
        <div className="flex justify-center items-center">
          <div className="space-y-2">
            <p>March 20, 2023</p>
            <p className="uppercase text-xl">Where can i get some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              sunt, placeat adipisci quos maiores nulla sapiente, quibusdam
              consequuntur minus dolorem illo ipsum, ex ducimus distinctio porro
              dolore veniam qui fugiat optio. Corrupti debitis a magni placeat
              possimus, autem, mollitia consectetur exercitationem cupiditate ex
              illum sunt odio maiores voluptas, assumenda natus.
            </p>
            <button className="btn btn-outline border-0 border-b-4">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
