import { HERO_CONTENT } from "../assets/Constants";
import profilePhoto from "../assets/ProfilePhoto.jpg";

const Hero = () => {
  return (
    <div className="mb-25 pb-4 px-6 lg:px-16">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="w-full lg:w-[55%]">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-6 text-2xl sm:text-2xl lg:text-6xl font-thin tracking-tight mt-10 text-white leading-tight">Ryan Jay Anthony Timagos</h1>
            <span className="gradient-text text-2xl lg:text-4xl tracking-tight">BS Computer Science</span>
            <span className="gradient-text text-2xl lg:text-4xl tracking-tight">Software Developer</span>
            <p className="my-2 py-6 font-light text-white text-justify max-w-3xl">{HERO_CONTENT}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img src={profilePhoto} alt="Profile" className="w-[380px] lg:w-[450px] rounded-xl shadow-lg"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
