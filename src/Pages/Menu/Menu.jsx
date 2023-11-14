import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Components/Cover/Cover";
import menuBG from "../../assets/menu/banner3.jpg";
import PopulerMenu from "../Home/PopulerMenu/PopulerMenu";

const Menu = () => {
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
      <PopulerMenu></PopulerMenu>
      <Cover
        img={menuBG}
        title={"Our Menu"}
        para={"Would you like to try a dish?"}
      ></Cover>
      <PopulerMenu></PopulerMenu>
      <Cover
        img={menuBG}
        title={"Our Menu"}
        para={"Would you like to try a dish?"}
      ></Cover>
      <PopulerMenu></PopulerMenu>
    </div>
  );
};

export default Menu;
