import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import PopulerMenuCard from "../../../Components/PopulerMenuCard/PopulerMenuCard";
import useMenu from "../../../Hooks/useMenu/useMenu";

const PopulerMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section>
      <SectionTitle
        heading={"From Out Menu"}
        subheading={"Check it out"}
      ></SectionTitle>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 my-5">
        {popular.map((menu) => (
          <PopulerMenuCard key={menu._id} menu={menu}></PopulerMenuCard>
        ))}
      </div>
      <div className="flex justify-center py-5">
        <button className="btn btn-outline border-0 border-b-4">
          Read More
        </button>
      </div>
    </section>
  );
};

export default PopulerMenu;
