import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeaturedItems from "../FeaturedItems/FeaturedItems";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopulerMenu></PopulerMenu>
      <FeaturedItems></FeaturedItems>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
