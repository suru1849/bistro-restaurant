import { Parallax } from "react-parallax";

const Cover = ({ img, title, para }) => {
  return (
    <Parallax
      blur={{ min: -10, max: 10 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero min-h-[500px]">
        <div className="hero-overlay bg-opacity-60 h-[50%] w-[50%]"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">{para}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
