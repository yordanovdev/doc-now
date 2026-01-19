import Marquee from "react-fast-marquee";
import { Typography } from "@/components/ui/typography";
import person1Image from "../../../assets/images/about-us/people/person1.png";
import person2Image from "../../../assets/images/about-us/people/person2.png";
import person3Image from "../../../assets/images/about-us/people/person3.png";
import person4Image from "../../../assets/images/about-us/people/person4.png";
import person5Image from "../../../assets/images/about-us/people/person5.png";

export const People = () => {
  const images = [
    { src: person1Image, alt: "Team member 1" },
    { src: person2Image, alt: "Team member 2" },
    { src: person3Image, alt: "Team member 3" },
    { src: person4Image, alt: "Team member 4" },
    { src: person5Image, alt: "Team member 5" },
  ];

  // Double the images to ensure enough content for seamless loop
  const doubledImages = [...images, ...images];

  return (
    <div className="overflow-hidden">
      <div className="max-w-378 xl:px-10 px-4 max-md:max-w-md w-full relative overflow-x-hidden md:w-188 xl:w-full mx-auto pt-16">
        <div className="w-full md:w-120 space-y-2">
          <Typography variant={"h2"}>Хората зад DocNow</Typography>
          <Typography variant={"p"}>
            Зад платформата стои екип от медицински специалисти и
            професионалисти, обединени от една идея — медицинската грижа
            трябва да бъде спокойна, навременна и достъпна. Подбираме
            внимателно всеки специалист, с когото работим, защото доверието
            започва от хората.
          </Typography>
        </div>
      </div>
      <div className="w-screen relative left-1/2 -translate-x-1/2 xl:mt-16 mt-10">
        <Marquee
          speed={40}
          pauseOnHover={true}
          gradient={false}
          autoFill={true}
        >
          {doubledImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="rounded-3xl w-20 h-25 md:w-25 md:h-31.75 xl:w-45.75 xl:h-58 shrink-0 mx-1.5 md:mx-3"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};
