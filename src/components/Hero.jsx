import clientAudioPhile from "../assets/client-audiophile.svg";
import clientDatabiz from "../assets/client-databiz.svg";
import clientMaker from "../assets/client-maker.svg";
import clientMeet from "../assets/client-meet.svg";

import { LearnMoreBtn } from "./Buttons/LearnMoreBtn";
import imgHeroDskt from "../assets/image-hero-desktop.png";

export const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full px-6 sm:px-10 lg:px-20 py-8 lg:py-16 gap-y-8 lg:gap-y-0">
      <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-neutral-almost-black max-w-[90%] md:max-w-[450px]">
          Make remote work
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-neutral-medium-gray max-w-[90%] md:max-w-[480px]">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <LearnMoreBtn />
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 md:mt-10">
          <img
            src={clientDatabiz}
            alt="Databiz"
            className="h-4 sm:h-5 lg:h-8 w-auto"
          />
          <img
            src={clientAudioPhile}
            alt="Audiophile"
            className="h-4 sm:h-5 lg:h-8 w-auto"
          />
          <img
            src={clientMeet}
            alt="Meet"
            className="h-4 sm:h-5 lg:h-8 w-auto"
          />
          <img
            src={clientMaker}
            alt="Maker"
            className="h-4 sm:h-5 lg:h-8 w-auto"
          />
        </div>
      </div>

      <div className="flex justify-center items-center max-md:order-first">
        <img
          src={imgHeroDskt}
          alt="Hero"
          className="max-w-full max-h-screen md:max-h-[80vh] w-auto object-contain"
        />
      </div>
    </div>
  );
};
