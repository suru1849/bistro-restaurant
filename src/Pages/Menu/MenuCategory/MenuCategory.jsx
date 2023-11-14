import PopulerMenuCard from "../../../Components/PopulerMenuCard/PopulerMenuCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Cover from "../../../Shared/Components/Cover/Cover";

const MenuCategory = ({ items, title, heading, subheading, img }) => {
  return (
    <div>
      {!title ? (
        <SectionTitle heading={heading} subheading={subheading}></SectionTitle>
      ) : (
        <Cover
          img={img}
          title={title}
          para={"Would you like to try a dish?"}
        ></Cover>
      )}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 my-5">
        {items.map((menu) => (
          <PopulerMenuCard key={menu._id} menu={menu}></PopulerMenuCard>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
