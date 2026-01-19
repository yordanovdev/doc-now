import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import headerAboutUsImage from "../../../assets/images/about-us/header-img.png";

export const AboutUsHeader = () => {
  return (
    <div className="relative overflow-hidden">
      <header className="max-w-378 md:w-188 xl:w-full max-md:max-w-md relative mx-auto px-4 md:px-6 xl:px-10 pb-10 pt-0 md:pt-4 xl:pt-8 xl:pb-16 flex items-center gap-16 flex-col xl:flex-row justify-between">
        {/* Xl svg */}
        <svg
          width="954"
          height="670"
          viewBox="0 0 954 670"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-12 transform -rotate-5 right-0 -z-10 hidden xl:block"
        >
          <path
            d="M1465.38 667C1366.88 667 1150.88 630.5 955.378 584C803.879 547.966 737.878 449.087 701.378 343.5C685.548 297.705 675.378 217 714.378 159C753.378 101 842.878 63.9091 891.378 108C939.878 152.091 921.378 232.78 848.378 283C775.378 333.22 293.878 424.5 177.378 193C98.4406 36.1408 2.37845 -262 2.37845 -262"
            stroke="#E6FCF8"
            strokeWidth="5"
          />
        </svg>

        {/* Medium svg */}
        <svg
          width="1300"
          height="583"
          viewBox="0 0 800 583"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute block xl:hidden -z-10 top-0 scale-120 -rotate-10"
        >
          <path
            d="M1175 580C1103.51 580 946.737 553.523 804.843 519.792C694.885 493.653 646.982 421.927 620.49 345.334C609.001 312.115 601.62 253.571 629.926 211.498C658.232 169.425 723.191 142.52 758.392 174.503C793.593 206.487 780.019 287.569 727.035 323.998C674.052 360.428 355.683 455.169 89.7348 345.334C-103.097 265.696 -124 -70 -124 -70"
            stroke="#E6FCF8"
            strokeWidth="5"
          />
        </svg>

        <div
          data-aos="fade-right"
          data-aos-duration="800"
          className="w-150 max-xl:w-full max-xl:space-y-3 flex flex-col items-start md:items-center xl:items-start xl:shrink-0"
        >
          <Typography
            variant={"h1"}
            className="text-left md:text-center xl:text-left"
          >
            Създадохме услугата, която самите ние бихме искали да използваме
          </Typography>
          <Typography
            variant="p"
            className="mb-8 sm:text-left md:text-center xl:text-left md:w-87.5"
          >
            Качествената медицинска грижа често изисква време, чакане и излишен
            стрес. Ние решихме да променим това.
          </Typography>
          <Button variant={"filled"} className="w-full md:w-fit">
            <Typography variant="link" className="hover:text-inherit" as={"p"}>
              Начуи повече за нашата мисия
            </Typography>
          </Button>
        </div>
        <img
          src={headerAboutUsImage}
          data-aos="zoom-in"
          data-aos-duration="800"
          className="rounded-3xl w-full h-76.5 md:w-150 md:h-134 xl:w-full xl:h-auto xl:aspect-578/433 object-cover"
        />
      </header>
    </div>
  );
};
