import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Components/Cover/Cover";
import menuBG from "../../assets/menu/banner3.jpg";
import MenuCategory from "./MenuCategory/MenuCategory";
import useMenu from "../../Hooks/useMenu/useMenu";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const offereds = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuBG}
        title={"Our Menu"}
        para={"Would you like to try a dish?"}
      ></Cover>
      {/* offered */}
      <MenuCategory
        items={offereds}
        subheading={"Don't miss"}
        heading={"Todays offer"}
      ></MenuCategory>
      {/* desserts */}
      <MenuCategory
        title={"Desserts"}
        items={desserts}
        img={dessertImg}
      ></MenuCategory>
      {/* pizza */}
      <MenuCategory
        title={"Pizza"}
        items={pizzas}
        img={pizzaImg}
      ></MenuCategory>
      {/* salad */}
      <MenuCategory
        title={"Salad"}
        items={salads}
        img={saladImg}
      ></MenuCategory>
      {/* soup */}
      <MenuCategory title={"Soup"} items={soups} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
