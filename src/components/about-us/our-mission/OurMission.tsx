import { Typography } from "@/components/ui/typography";
import ourMissionImg from "../../../assets/images/about-us/out-mission/our-mission-img.png";

export const OurMission = () => {
  return (
      <div className="relative">
        <svg
          width="800"
          height="538"
          viewBox="0 0 800 538"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute xl:-left-10 -z-10 top-18 max-md:hidden"
        >
          <path
            d="M1257.25 192.58C1123.52 223.664 292.511 267.027 229.622 267.027C194.597 267.027 42.8504 269.557 -16.0741 201.969C-74.9986 134.382 -66.0776 41.1319 -4.22479 11.133C57.6281 -18.8659 139.987 21.6145 139.987 126.791C139.987 231.968 -36.5627 498.262 -220 536.295"
            stroke="#E6FCF8"
            strokeWidth="3"
          />
        </svg>
        <div className="max-w-378 xl:px-40 max-md:max-w-md px-4 w-full relative overflow-x-hidden md:w-188 xl:w-full mx-auto pt-10">
          <Typography variant={"h2"} className="text-left md:text-center">
            Нашата мисия и визия
          </Typography>
          <div className="my-16 flex md:items-center flex-row max-md:flex-col gap-10 justify-between md:w-188 xl:w-full mx-auto">
            <div className="space-y-2.5 max-md:">
              <Typography variant={"h4"}>Мисията ни</Typography>
              <Typography variant={"sm"} as={"p"}>
                Да осигурим навременна, професионална грижа за болните.
              </Typography>
            </div>
            <img
              src={ourMissionImg}
              data-aos="zoom-in"
              data-aos-duration="800"
              className="w-full h-auto md:w-85 md:h-47.5 xl:w-185 xl:h-104 rounded-3xl"
            />
          </div>
          <div className="my-16 flex items-center flex-row max-md:flex-col-reverse gap-10  ">
            <img
              src={ourMissionImg}
              className="w-full h-auto md:w-85 md:h-47.5 xl:w-185 xl:h-104 rounded-3xl"
              data-aos="zoom-in"
              data-aos-duration="800"
            />
            <div className="space-y-2.5">
              <Typography variant={"h4"}>Визията ни</Typography>
              <Typography variant={"sm"} as={"p"} className="xl:w-110">
                Да бъдем стандарт за модерна медицинска грижа у дома — дигитална,
                достъпна и ориентирана към човека, а не към процесите.
              </Typography>
            </div>
          </div>
        </div>
    </div>
  );
};
