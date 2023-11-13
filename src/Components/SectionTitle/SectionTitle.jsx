const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="text-center w-4/12 mx-auto mt-16 mb-10">
      <p className="text-amber-400 font-bold">---{subheading}---</p>
      <h1 className="text-4xl uppercase font-medium border-y-2 py-2">
        {heading}
      </h1>
    </div>
  );
};

export default SectionTitle;
