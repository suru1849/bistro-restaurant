const PopulerMenuCard = ({ menu }) => {
  const { name, price, image, recipe } = menu || {};

  return (
    <div className="flex gap-3">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-[118px] h-[104px]"
        src={image}
      />
      <div>
        <p className="text-lg uppercase">{name}-------------</p>
        <p>{recipe}</p>
      </div>
      <p className="text-amber-500 font-medium">${price}</p>
    </div>
  );
};

export default PopulerMenuCard;
