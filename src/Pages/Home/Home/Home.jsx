import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SectionTitle
        heading={"Online Order"}
        subheading={"From 10.00am to 11.00pm"}
      ></SectionTitle>
      <Category></Category>
    </div>
  );
};

export default Home;
